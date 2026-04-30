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

    public Update(deltaTime: number): void {
        this.HandleInput();
        this.UpdatePhysics(deltaTime);
        this.UpdateState();
    }

    private HandleInput(): void {
        if (Input.IsKeyPressed(Key.Space) && this.isGrounded) {
            this.velocity.y = this.jumpForce;
            this.state = PlayerState.Jumping;
        }

        if (Input.IsKeyPressed(Key.A)) {
            this.velocity.x = -this.moveSpeed;
        } else if (Input.IsKeyPressed(Key.D)) {
            this.velocity.x = this.moveSpeed;
        } else {
            this.velocity.x = 0;
        }
    }

    private UpdatePhysics(deltaTime: number): void {
        this.velocity.y += this.gravity * deltaTime;
    }

    private UpdateState(): void {
        if (this.velocity.y !== 0 && this.isGrounded) {
            this.state = PlayerState.Jumping;
        } else if (this.velocity.y > 0 && !this.isGrounded) {
            this.state = PlayerState.Falling;
        } else if (this.velocity.x !== 0) {
            this.state = PlayerState.Running;
        } else {
            this.state = PlayerState.Idle;
        }
    }
}
