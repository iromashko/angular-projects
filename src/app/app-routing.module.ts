import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizerComponent } from './organizer/organizer.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CovidTrackerComponent } from './pages/covid-tracker/covid-tracker.component';

import { MainComponent } from './pages/main/main.component';
import { MathGameComponent } from './pages/math-game/math-game.component';
import { NgrxComponent } from './pages/ngrx/ngrx.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'organizer',
    component: OrganizerComponent,
  },
  {
    path: 'rxjs-canvas',
    component: RxjsComponent,
  },
  {
    path: 'covid-tracker',
    component: CovidTrackerComponent,
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
  },
  {
    path: 'math-game',
    component: MathGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
