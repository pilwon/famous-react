import components from './components';
import domRenderables from './dom-renderables';
import webglRenderables from './webgl-renderables';

import Node from './Node';
import Scene from './Scene';

let globalRef = this // whatever `this` is if there's no browser or node.js
if (window) globalRef = window // browser
else if (global) globalRef = global // node.js

globalRef.reactFamous = {
  components,
  domRenderables,
  webglRenderables,

  Node,
  Scene,
}
