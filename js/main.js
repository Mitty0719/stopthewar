import { DonationSection } from "./donation-section.js";

class App{
  constructor(){
    new DonationSection();
  }
}

window.onload = () => {
  new App();
}