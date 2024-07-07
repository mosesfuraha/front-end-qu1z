import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TOPICS } from '../topic.data';
import { QUESTIONS } from '../questions.data';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  topics = TOPICS.map((topic) => ({
    ...topic,
    icon: this.sanitizer.bypassSecurityTrustHtml(topic.icon),
  }));
  showSingle = false;
  selectedTopic: keyof typeof QUESTIONS | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    public themeService: ThemeService
  ) {}

  showSingleComponent(topic: keyof typeof QUESTIONS): void {
    this.selectedTopic = topic;
    this.showSingle = true;
  }

  toggleColor(): void {
    this.themeService.toggleTheme();
  }
}
