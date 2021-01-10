import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino:string;
  heroes:any = {};


  constructor(private _heroesService:HeroesService,
    private _direccionarValor:ActivatedRoute) {}

  ngOnInit(): void {
    this._direccionarValor.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      
      console.log(this.heroes);
      });
  }

}
