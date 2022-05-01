class SceneTransition {
  constructor() {
    this.element = null;
  }
  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("SceneTransition")
  }

  fadeOut() {
    
  }

  init(container, callback) {
    this.createElement();
    container.appendChild(this.element);

    this.element.addEventListener("onanimationend", () => {
      callback();
    }, { once: true})
  }
}