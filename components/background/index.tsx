import React, { Component } from "react";
import { Scene, WebGL1Renderer, PerspectiveCamera } from "three";
import Renderer from "./renderer";

export default class Background extends Component {
  componentDidMount(): void {
    new Renderer();
  }
  render() {
    return <canvas id="bg" />;
  }
}
