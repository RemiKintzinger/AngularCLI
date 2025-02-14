import { Injectable } from '@angular/core';
import { episodeModel } from '../models/episodeModel';

@Injectable({
    providedIn: 'root'
})
export class EpisodeService {
    private episodes: episodeModel[];

    constructor() {
        this.episodes = [
            new episodeModel(
                1, "Salut je suis un film", 1995, 119, 9, "Il est", "Rémi", "Linda", "https://www.starwars-holonet.com/news/2015/20151018-starwars-7-affiche-officielle-film-01.webp", 73, 5
            ),

            new episodeModel(
                2, "Je suis un autre film", 2003, 148, 9, "venu le temps", "Rémi", "Linda", "https://m.media-amazon.com/images/I/91j0+pX-UbL._AC_UF1000,1000_QL80_.jpg", 12
            ),

            new episodeModel(
                3, "Je suis un 3e film (ou pas???)", 2025, 442, 8.6, "des cathédrales", "Rémi", "Linda", "https://fr.web.img2.acsta.net/pictures/24/02/19/14/31/0585421.jpg", 1922, 2.99
            )
        ];
    }

    getAllEpisodes(): episodeModel[] {
        return this.episodes;
    }

    getEpisodeById(id: number): episodeModel | null {
        for(let ep of this.episodes) {
            if (ep.id == id)
                return ep;
        }

        return null;
    }

    likeEpisodeById(id: number, like: boolean): void {
        let ep: episodeModel | null = this.getEpisodeById(id);

        if (ep != null) {
            console.log("Like toggle = " + like);
        }
    }
}
