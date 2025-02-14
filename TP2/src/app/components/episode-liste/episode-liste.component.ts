import { Component, Input, OnInit } from '@angular/core';
import { episodeModel } from '../../models/episodeModel';
import { EpisodeService } from '../../services/model-service.service';

@Component({
    selector: 'app-episode-liste',
    standalone: false,

    templateUrl: './episode-liste.component.html',
    styleUrl: './episode-liste.component.scss'
})
export class EpisodeListeComponent implements OnInit {
    private ES: EpisodeService;
    episodes!: episodeModel[];

    constructor(ES: EpisodeService) {
        this.ES = ES;
    }

    ngOnInit(): void {
        this.episodes = this.ES.getAllEpisodes();
    }
}
