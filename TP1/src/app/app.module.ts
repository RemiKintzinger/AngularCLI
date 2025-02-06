import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeComponent } from './episode/episode.component';
import { HeaderComponent } from './header/header.component';
import { FullcapPipe } from './fullcap.pipe';
import { UserNoteTransformPipe } from './user-note-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent,
    HeaderComponent,
    FullcapPipe,
    UserNoteTransformPipe
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
