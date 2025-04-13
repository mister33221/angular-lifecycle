import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>👨‍👧 Parent Component</h2>
    <button (click)="toggleChild()">切換子元件</button>
    <button (click)="changeMessage()">變更 message</button>
    <app-child *ngIf="showChild" [message]="message"></app-child>
  `,
})
export class ParentComponent {
  showChild = true;
  message = 'Hello Child';

  toggleChild() {
    this.showChild = !this.showChild;
  }

  changeMessage() {
    this.message = 'Updated at ' + new Date().toLocaleTimeString();
  }
}
