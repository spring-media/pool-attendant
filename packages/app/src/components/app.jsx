import { h } from "preact";
import Article from "./article";

export default () => (
  <div>
    <h1>Hello World!</h1>
    <p onClick={() => console.log("This should not be clickable")}>
      This should not be clickable
    </p>
    <Article />
  </div>
);
