import { DonationSection } from './donation-section.js';
// import { connect } from '../config.js';

class App{
  constructor(){
    new DonationSection();
    // connect();
  }
}

window.onload = () => {
  new App();
}