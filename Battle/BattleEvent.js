class BattleEvent {
  constructor(event, battle) {
    this.event = event;
    this.battle = battle;
  }

  textMessage(resolve) {
    console.log("A Message!");
  }

  init(resolve) {
    this[this.event.type](resolve);
  }
}