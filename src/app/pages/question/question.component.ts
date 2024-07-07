import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TOPICS } from '../topic.data';
import { QUESTIONS } from '../questions.data';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  topics = TOPICS.map((topic) => ({
    ...topic,
    icon: this.sanitizer.bypassSecurityTrustHtml(topic.icon),
  }));
  showSingle = false;
  selectedTopic: keyof typeof QUESTIONS | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    public themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const initialTopic = this.topics.find(
      (topic) => topic.title === 'Accessibility'
    );
    if (initialTopic) {
      this.themeService.setSelectedTopic({
        name: initialTopic.title,
        icon: initialTopic.icon,
        bgColor: initialTopic.bgColor,
      });
    }
  }

  showSingleComponent(topic: keyof typeof QUESTIONS): void {
    this.selectedTopic = topic;
    this.showSingle = true;
    const selectedTopicData = this.topics.find(
      (t) => t.title === topic.toString()
    );
    if (selectedTopicData) {
      this.themeService.setSelectedTopic({
        name: topic.toString(),
        icon: selectedTopicData.icon as SafeHtml,
        bgColor: selectedTopicData.bgColor,
      });
    }
    this.cdr.detectChanges();
  }

  toggleColor(): void {
    this.themeService.toggleTheme();
  }
}
