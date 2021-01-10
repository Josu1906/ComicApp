import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HeroesService } from '../../Services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent{

  heroe:any = {};

  comida:string = 'Comida';

  constructor(private activaRouter:ActivatedRoute,
              private _heroesService: HeroesService) {
    this.activaRouter.params.subscribe( params => {
      this.heroe = _heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    } );
   }
}
