class RevealingText {
  constructor(config) {
    this.element = config.element;
    this.text = config.text;
    this.speed = config.speed || 70;

    this.timeout = null;
    this.isDone = false;
  }

  init() {
    let characters = [];
    this.text.split("").forEach(character => {
      let span = document.createElement("span");
    })
  }
}