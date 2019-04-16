import { h, render } from "preact";
import Article from "./components/article";

const el = document.querySelector("article");
const parent = el.parentElement;

render(<Article />, parent, el);
