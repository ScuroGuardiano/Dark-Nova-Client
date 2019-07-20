import { Component, OnInit } from '@angular/core';
import { NovaApiService } from '../../services/nova-api.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor(private novaApi: NovaApiService) { }
  randomArray = [];

  ngOnInit() {
    this.novaApi.get('/login');
    for(let i = 0; i < 70; i++) {
      this.randomArray.push(0);
    }
  }

}
