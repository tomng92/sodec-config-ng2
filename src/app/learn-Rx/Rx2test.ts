
import {Hero} from "../hero-service/hero";



class HeroObj implements Hero {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  };

  toString(): string {
    return `Hero ${this.id} ${this.name}`;
  }

}


let hero: Hero = new HeroObj(11, '222');

console.log(hero.toString());
