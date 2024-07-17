import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isToggled: boolean = false;

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.isToggled = this.themeService.getCurrentTheme() === 'dark';
  }
  onToggle(event: any): void {
    this.isToggled = event;
  }
}
