import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../theme.service';
import { EventEmitter } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let themeService: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: ThemeService,
          useValue: {
            toggleTheme: jest.fn(),
            currentTheme: 'light',
            getSelectedTopic: jest.fn().mockReturnValue(null),
            setSelectedTopic: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
  });

  it('should call toggleTheme and emit toggleEvent with true when theme is dark', () => {
    themeService.currentTheme = 'dark';
    jest.spyOn(component.toggleEvent, 'emit');

    component.toggleColor();

    expect(themeService.toggleTheme).toHaveBeenCalled();
    expect(component.toggleEvent.emit).toHaveBeenCalledWith(true);
  });

  it('should call toggleTheme and emit toggleEvent with false when theme is light', () => {
    themeService.currentTheme = 'light';
    jest.spyOn(component.toggleEvent, 'emit');

    component.toggleColor();

    expect(themeService.toggleTheme).toHaveBeenCalled();
    expect(component.toggleEvent.emit).toHaveBeenCalledWith(false);
  });
});
