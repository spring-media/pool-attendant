import { h, Component } from "preact";

export default class Article extends Component {
  componentDidMount() {
    console.log("Article did mount");
  }

  render() {
    return (
      <article onClick={() => console.log("clicked on Article")}>
        <h2>Fermentum Amet Aenean</h2>
        <p onClick={() => console.log("clicked on P")}>
          Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </article>
    );
  }
}
