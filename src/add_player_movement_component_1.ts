class PlayerMovement {
  private speed: number = 5.0;
  private rigidbody: any;
  private input: any;

  constructor() {
    this.rigidbody = this.getComponent("Rigidbody");
    this.input = this.getComponent("Input");
  }

  update(deltaTime: number): void {
    const moveX = this.input.getAxis("Horizontal");
    const moveZ = this.input.getAxis("Vertical");
    
    const movement = new Vector3(moveX, 0, moveZ).normalized * this.speed * deltaTime;
    this.rigidbody.position += movement;
  }
}
