class BattleEvent {
  constructor(event, battle) {
    this.event = event;
    this.battle = battle;
  }

  textMessage(resolve) {
    const message = new TextMessage({
      text: this.event.text,
      onComplete: () => {
        resolve();
      }
    });
  }

  init(resolve) {
    this[this.event.type](resolve);
  }
}