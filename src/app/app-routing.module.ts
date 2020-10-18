import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { MainComponent } from './pages/main/main.component';
import { QuotesComponent } from './pages/quotes/quotes.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'quotes',
    component: QuotesComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
