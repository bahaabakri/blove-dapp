import { Injectable } from '@angular/core';
import { MainModalService } from '../../services/main-modal.service';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  
  constructor(private _mainModalService:MainModalService) { }

}
