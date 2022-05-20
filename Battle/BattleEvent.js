class BattleEvent {
  constructor(event, battle) {
    this.event = event;
    this.battle = battle;
  }

  textMessage() {

  }

  init(resolve) {
    this[this.event.type](resolve);
  }
}