// consider the canvas size fixed for Splice
const dim = {
  w: 1500,
  h: 500
}

// This code is out of your scope. It's running behind the scenes
// before we hand over the p5 renderer and all parameters to you.
function run() {
  new p5((p5) => {
    const params = {
      Randomness,
      colors: Colors.map((c) => ({
        color: p5.color(c.hex),
        ...c
      }))
    };

    p5.setup = () => {
      p5.randomSeed(Randomness);
      p5.pixelDensity(1);
      p5.createCanvas(dim.w, dim.h, p5.P2D);
    }

    p5.draw = () => {
      splice({ p5, dim, params });
      p5.noLoop();
    }
  });
}

run();