import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.scss']
})
export class NovaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public get nickname() {
    return "ScuroGuardiano";
  }
  public get metal() {
    return "1.000";
  }
  public get metalPerHour() {
    return "2.500";
  }
  public get metalStorage() {
    return "20.000";
  }
  public get crystal() {
    return "1.500";
  }
  public get crystalPerHour() {
    return "2.500";
  }
  public get crystalStorage() {
    return "20.000";
  }
  public get deuterium() {
    return "750";
  }
  public get deuteriumPerHour() {
    return "2.500";
  }
  public get deuteriumStorage() {
    return "20.000";
  }
  public get availableEnergy() {
    return "342";
  }
  public get darkMatter() {
    return "0";
  }
}
