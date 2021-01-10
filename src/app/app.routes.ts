import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { SearchComponent } from './Components/search/search.component';

const APP_ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},    
    {path: 'heroe/:id', component: HeroeComponent}, // /:id => Es el parametro que yo le voy a dar, que es como una propiedad distintaa heroe, y seria heroes/heroe para hacerlo de forma jerarquica => Porque estamos viajando por la raiz de heroes
    {path: 'search/:termino', component: SearchComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES); //{has:true}