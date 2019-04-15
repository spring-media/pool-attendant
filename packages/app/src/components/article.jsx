import { h } from "preact";
// import { Component } from "preact";
import { Component } from "preact/src/component";

export default class Article extends Component {
  state = {
    counter: 1
  };

  componentDidMount() {
    console.log("Article did mount");
  }

  increase() {
    this.setState(state => {
      const counter = state.counter + 1;
      console.log("Inc to", counter);
      return { counter };
    });
  }

  render() {
    return (
      <article onClick={() => this.increase()}>
        <h2>Fermentum Amet Aenean ({this.state.counter})</h2>
        <p>
          Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </article>
    );
  }
}
