import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor() { }
  randomArray = [];

  ngOnInit() {
    for(let i = 0; i < 70; i++) {
      this.randomArray.push(0);
    }
  }

}
