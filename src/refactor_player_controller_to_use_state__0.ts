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
  private speed: number = 200;
  private jumpForce: number = 400;

  update(delta: number): void {
    switch (this.state) {
      case PlayerState.IDLE:
        this.handleIdle();
        break;
      case PlayerState.RUNNING:
        this.handleRunning(delta);
        break;
      case PlayerState.JUMPING:
        this.handleJumping(delta);
        break;
      case PlayerState.FALLING:
        this.handleFalling(delta);
        break;
    }
    
    this.updateState();
  }

  private handleIdle(): void {
    if (Input.isActionPressed("move_right") || Input.isActionPressed("move_left")) {
      this.state = PlayerState.RUNNING;
    }
  }

  private handleRunning(delta: number): void {
    const direction = new Vector2(
      Input.getActionStrength("move_right") - Input.getActionStrength("move_left"),
      0
    );
    
    this.velocity.x = direction.x * this.speed;
    
    if (Input.isActionJustPressed("jump") && this.isGrounded) {
      this.velocity.y = this.jumpForce;
      this.state = PlayerState.JUMPING;
    }
  }

  private handleJumping(delta: number): void {
    this.velocity.y -= 980 * delta;
    
    if (this.velocity.y <= 0) {
      this.state = PlayerState.FALLING;
    }
  }

  private handleFalling(delta: number): void {
    this.velocity.y -= 980 * delta;
    
    if (this.isGrounded) {
      this.velocity.y = 0;
      this.state = PlayerState.IDLE;
    }
  }

  private updateState(): void {
    if (this.velocity.x !== 0 && this.isGrounded) {
      this.state = PlayerState.RUNNING;
    } else if (this.velocity.y > 0 && !this.isGrounded) {
      this.state = PlayerState.JUMPING;
    } else if (this.velocity.y < 0 && !this.isGrounded) {
      this.state = PlayerState.FALLING;
    }
  }
}
