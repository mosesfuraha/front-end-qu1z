import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { QuizQuestion } from '../../models/questions';
import { QUESTIONS } from '../questions.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit, OnChanges {
  @Input() topic: keyof typeof QUESTIONS | null = null;
  question: QuizQuestion | null = null;
  currentQuestionIndex: number = 0;
  selectedAnswerIndex: number | null = null;
  isAnswerCorrect: boolean | null = null;
  isAnswered: boolean = false;
  correctAnswerIndex: number | null = null;
  showMessageError = false;
  correctAnswersCount: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadQuestion();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['topic'] && changes['topic'].currentValue) {
      this.currentQuestionIndex = 0; // Reset index on topic change
      this.correctAnswersCount = 0; // Reset correct answers count
      this.loadQuestion();
    }
  }

  loadQuestion() {
    if (this.topic) {
      const topicQuestions = QUESTIONS[this.topic];
      if (topicQuestions && topicQuestions.length > 0) {
        this.question = topicQuestions[this.currentQuestionIndex];
        this.selectedAnswerIndex = null;
        this.isAnswerCorrect = null;
        this.isAnswered = false;
        this.correctAnswerIndex = null;
        this.showMessageError = false; // Reset the error message
      }
    }
  }

  selectAnswer(index: number): void {
    if (this.isAnswered) {
      return;
    }
    this.showMessageError = false;

    this.selectedAnswerIndex = index;
    this.isAnswerCorrect =
      this.question?.answers[index] === this.question?.correctAnswer;
    this.isAnswered = true;
    this.correctAnswerIndex =
      this.question?.answers.findIndex(
        (answer) => answer === this.question?.correctAnswer
      ) ?? null;

    if (this.isAnswerCorrect) {
      this.correctAnswersCount++;
    }
  }

  nextQuestion() {
    if (this.selectedAnswerIndex === null) {
      this.showMessageError = true;
      return;
    }

    if (this.topic) {
      const topicQuestions = QUESTIONS[this.topic];
      if (
        topicQuestions &&
        this.currentQuestionIndex < topicQuestions.length - 1
      ) {
        this.currentQuestionIndex++;
        this.loadQuestion();
      } else {
        // Navigate to the marks route when the quiz is completed
        this.router.navigate(['/marks'], {
          state: { score: this.correctAnswersCount },
        });
      }
    }
  }
}
