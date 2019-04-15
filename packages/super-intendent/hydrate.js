import React, { Component } from "react";

export default class Hydrate extends Component {
  static data = {};

  static storeData(id, data) {
    Hydrate.data[id] = data;
  }

  static getData() {
    return Hydrate.data;
  }

  state = {
    id: Math.random()
      .toString(36)
      .substring(2, 15) // quick and dirty dev id
  };

  constructor(props) {
    super(props);
    Hydrate.storeData(this.state.id, this.getHydrationData());
  }

  getHydrationData() {
    const { props } = this;
    const rootIsFragment = props.children.type === React.Fragment;
    const children = rootIsFragment
      ? props.children.props.children
      : props.children;
    const childrenAsArr = React.Children.toArray(children);
    const data = childrenAsArr.map(child => this.getDataFromChild(child));
    return data;
    //return { rootIsFragment, children: data };
  }

  getDataFromChild({ type, props }) {
    const name = type.displayName || type.name;
    return { name, props };
  }

  render() {
    return (
      <>
        <script type="application/hydration-marker" hid={this.state.id} />
        {this.props.children}
      </>
    );
  }
}
