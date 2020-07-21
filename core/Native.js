import { native } from "@packages/Core";
import { Component } from "@packages/Component";
import { DomListener } from "@packages/DomListener";

new DomListener()
  .tested()
new Component()
  .tested()

// test create elements
native.createElem('div', 'class1')