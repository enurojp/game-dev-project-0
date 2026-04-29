import { Vector2 } from "UnityEngine";

export class PlayerMovementComponent {
    private speed: number = 5.0;
    private rigidbody: any;
    private input: Vector2 = new Vector2();

    constructor() {
        this.rigidbody = this.gameObject.GetComponent("Rigidbody2D");
    }

    public Update(): void {
        this.input.x = Input.GetAxis("Horizontal");
        this.input.y = Input.GetAxis("Vertical");
    }

    public FixedUpdate(): void {
        this.rigidbody.velocity = new Vector2(
            this.input.x * this.speed,
            this.input.y * this.speed
        );
    }
}
