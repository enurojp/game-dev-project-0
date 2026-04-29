class PlayerMovementComponent {
  private velocity: Vector3 = new Vector3(0, 0, 0);
  private speed: number = 5.0;
  private rigidbody: Rigidbody;

  constructor() {
    this.rigidbody = this.gameObject.GetComponent<Rigidbody>();
  }

  private Update(): void {
    this.velocity.x = Input.GetAxis("Horizontal") * this.speed;
    this.velocity.z = Input.GetAxis("Vertical") * this.speed;
    this.rigidbody.velocity = new Vector3(this.velocity.x, this.rigidbody.velocity.y, this.velocity.z);
  }
}
