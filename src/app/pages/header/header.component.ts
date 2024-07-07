import { Component, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor(public themeService: ThemeService) {}

  toggleColor() {
    this.themeService.toggleTheme();
    this.toggleEvent.emit(this.themeService.currentTheme === 'dark');
  }
}
