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

      //Create each span, add t o element in DOM
      let span = document.createElement("span");
      span.textContent = character;
      this.element.appendChild(span);

      // Add this psan to our interal state Array
      characters.push({
        span,
        delayAfter: character === " " ? 0 : this.speed
      })
    })
  }
}