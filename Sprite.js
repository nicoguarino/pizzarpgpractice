class Sprite {
  constructor(config) {

    //Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    }

    // Configure Animation & Initial State
    this.animations = config.animations || {
      idleDown: [
        [0, 0]
      ],
      // walkDown: [
      //   [0,0], [1,0], [2,0], [3,0],
      // ]

    }
    this.currentAnimation = config.currentAnimation || 'idleDown';
    this.currentAnimationFrame = 0;

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 16;

    ctx.drawImage(this.image,
      0, 0,
      32, 32,
      x, y,
      32, 32
    )
  }
}