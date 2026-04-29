class PlayerMovement {
  private speed: number = 5.0;
  private rigidbody: any;
  private input: any;

  constructor() {
    this.rigidbody = this.getComponent("Rigidbody");
    this.input = this.getComponent("Input");
  }

  update(): void {
    const moveX = this.input.getAxis("Horizontal");
    const moveZ = this.input.getAxis("Vertical");
    const move = new Vector3(moveX, 0, moveZ).normalized * this.speed;
    this.rigidbody.velocity = new Vector3(move.x, this.rigidbody.velocity.y, move.z);
  }
}
