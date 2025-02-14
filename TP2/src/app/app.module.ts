import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FullcapPipe } from './pipes/fullcap.pipe';
import { UserNoteTransformPipe } from './pipes/user-note-transform.pipe';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { EpisodeListeComponent } from './components/episode-liste/episode-liste.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullcapPipe,
    UserNoteTransformPipe,
    EpisodeDetailComponent,
    EpisodeComponent,
    EpisodeListeComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //  provide: LOCALE_ID, useValue: "fr-FR"
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
