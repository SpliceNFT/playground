const p5 = {
  random: () => Math.random()
}

function generateTrait(trait_type, distributions, values) {
  const sum = distributions.reduce((prv,cur) => (cur + prv), 0);
  if (sum !== 10000) throw ("probabilites don't add up to 100%");
  const traitRandomness = 10000 * p5.random();
  let probability = 10000;
  for (const i in distributions) {
    probability -= distributions[i]
    if (traitRandomness > probability) {
      return { trait_type, value: values[i] }
    }
  }
  return { trait_type, value: values[distributions.length -1]}
}

//10% probability of Broccoli...
const trait = generateTrait("Food", [1000, 2500, 6500], ["Broccoli", "Avocado", "Marshmallow"]);
console.log(trait);

function test() {
  const histogram = {};
  for(let i=1_000_000;i-->0;) {
    const trait = generateTrait("Food", [1000, 2500, 6500], ["Broccoli", "Avocado", "Marshmallow"]);
    if (!histogram[trait.value]) histogram[trait.value] = 0;
    histogram[trait.value] = histogram[trait.value] + 1
  }
  const total = Object.values(histogram).reduce((prv, cur) => cur + prv, 0); // 100000
  const prob = Object.keys(histogram).map(k => ({[k]: {count: histogram[k], prob: 100 * (histogram[k]/total)}}) )
  console.log(prob);
}

//test();
