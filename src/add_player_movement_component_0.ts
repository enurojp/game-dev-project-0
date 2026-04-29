class PlayerMovementComponent {
  private speed: number = 5.0;
  private rigidbody: any;
  private input: any;

  constructor() {
    this.rigidbody = this.getComponent("Rigidbody");
    this.input = this.getComponent("Input");
  }

  update(deltaTime: number): void {
    const moveX = this.input.getKey("A") ? -1 : this.input.getKey("D") ? 1 : 0;
    const moveZ = this.input.getKey("S") ? 1 : this.input.getKey("W") ? -1 : 0;
    
    const movement = new Vector3(moveX, 0, moveZ).normalized * this.speed * deltaTime;
    this.rigidbody.position += movement;
  }
}
