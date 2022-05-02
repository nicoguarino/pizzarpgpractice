class Battle {
  constructor() {

  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("Battle");
    this.element.innerHTML = (`
    <div class="Battle_hero:>
      <img src="${'/images/characters/people/hero.png'} alt="Hero" />
    `)
  }

  init(container) {

  }
}