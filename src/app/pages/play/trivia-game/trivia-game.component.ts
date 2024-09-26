import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../../UI/top-header/top-header.component';
import { TabValueHorizintalComponent } from '../../../UI/tab-value-horizintal/tab-value-horizintal.component';
import { questionData, triviaGameReward } from './trivia-game-data';
import { Option, Question } from './trivia-game-modal';
import { ButtonComponent } from '../../../UI/button/button.component';
import { CommonModule } from '@angular/common';
import { MainModalService } from '../../../services/main-modal.service';
import { DecimalPipe } from '@angular/common';
import { GamesActionsComponent } from '../games-actions/games-actions.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trivia-game',
  standalone: true,
  imports: [
    CommonModule,
    TopHeaderComponent,
    TabValueHorizintalComponent,
    ButtonComponent,
    GamesActionsComponent
  ],
  providers: [DecimalPipe],
  templateUrl: './trivia-game.component.html',
  styleUrl: './trivia-game.component.scss',
})
export class TriviaGameComponent {
  questionData: Question;
  selectedOption: Option;
  triviaGameReward: number;
  constructor(
    private _mainModalService: MainModalService,
    private _decimalPipe: DecimalPipe,
    private _router:Router
  ) {
    this.questionData = questionData;
    this.triviaGameReward = triviaGameReward;
    this.selectedOption = {
      id: null,
      option: null,
    };
  }
  onSelectOption(option: Option) {
    this.selectedOption = option;
  }
  onSubmitAnswer() {
    this._router.navigate(['play'])
    if (this.selectedOption.isTrue) {
      this.handleCorrectAnswer();
    } else {
      this.handleWrongAnswer();
    }
  }

  handleCorrectAnswer() {
    this._mainModalService.openModal({
      imgSrc: 'assets/play/bingo.png',
      title: 'Bingo!',
      subtitle:
        'You are such a genius! And that’s how an entrepreneur should be.',
      buttonTitle: 'Come back tomorrow for more',
      navigationRoute: 'play',
      content: `
          <div class="flex flex-col gap-2">
            <div class="m-auto w-9 h-9">
              <img class="w-full h-full" src="assets/logo/logo.png" alt="">
            </div>
            <div class="text-white text-lg font-bold text-center">
              ${this._decimalPipe.transform(this.triviaGameReward)}
            </div>
          </div>
        `,
    });
  }

  handleWrongAnswer() {
    this._mainModalService.openModal({
      imgSrc: 'assets/home/faild-heart.png',
      title: 'Oops!',
      subtitle:
        'Life is all about finding answers and now is the time for you to remember the answer.',
      buttonTitle: 'Come back tomorrow for more',
      navigationRoute: 'play',
      content: `
          <div class="flex flex-col gap-2">
            <div class="text-white text-sm font-bold text-center">
              ${questionData.question}
            </div>
            <div class="text-slate-400 text-xs font-bold text-center flex gap-2 justify-center">
              <div>Correct Answer is</div>
              <div class="text-green-500">${
                questionData.options.find((option) => option.isTrue)?.option
              }</div>       
            </div>
          </div>
        `,
    });
  }
}
