import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
})
export class MarksComponent implements OnInit {
  score: number | null = null;
  selectedTopic = this.themeService.getSelectedTopic();

  constructor(private router: Router, public themeService: ThemeService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { score: number };
    this.score = state?.score ?? null;
  }

  ngOnInit(): void {}

  playAgain() {
    this.router.navigate(['/home']);
  }

  toggleColor(): void {
    this.themeService.toggleTheme();
  }
}
