import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export default class GlobalService {
    // private mainPages = [
    //     '/home', '/invest', '/play', '/bonus', '/more'
    // ]
    private subPages = [
        '/home/boost', '/bonus/daily-reward', '/more/become-a-ceo', '/play/trivia', '/play/word-guess'
    ]
    private _currentPage: BehaviorSubject<string> = new BehaviorSubject<string>('home')
    private _isMainPage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
    private _pageTitle: BehaviorSubject<string> = new BehaviorSubject<string>('')
    get currentPage$():Observable<string> {
        return this._currentPage.asObservable()
    }

    get isMainPage$():Observable<boolean> {
        return this._isMainPage.asObservable()
    }

    get pageTitle$():Observable<string> {
        return this._pageTitle.asObservable()
    }
    updateCurrentPage(currentPage:string) {
        this._currentPage.next(currentPage)
        this._pageTitle.next(currentPage.split('/').slice(-1)[0].replace(/-/g, " "))
        this.checkIsMainPage(currentPage)
        console.log(currentPage.split('/').slice(-1)[0].replace(/-/g, " "));
        
    }


    private checkIsMainPage(currentPage:string) {
        if (this.subPages.includes(currentPage)) {
            this._isMainPage.next(false)
        } else {
            this._isMainPage.next(true)
        }
    }

    formatTime(timeInSeconds:number) {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        
        // Add leading zero if needed
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
}