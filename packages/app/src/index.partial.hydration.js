import { h } from "preact";
import { EMPTY_OBJ, EMPTY_ARR } from "preact/src/constants";
import { commitRoot } from "preact/src/diff/index";
import { diffChildren } from "preact/src/diff/children";
import { createElement, Fragment } from "preact/src/create-element";
import options from "preact/src/options";

import Article from "./components/article";

const el = document.querySelector("article");
const parent = el.parentElement;

render(<Article />, parent, el);

export function render(vnode, parentDom, replaceNode) {
  if (options.root) options.root(vnode, parentDom);
  let oldVNode = parentDom._prevVNode;
  vnode = createElement(Fragment, null, [vnode]);

  let mounts = [];
  diffChildren(
    parentDom,
    replaceNode ? vnode : (parentDom._prevVNode = vnode),
    replaceNode ? undefined : oldVNode,
    EMPTY_OBJ,
    parentDom.ownerSVGElement !== undefined,
    replaceNode
      ? [replaceNode]
      : oldVNode
      ? null
      : EMPTY_ARR.slice.call(parentDom.childNodes),
    mounts,
    vnode,
    replaceNode || EMPTY_OBJ
  );
  commitRoot(mounts, vnode);
}
