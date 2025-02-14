import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListeComponent } from './components/episode-liste/episode-liste.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "films", component: EpisodeListeComponent},
    {path: "film/:id", component: EpisodeDetailComponent},
    {path: "**", component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
