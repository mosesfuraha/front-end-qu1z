import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;

  constructor() {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkTheme = savedTheme === 'dark';
        this.applyTheme();
      }
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }

  private applyTheme() {
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    if (this.isBrowser()) {
      localStorage.setItem('theme', theme);
    }
  }

  get currentTheme() {
    return this.isDarkTheme ? 'dark' : 'light';
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
