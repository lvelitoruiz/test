import { formattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'circles';
  public items: Array<any> = [];

  constructor() {
    this.items = [
      {
        status: 'active',
        id: 'firstItem'
      },
      {
        status: 'former',
        id: 'secondItem'
      },
      {
        status: '',
        id: 'thirdItem'
      },      {
        status: '',
        id: 'fourthItem'
      }
    ]
  }

  ngOnInit():void {

  }

  changeProperty(id: string): void {
    this.items.forEach((item) => {
      if(item.status == 'active') {
        item.status = 'former';
      } else {
        item.status = '';
      }
      if(item.id == id) {
        item.status = 'active';
      }
    })
  }
}
