
class App{
  constructor(){
    const a = document.querySelector('.cls-1');
    const b = document.querySelector('.cls-2');
    console.log(a.getTotalLength());
    console.log(b.getTotalLength());
  }
}

window.onload = () => {
  new App();
}