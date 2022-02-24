// Part 1
class Slug {
  constructor(name, colour, length, thickness, eyeStickHeight, slimeFactor) {
    this.name = name;
    this.colour = colour;
    this.length = length;
    this.thickness = thickness;
    this.eyeStickHeight = eyeStickHeight;
    this.slimeFactor = slimeFactor;
  }
}

const Pavard = new Slug("Pavard", "yellow-brown", "5cm", "2cm", "0.5cm", 5);

// Part 2
class SlugV2 extends Slug {
  constructor(name, colour, length, thickness, eyeStickHeight) {
    super(name, colour, length, thickness, eyeStickHeight);
    this.slimeFactor = 4;
  }
  coerce(str) {
    return str.match(/[+-]?([0-9]*[.])?[0-9]+/)[0];
  }
  calculateSlimeFactor() {
    this.slimeFactor =
      this.coerce(this.length) *
      this.coerce(this.thickness) *
      this.coerce(this.eyeStickHeight);
  }
}

const Remi = new SlugV2("Remi", "orange", "2.5cm", "1.5cm", "1cm");
Remi.calculateSlimeFactor();
const Russell = new SlugV2("Russell", "pink", "5cm", "1cm", "3cm");
Russell.calculateSlimeFactor();

// Part 3
class SlugUtilities {
  constructor([...slugs]) {
    this.slugs = slugs;
  }
  getRandomSlug() {
    return this.slugs[Math.floor(Math.random() * this.slugs.length)];
  }
  compareSlimeFactor() {
    let slime = 0;
    let slimiestSlug = "Alan";
    for (let slug of this.slugs) {
      if (slug.slimeFactor > slime) {
        slimiestSlug = slug.name;
      }
    }
    return `${slimiestSlug} has the highest slime factor!`;
  }
}

const test = new SlugUtilities([Pavard, Remi, Russell]);
console.log(test.getRandomSlug());
console.log(test.compareSlimeFactor());
console.log(test);
