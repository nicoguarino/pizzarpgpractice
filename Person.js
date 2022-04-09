class Person extends GameObject {
  constructor(config) {
    super(config);

    this.movingProgressRemaining = 0;

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
    if (this.movingProgressRemaining > 0) {
      this.updatePosition();
    } else {

      //More cases for starting to walk will be here
      //
      //

      //Case: We're keyboard ready and have an arrow pressed
      if (this.isPlayerControlled && state.arrow) {
        this.startBehavior(state, {
          type: 'walk',
          direction: state.arrow
        })
      }
      this.updateSprite(state);
    }

  }

  startBehavior(state, behavior) {
    // Set chara direction to whatever behavior has 
    this.direction = behavior.direction;

    if (behavior.type === 'walk') {

      //Stop here if space is not free (true)
      if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
        return;
      }

      //ready to walk
      this.movingProgressRemaining = 16;
    }
  }

  updatePosition() {

    const [property, change] = this.directionUpdate[this.direction];
    this[property] += change;
    this.movingProgressRemaining -= 1;
  }

  updateSprite(state) {

    if (this.isPlayerControlled && this.movingProgressRemaining === 0 && !state.arrow) {
      this.sprite.setAnimation('idle-' + this.direction);
      return;
    }

    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation('walk-' + this.direction);
    }
  }
}
