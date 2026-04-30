enum PlayerState {
  IDLE,
  WALKING,
  JUMPING,
  FALLING
}

class PlayerController {
  private state: PlayerState = PlayerState.IDLE;
  private velocity: Vector2 = new Vector2(0, 0);
  private isGrounded: boolean = false;
  private readonly gravity: number = 9.81;
  private readonly jumpForce: number = 10;
  private readonly moveSpeed: number = 5;

  public update(deltaTime: number): void {
    this.handleInput();
    this.updatePhysics(deltaTime);
    this.updateAnimation();
  }

  private handleInput(): void {
    const inputX = Input.GetAxis("Horizontal");
    
    if (inputX !== 0) {
      this.state = PlayerState.WALKING;
      this.velocity.x = inputX * this.moveSpeed;
    } else {
      this.velocity.x = 0;
      if (this.isGrounded) {
        this.state = PlayerState.IDLE;
      }
    }

    if (Input.GetButtonDown("Jump") && this.isGrounded) {
      this.state = PlayerState.JUMPING;
      this.velocity.y = this.jumpForce;
      this.isGrounded = false;
    }
  }

  private updatePhysics(deltaTime: number): void {
    if (!this.isGrounded) {
      this.velocity.y -= this.gravity * deltaTime;
      this.state = PlayerState.FALLING;
    }

    // Apply velocity to position
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
  }

  private updateAnimation(): void {
    // Animation logic based on state
    switch (this.state) {
      case PlayerState.IDLE:
        this.playAnimation("idle");
        break;
      case PlayerState.WALKING:
        this.playAnimation("walk");
        break;
      case PlayerState.JUMPING:
        this.playAnimation("jump");
        break;
      case PlayerState.FALLING:
        this.playAnimation("fall");
        break;
    }
  }

  private playAnimation(animationName: string): void {
    // Animation playback logic
  }
}
