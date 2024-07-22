import {
  Injectable,
  Renderer2,
  RendererFactory2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

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
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(this.platformId);
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

   saveTheme() {
    if (this.isBrowser) {
      localStorage.setItem('theme', this.currentTheme);
    }
  }

  private loadTheme() {
    if (this.isBrowser) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        this.currentTheme = storedTheme;
        if (this.currentTheme === 'dark') {
          this.renderer.addClass(document.body, 'dark');
        }
      }
    }
  }

  private saveSelectedTopic() {
    if (this.isBrowser && this.selectedTopic) {
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
    if (this.isBrowser) {
      const storedTopic = localStorage.getItem('selectedTopic');
      if (storedTopic) {
        const parsedTopic = JSON.parse(storedTopic);
        this.selectedTopic = {
          name: parsedTopic.name,
          icon: this.sanitizer.bypassSecurityTrustHtml(parsedTopic.icon), 
          bgColor: parsedTopic.bgColor,
        };
      }
    }
  }
}
