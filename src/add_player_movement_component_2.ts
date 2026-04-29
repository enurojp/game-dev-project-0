import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-movement',
  template: `
    <div class="player-container">
      <div 
        class="player" 
        [style.left.px]="position.x"
        [style.top.px]="position.y"
        [style.transform]="'translate(' + offset.x + 'px, ' + offset.y + 'px)'"
      ></div>
    </div>
  `,
  styles: [`
    .player-container {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .player {
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: #4285f4;
      border-radius: 50%;
      transition: transform 0.1s ease;
    }
  `]
})
export class PlayerMovementComponent implements OnInit {
  @Input() speed = 200;
  position = { x: 400, y: 300 };
  offset = { x: 0, y: 0 };
  private keys: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.setupKeyboardInput();
    this.setupGameLoop();
  }

  private setupKeyboardInput(): void {
    window.addEventListener('keydown', (e) => this.keys[e.key.toLowerCase()] = true);
    window.addEventListener('keyup', (e) => this.keys[e.key.toLowerCase()] = false);
  }

  private setupGameLoop(): void {
    setInterval(() => {
      let dx = 0;
      let dy = 0;
      
      if (this.keys['w'] || this.keys['arrowup']) dy -= 1;
      if (this.keys['s'] || this.keys['arrowdown']) dy += 1;
      if (this.keys['a'] || this.keys['arrowleft']) dx -= 1;
      if (this.keys['d'] || this.keys['arrowright']) dx += 1;
      
      if (dx !== 0 || dy !== 0) {
        const magnitude = Math.sqrt(dx * dx + dy * dy);
        dx = (dx / magnitude) * this.speed * 0.016;
        dy = (dy / magnitude) * this.speed * 0.016;
        
        this.position.x += dx;
        this.position.y += dy;
      }
    }, 16);
  }
}
