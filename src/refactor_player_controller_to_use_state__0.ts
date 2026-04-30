enum PlayerState {
  IDLE,
  RUNNING,
  JUMPING,
  FALLING
}

class PlayerController {
  private state: PlayerState = PlayerState.IDLE;
  private velocity: Vector2 = new Vector2(0, 0);
  private isGrounded: boolean = true;
  private moveDirection: number = 0;

  public update(deltaTime: number): void {
    this.handleInput();
    this.updateState();
    this.applyPhysics(deltaTime);
    this.updateAnimation();
  }

  private handleInput(): void {
    this.moveDirection = Input.GetAxis("Horizontal");
  }

  private updateState(): void {
    if (this.moveDirection !== 0 && this.isGrounded) {
      this.state = PlayerState.RUNNING;
    } else if (this.moveDirection === 0 && this.isGrounded) {
      this.state = PlayerState.IDLE;
    } else if (this.velocity.y > 0) {
      this.state = PlayerState.JUMPING;
    } else if (this.velocity.y < 0) {
      this.state = PlayerState.FALLING;
    }
  }

  private applyPhysics(deltaTime: number): void {
    switch (this.state) {
      case PlayerState.RUNNING:
        this.velocity.x = this.moveDirection * 200;
        break;
      case PlayerState.IDLE:
        this.velocity.x = 0;
        break;
    }

    this.velocity.y += -600 * deltaTime;
    this.velocity.y = Math.max(this.velocity.y, -1000);
  }

  private updateAnimation(): void {
    // Animation logic would go here
  }
}
