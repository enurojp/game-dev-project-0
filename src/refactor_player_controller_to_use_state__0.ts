enum PlayerState {
  Idle,
  Running,
  Jumping,
  Falling
}

class PlayerController {
  private state: PlayerState = PlayerState.Idle;
  private velocity: Vector2 = new Vector2(0, 0);
  private isGrounded: boolean = false;
  private readonly gravity: number = 9.81;
  private readonly jumpForce: number = 10;
  private readonly moveSpeed: number = 5;

  public update(deltaTime: number): void {
    switch (this.state) {
      case PlayerState.Idle:
        this.handleIdle();
        break;
      case PlayerState.Running:
        this.handleRunning();
        break;
      case PlayerState.Jumping:
        this.handleJumping(deltaTime);
        break;
      case PlayerState.Falling:
        this.handleFalling(deltaTime);
        break;
    }
  }

  private handleIdle(): void {
    if (this.isGrounded && Input.isActionPressed("move_right")) {
      this.state = PlayerState.Running;
    }
  }

  private handleRunning(): void {
    if (!Input.isActionPressed("move_right")) {
      this.state = PlayerState.Idle;
    } else if (this.isGrounded && Input.isActionPressed("jump")) {
      this.state = PlayerState.Jumping;
      this.velocity.y = this.jumpForce;
    }
  }

  private handleJumping(deltaTime: number): void {
    this.velocity.y -= this.gravity * deltaTime;
    
    if (this.velocity.y <= 0) {
      this.state = PlayerState.Falling;
    }
  }

  private handleFalling(deltaTime: number): void {
    this.velocity.y -= this.gravity * deltaTime;
    
    if (this.isGrounded) {
      this.state = PlayerState.Idle;
      this.velocity.y = 0;
    }
  }

  public setGrounded(grounded: boolean): void {
    this.isGrounded = grounded;
  }
}
