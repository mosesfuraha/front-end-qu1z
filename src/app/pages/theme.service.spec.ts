import { TestBed } from '@angular/core/testing';
import { Renderer2, RendererFactory2, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from './theme.service';
import { isPlatformBrowser } from '@angular/common';

describe('ThemeService', () => {
  let service: ThemeService;
  let rendererFactory: RendererFactory2;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        {
          provide: RendererFactory2,
          useValue: {
            createRenderer: () => ({
              addClass: jest.fn(),
              removeClass: jest.fn(),
            }),
          },
        },
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: jest.fn(),
          },
        },
        {
          provide: PLATFORM_ID,
          useValue: 'browser',
        },
      ],
    });

    service = TestBed.inject(ThemeService);
    rendererFactory = TestBed.inject(RendererFactory2);
    renderer = rendererFactory.createRenderer(null, null);
    jest.spyOn(service as any, 'saveTheme');
  });

  it('should toggle theme from light to dark', () => {
    service.currentTheme = 'light';
    service.toggleTheme();
    expect(service.currentTheme).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    service.currentTheme = 'dark';
    service.toggleTheme();
    expect(service.currentTheme).toBe('light');
  });
  it('should get current theme', () => {
    service.currentTheme = 'dark';
    expect(service.getCurrentTheme()).toBe('dark');
    service.currentTheme = 'light';
    expect(service.getCurrentTheme()).toBe('light');
  });

});
