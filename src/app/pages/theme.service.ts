import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public currentTheme: 'light' | 'dark' = 'light';
  private renderer: Renderer2;
  private selectedTopic: {
    name: string;
    icon: SafeHtml;
    bgColor: string;
  } | null = null;

  constructor(
    rendererFactory: RendererFactory2,
    private sanitizer: DomSanitizer
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.loadTheme();
    this.loadSelectedTopic();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.saveTheme();
    if (this.currentTheme === 'dark') {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  setSelectedTopic(topic: { name: string; icon: SafeHtml; bgColor: string }) {
    this.selectedTopic = topic;
    this.saveSelectedTopic();
  }

  getSelectedTopic() {
    return this.selectedTopic;
  }

  private saveTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }

  private loadTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      this.currentTheme = storedTheme;
      if (this.currentTheme === 'dark') {
        this.renderer.addClass(document.body, 'dark');
      }
    }
  }

  private saveSelectedTopic() {
    if (this.selectedTopic) {
      localStorage.setItem(
        'selectedTopic',
        JSON.stringify({
          name: this.selectedTopic.name,
          icon: this.selectedTopic.icon,
          bgColor: this.selectedTopic.bgColor,
        })
      );
    }
  }

  private loadSelectedTopic() {
    const storedTopic = localStorage.getItem('selectedTopic');
    if (storedTopic) {
      const parsedTopic = JSON.parse(storedTopic);
      this.selectedTopic = {
        name: parsedTopic.name,
        icon: this.sanitizer.bypassSecurityTrustHtml(parsedTopic.icon), // Restore the safe content
        bgColor: parsedTopic.bgColor,
      };
    }
  }
}
