import { flagSection } from "./flag-section.js";

class App{
  constructor(){
    new flagSection();
  }
}

window.onload = () => {
  new App();
}