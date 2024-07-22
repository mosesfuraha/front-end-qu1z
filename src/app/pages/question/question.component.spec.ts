import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from '../theme.service';
import { ChangeDetectorRef } from '@angular/core';
import { TOPICS } from '../topic.data';

// Mock DomSanitizer
class MockDomSanitizer {
  bypassSecurityTrustHtml(value: string) {
    return value;
  }
}
class MockChangeDetectorRef {
  detectChanges() {}
}
describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let themeService: ThemeService;
  let cdr: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionComponent],
      providers: [
        { provide: DomSanitizer, useClass: MockDomSanitizer },
        ThemeService,
        { provide: ChangeDetectorRef, useClass: MockChangeDetectorRef }, // Updated to use MockChangeDetectorRef
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
  });

  it('should set the initial topic in ngOnInit', () => {
    const initialTopic = TOPICS.find(
      (topic) => topic.title === 'Accessibility'
    );
    jest.spyOn(themeService, 'setSelectedTopic');

    component.ngOnInit();

    if (initialTopic) {
      expect(themeService.setSelectedTopic).toHaveBeenCalledWith({
        name: initialTopic.title,
        icon: initialTopic.icon,
        bgColor: initialTopic.bgColor,
      });
    } else {
      expect(themeService.setSelectedTopic).not.toHaveBeenCalled();
    }
  });
});
