import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isToggled: boolean = false;

  @Output() toggleEvent = new EventEmitter<boolean>();

  toggleColor() {
    this.isToggled = !this.isToggled;
    this.toggleEvent.emit(this.isToggled);
  }
}
