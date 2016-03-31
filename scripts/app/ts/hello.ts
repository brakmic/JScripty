export interface GreeterInterface {
  greet(name: string): void;
}

export class Greeter implements GreeterInterface {
  constructor(){

  }
  greet(name: string){
    console.log('Hello ' + name);
  }
}