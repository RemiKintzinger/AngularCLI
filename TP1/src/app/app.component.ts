import { Component, OnInit } from '@angular/core';
import { episodeModel } from '../models/episodeModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'starwars';
    episodes: episodeModel[] = [];

    ngOnInit(): void {
        this.episodes[0] = new episodeModel(
            "Salut je suis un film", 1995, 119, 9, "Il est", "Rémi", "Linda", "https://www.starwars-holonet.com/news/2015/20151018-starwars-7-affiche-officielle-film-01.webp", 73, 5
        );

        this.episodes[1] = new episodeModel(
            "Je suis un autre film", 2003, 148, 8, "venu le temps", "Rémi", "Linda", "https://m.media-amazon.com/images/I/91j0+pX-UbL._AC_UF1000,1000_QL80_.jpg", 12
        );

        this.episodes[2] = new episodeModel(
            "Je suis un 3e film (ou pas???)", 2025, 442, 8.6, "des cathédrales", "Rémi", "Linda", "https://fr.web.img2.acsta.net/pictures/24/02/19/14/31/0585421.jpg", 1922, 2.99
        );
    }
}
