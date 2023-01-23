export class CounterService {
  inactiveCounter =0;
  activeCounter =0;
  constructor() { }

  inactoAct(){
    this.inactiveCounter++;
    console.log('Inactove to active : '+ this.inactiveCounter);
  }

  actoInact(){
    this.activeCounter++;
    console.log('Active to inactive : ' + this.activeCounter);
  }
}
