// P5 autocomplete/helpers for VSCODE
/// <reference path="./types/p5.global-mode.d.ts" />
// "use strict";

/**
 * @param {Object} args all inputs
 * @param {object} args.p5 the p5 instance
 * @param {object} args.params the parameters
 * @param {object[]} args.params.colors the input colors
 * @param {p5.Color} args.params.colors[].color the p5 color object
 * @param {number} args.params.colors[].freq the frequency of that color in the original
 * @param {string} args.params.colors[].hex the color hex value
 * @param {number[]} args.params.colors[].rgb the 3 RGB values of that color
 * @param {object} args.dim
 * @param {number} args.dim.w the canvas width
 * @param {number} args.dim.h the canvas height
 */

///////////////// YOUR CODE STARTS HERE ///////////////////////
function splice({ p5, params, dim }) {
  // all your code must go inside this function.
  // no animation, no draw() function needed

  //destructure input parameters
  const { colors } = params;

  // CLASSES must be defined before THE ALGORITHM
  class C {
    constructor() {
      this.x = dim.w / 2;
      this.y = dim.h / 2;
    }
  }
  // FUNCTIONS can be defined before or after THE ALGORITHM
  // the random seed is deterministic / derived from the NFT origin (@see params.js)
  function randomCircle(x, y) {
    const radius = p5.random(100, 200);
    p5.fill(p5.random(colors).color);
    p5.stroke(p5.random(colors).color);
    p5.strokeWeight(p5.random(1, 5));
    p5.ellipse(x, y, radius, radius);
  }

  /////////////////// THE ALGORITHM ////////////////////////////////

  let y = dim.h;
  for (let color of colors) {
    p5.fill(color.color); // colors[].color is a p5 color
    p5.strokeWeight(0);
    y = y - color.freq * dim.h;
    p5.rect(0, y, dim.w, color.freq * dim.h);
  }

  let center = new C();
  p5.noStroke();

  randomCircle(center.x, center.y);
}
/////////////// END OF YOUR CODE ////////////////////////
