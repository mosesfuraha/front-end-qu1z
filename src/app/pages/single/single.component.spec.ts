import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SingleComponent } from './single.component';
import { QUESTIONS } from '../questions.data';
import { QuizQuestion } from '../../models/questions';
import { RouterModule } from '@angular/router';
import { routes } from '../../app-routing.module';

describe('SingleComponent', () => {
  let component: SingleComponent;
  let fixture: ComponentFixture<SingleComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleComponent],
      imports: [RouterModule.forRoot(routes)],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the first question on init', () => {
    component.topic = 'HTML';
    component.ngOnInit();
    expect(component.question).toEqual(QUESTIONS['HTML'][0]);
  });

  it('should reset quiz state on topic change', () => {
    component.topic = 'HTML';
    component.ngOnChanges({
      topic: {
        currentValue: 'HTML',
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.currentQuestionIndex).toBe(0);
    expect(component.correctAnswersCount).toBe(0);
    expect(component.question).toEqual(QUESTIONS['HTML'][0]);
  });

  it('should select the correct answer', () => {
    component.topic = 'HTML';
    component.ngOnInit();
    component.selectAnswer(0);
    expect(component.isAnswered).toBe(true);
    expect(component.selectedAnswerIndex).toBe(0);
    expect(component.isAnswerCorrect).toBe(true);
    expect(component.correctAnswersCount).toBe(1);
  });

  

  it('should show error message if no answer is selected', () => {
    component.topic = 'HTML';
    component.ngOnInit();
    component.nextQuestion();
    expect(component.showMessageError).toBe(true);
  });
});
