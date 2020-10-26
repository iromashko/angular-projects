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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
