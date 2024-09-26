import { Routes } from "@angular/router";
import { PlayComponent } from "./play.component";
import { TriviaGameComponent } from "./trivia-game/trivia-game.component";
import { GuessWordComponent } from "./guess-word/guess-word.component";

export default [
    {
        path:'',
        component: PlayComponent,
    },
    {
        path: 'trivia',
        component: TriviaGameComponent
    },
    {
        path: 'word-guess',
        component: GuessWordComponent
    }
] as Routes