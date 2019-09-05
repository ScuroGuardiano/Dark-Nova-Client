import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import IPlanet from '../../interfaces/planet';
import IPlayer from '../../interfaces/player';
import { NovaService } from '../../services/nova.service';
import NovaApiResponse from '../../../interfaces/nova-api-response';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss', '../../viewstyle.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  serverTime = new Date().toLocaleTimeString();
  private timeUpdaterSubscription: Subscription;
  public planet: Partial<IPlanet>;
  public player: Partial<IPlayer>;
  constructor(private novaService: NovaService) { }

  async ngOnInit() {
    this.startTimeUpdater();
    try {
      const res = await this.novaService.get('/game/overview') as NovaApiResponse;
      this.planet = res.planet;
      this.player = res.player;
    }
    catch(err) {
      alert("Zjebało sie, zobacz logi XDDD");
      console.error(err);
    }
  }
  ngOnDestroy() {
    this.stopTimeUpdater();
  }
  private startTimeUpdater() {
    const i = interval(1000);
    this.timeUpdaterSubscription = i.subscribe(v => this.serverTime = new Date().toLocaleTimeString());
  }
  private stopTimeUpdater() {
    this.timeUpdaterSubscription.unsubscribe();
  }
  public get diameter() {
    return "12.800";
  }
  public get fields() {
    return {
      used: 54,
      max: 163
    };
  }
  public get planetName() {
    return "Atlantis";
  }
  public get playerName() {
    return "ScuroGuardiano";
  }
  public get temperature() {
    return {
      min: -40,
      max: 120
    };
  }
  public get coords() {
    return {
      galaxy: 4,
      system: 133,
      position: 7
    };
  }

}
