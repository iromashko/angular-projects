import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizerComponent } from './organizer/organizer.component';
import { ChatComponent } from './pages/chat/chat.component';

import { MainComponent } from './pages/main/main.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
