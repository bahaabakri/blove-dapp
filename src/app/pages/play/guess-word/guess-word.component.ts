import { Component, ElementRef, Renderer2, signal, ViewChild, WritableSignal } from '@angular/core';
import { TopHeaderComponent } from '../../../UI/top-header/top-header.component';
import { TabValueHorizintalComponent } from '../../../UI/tab-value-horizintal/tab-value-horizintal.component';
import { ButtonComponent } from '../../../UI/button/button.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { guessWordGameReward, guessWordGameWord } from './guess-word-data';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { MainModalService } from '../../../services/main-modal.service';
import { Router } from '@angular/router';
import { GamesActionsComponent } from "../games-actions/games-actions.component";

@Component({
  selector: 'app-guess-word',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TopHeaderComponent,
    TabValueHorizintalComponent,
    ButtonComponent,
    GamesActionsComponent
],
  providers: [DecimalPipe],
  templateUrl: './guess-word.component.html',
  styleUrl: './guess-word.component.scss',
})
export class GuessWordComponent {
  // @ViewChild('checkButtonRef') checkButtonRef!:ElementRef
  guessWordGameReward: number;
  guessWordGameWord: string;
  triesArray: number[];
  numOfTry: number = 5;
  orderOfTry: WritableSignal<number>;
  selectedWord: string[][];
  constructor(
    private _renderer: Renderer2,
    private _mainModalService: MainModalService,
    private _decimalPipe: DecimalPipe,
    private _router:Router
  ) {
    this.guessWordGameReward = guessWordGameReward;
    this.guessWordGameWord = guessWordGameWord;
    this.triesArray = Array.from({ length: this.numOfTry }, (_, i) => i + 1);
    this.selectedWord = Array.from({ length: this.numOfTry }, () =>
      Array(this.guessWordGameWord.length).fill(null)
    );
    console.log(this.triesArray);

    this.orderOfTry = signal(1);
  }

  handleOnInputKeyUp(event: KeyboardEvent, rowIndex: number, colIndex: number): void {
    const inputElement = event.target as HTMLInputElement;
    // move forward
    if (inputElement.value.length === 1) {
      const nextColIndex = colIndex + 1;
      const nextRowIndex = rowIndex;

      // Check if there's another input in the same row
      if (nextColIndex >= this.selectedWord[rowIndex].length) {
        return;
      }
      this.focusInput(nextRowIndex, nextColIndex);
    } else if (inputElement.value.length === 0 || event.key === 'Backspace') {
      // rewind
      const prevColIndex = colIndex - 1;
      const prevRowIndex = rowIndex;
      if (prevColIndex < 0) {
        return;
      }
      this.focusInput(prevRowIndex, prevColIndex);
    }
  }
  // Focuses the input by its row and column index
  focusInput(rowIndex: number, colIndex: number) {
    const inputId = `input-${rowIndex}-${colIndex}`;
    const nextInput = document.getElementById(inputId) as HTMLInputElement;

    if (nextInput) {
      nextInput.focus();
    }
  }
  onSubmitAnswer() {
    const rowIndex = this.orderOfTry() - 1;
    let numOfIncluded = 0;
    this.selectedWord[this.orderOfTry() - 1].forEach(
      (selectedLetter, colIndex) => {
        const inputId = `input-${rowIndex}-${colIndex}`;
        const element = document.getElementById(inputId) as HTMLInputElement;
        if (selectedLetter.toLowerCase() === this.guessWordGameWord.charAt(colIndex).toLowerCase()) {
          // included
          numOfIncluded++;
          this._renderer.addClass(element.parentNode, 'included');
        } else if (this.guessWordGameWord.toLowerCase().indexOf(selectedLetter.toLowerCase()) > -1) {
          // misplaced
          this._renderer.addClass(element.parentNode, 'misplaced');
        } else {
          // not included
          this._renderer.addClass(element.parentNode, 'not-included');
        }
      }
    );
    if (numOfIncluded === this.numOfTry) {
      // correct answer -> show success popup
      this._router.navigate(['play'])
      this.handleCorrectAnswer();
    } else if (this.orderOfTry() >= this.numOfTry) {
      // no available chance => show popup
      this._router.navigate(['play'])
      this.handleWrongAnswer();
    } else {
      this.orderOfTry.update((prev) => prev + 1);
      console.log(this.orderOfTry());
    }
  }
  handleSubmit() {
    this.onSubmitAnswer();
    
  }
  handleCorrectAnswer() {
    this._mainModalService.openModal({
      imgSrc: 'assets/play/bingo.png',
      title: 'Bingo!',
      subtitle:
        'You are really good at putting every piece together of the puzzle.',
      buttonTitle: 'Come back tomorrow for more',
      navigationRoute: 'play',
      content: `
          <div class="flex flex-col gap-2">
            <div class="m-auto w-9 h-9">
              <img class="w-full h-full" src="assets/logo/logo.png" alt="">
            </div>
            <div class="text-white text-lg font-bold text-center">
              ${this._decimalPipe.transform(this.guessWordGameReward)}
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
        'They say, “don’t loose hope because you can try again tomorrow”.',
      buttonTitle: 'Come back tomorrow for more',
      navigationRoute: 'play',
      content: `
          <div class="flex flex-col gap-2">
            <div class="text-white text-sm font-bold text-center">
                Wonder what was the word?
            </div>
            <div class="text-slate-400 text-xs font-bold text-center flex gap-2 justify-center">
              <div>Correct Answer is</div>
              <div class="text-green-500 uppercase">${this.guessWordGameWord}</div>       
            </div>
          </div>
        `,
    });
  }
}
