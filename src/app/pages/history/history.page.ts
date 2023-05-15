import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HistoryService } from 'src/app/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {

  items_all: any = []
  constructor(private historyService: HistoryService) { }
  

  ngOnInit() {
    this.historyService.getItems().subscribe((items) => {
      this.items_all = items
    })
  }

}
