import { Component, OnInit } from '@angular/core';
import { NovaService } from '../../services/nova.service';
import NovaApiResponse from '../../../interfaces/nova-api-response';
import IPlayer from '../../interfaces/player';
import IPlanet from '../../interfaces/planet';

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
      const data = await this.novaService.get('/game/basic-data') as NovaApiResponse;
      this.player = data.player;
      this.planet = data.planet;
    }
    catch(err) {
      // TODO: Better error handling
      alert(".::LAYOUT::. Zjebało sie, zobacz logi XDDD");
      console.error(err);
    }
  }
  public get darkMatter() {
    return "TODO";
  }
}
