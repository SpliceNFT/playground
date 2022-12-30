// consider the canvas size fixed for Splice
const dim = {
  w: 1500,
  h: 500,
};

// This code is out of your scope. It's running behind the scenes
// before we hand over the p5 renderer and all parameters to you.
async function runSplice() {
  return new Promise((resolve, reject) => {
    const sketch = (p5) => {
      const params = {
        randomness: Randomness,
        colors: Colors.map((c) => ({
          color: p5.color(c.hex),
          ...c,
        })),
      };

      p5.setup = () => {
        p5.randomSeed(Randomness);
        p5.pixelDensity(1);
        p5.createCanvas(dim.w, dim.h, p5.P2D);
      };

      p5.draw = () => {
        p5.noLoop();
        const traits = splice({ p5, dim, params });
        const dataUrl = p5.canvas.toDataURL("image/png");
        resolve({
          traits,
          dataUrl,
        });
      };
    };
    new p5(sketch);
  });
}

//run();
