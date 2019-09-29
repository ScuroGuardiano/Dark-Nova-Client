import { Component, OnInit } from '@angular/core';
import { NovaService } from '../../services/nova.service';
import NovaApiResponse from '../../../interfaces/nova-api-response';
import IPlayer from '../../interfaces/player';
import IPlanet from '../../interfaces/planet';
import { promiseRetry } from '../../helpers/promise-retry';

@Component({
  selector: 'app-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.scss']
})
export class NovaComponent implements OnInit {

  constructor(private novaService: NovaService) { }

  public player: Partial<IPlayer>;
  public planet: Partial<IPlanet>;

  async ngOnInit() {
    try {
      await promiseRetry(this.loadData.bind(this), 2, 500);
    }
    catch(err) {
      alert(".:: LAYOUT ERROR ::.\nCouldn't load resource from remote server, try to refresh this page");
      console.error(err);
    }
  }
  private async loadData() {
    const data = await this.novaService.get('/game/basic-data') as NovaApiResponse;
    this.player = data.player;
    this.planet = data.planet;
  }
  public get darkMatter() {
    return "TODO";
  }
}
