import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private items = new BehaviorSubject<Array<any>>([]);

  constructor() { }
  
  getItems(){
    return this.items.asObservable();
  }

  addItems(item:any){
    const past_items = this.items.value
    this.items.next([...past_items, item])
  }
}
