import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { MainModalData } from "../UI/main-modal/main-modal.model";

@Injectable({
    providedIn: 'root'
})
export class MainModalService {

    private _mainModalData:BehaviorSubject<MainModalData | null> = new BehaviorSubject<MainModalData | null>(null)

    get mainModalData$():Observable<MainModalData | null> {
        return this._mainModalData.asObservable()
    }
    openModal({
        imgSrc, title, subtitle, buttonTitle, buttonColor, navigationRoute, content
    }: MainModalData) {
        this._mainModalData.next({
            imgSrc, title, subtitle, buttonTitle, buttonColor, navigationRoute, content
        })
    }

    closeModal() {
        this._mainModalData.next(null)
    }
}