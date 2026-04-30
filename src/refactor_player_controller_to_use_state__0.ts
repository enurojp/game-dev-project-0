class PlayerState {
  protected player: PlayerController;
  
  constructor(player: PlayerController) {
    this.player = player;
  }
  
  update(): void {}
  handleInput(): void {}
  onEnter(): void {}
  onExit(): void {}
}

class IdleState extends PlayerState {
  onEnter(): void {
    this.player.animator.setState("idle");
  }
  
  handleInput(): void {
    if (this.player.input.isPressed("move_left") || 
        this.player.input.isPressed("move_right")) {
      this.player.changeState(new MovingState(this.player));
    }
  }
}

class MovingState extends PlayerState {
  onEnter(): void {
    this.player.animator.setState("moving");
  }
  
  handleInput(): void {
    if (!this.player.input.isPressed("move_left") && 
        !this.player.input.isPressed("move_right")) {
      this.player.changeState(new IdleState(this.player));
    }
  }
}

class PlayerController {
  private currentState: PlayerState;
  private animator: Animator;
  private input: InputManager;
  
  constructor() {
    this.currentState = new IdleState(this);
    this.animator = new Animator();
    this.input = new InputManager();
  }
  
  update(): void {
    this.currentState.update();
    this.currentState.handleInput();
  }
  
  changeState(newState: PlayerState): void {
    this.currentState.onExit();
    this.currentState = newState;
    this.currentState.onEnter();
  }
}
