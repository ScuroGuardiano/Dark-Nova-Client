import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import IPlanet from '../../interfaces/planet';
import IPlayer from '../../interfaces/player';
import { NovaService } from '../../services/nova.service';
import NovaApiResponse from '../../../interfaces/nova-api-response';
import { promiseRetry } from '../../helpers/promise-retry';

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
      await promiseRetry(this.loadData.bind(this), 2, 500);
    }
    catch(err) {
      // TODO: Better error handling
      alert(".:: OVERVIEW ERROR ::.\nCouldn't load resource from remote server, try to refresh this page");
      console.error(err);
    }
  }
  ngOnDestroy() {
    this.stopTimeUpdater();
  }
  private async loadData() {
    const res = await this.novaService.get('/game/overview') as NovaApiResponse;
    this.planet = res.planet;
    this.player = res.player;
  }
  private startTimeUpdater() {
    const i = interval(1000);
    this.timeUpdaterSubscription = i.subscribe(v => this.serverTime = new Date().toLocaleTimeString());
  }
  private stopTimeUpdater() {
    this.timeUpdaterSubscription.unsubscribe();
  }
}
