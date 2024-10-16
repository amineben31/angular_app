import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  public name = 'test';
  public hasError = true;
  public display = true;
  @Input() public parentData: any;
  @Output() public childevent = new EventEmitter();
  greatUser() {
    return this.name;
  }

  onClick(myInput: string) {
    this.name = myInput;
    this.display = !this.display;
  }
  onFire() {
    this.childevent.emit('Hey Codevolution');
  }
  public colors = ['red', 'blue', 'green', 'yellow'];
  public messageClass = {
    error: this.hasError,
    'not-error': !this.hasError,
  };
  public style = {
    color: 'blue',
    fontStyle: 'italic',
  };
}
