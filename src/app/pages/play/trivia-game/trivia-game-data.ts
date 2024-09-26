import { Question } from "./trivia-game-modal";

const questionData:Question = {
    question: 'When was BTC launched?',
    options: [
        {
            id:1,
            option: '2007'
        },
        {
            id:2,
            option: '2008'
        },
        {
            id:3,
            option: '2009',
            isTrue:true
        },
        {
            id:4,
            option: '2010'
        }
    ]
}
const triviaGameReward = 1000000
export {questionData, triviaGameReward}