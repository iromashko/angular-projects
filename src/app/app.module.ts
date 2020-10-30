import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './pages/chat/chat.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { CalendarComponent } from './organizer/calendar/calendar.component';
import { SelectorComponent } from './organizer/selector/selector.component';
import { OrganizzzerComponent } from './organizer/organizzzer/organizzzer.component';
import { MomentPipe } from './organizer/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CovidTrackerComponent } from './pages/covid-tracker/covid-tracker.component';
import { NgrxComponent } from './pages/ngrx/ngrx.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CounterEffects } from './pages/ngrx/counter.effects';
import { MathGameComponent } from './pages/math-game/math-game.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChatComponent,
    OrganizerComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizzzerComponent,
    MomentPipe,
    RxjsComponent,
    CovidTrackerComponent,
    NgrxComponent,
    MathGameComponent,
    AnswerHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CounterEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
