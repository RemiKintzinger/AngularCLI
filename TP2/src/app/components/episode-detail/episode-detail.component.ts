import { Component, Input, OnInit } from '@angular/core';
import { episodeModel } from '../../models/episodeModel';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../../services/model-service.service';

@Component({
    selector: 'app-episode-detail',
    standalone: false,

    templateUrl: './episode-detail.component.html',
    styleUrl: './episode-detail.component.scss'
})
export class EpisodeDetailComponent implements OnInit {
    private ES: EpisodeService;
    private activeRoute: ActivatedRoute

    episode!: episodeModel;
    likeText: string = "Like";

    constructor(activeRoute: ActivatedRoute, ES: EpisodeService) {
        this.activeRoute = activeRoute;
        this.ES = ES;
    }

    ngOnInit(): void {
        let res: string = this.activeRoute.snapshot.params["id"] ?? "";
        let id: number = parseInt(res);

        if (isNaN(id))
            id = 1;

        let ep: episodeModel | null = this.ES.getEpisodeById(id);

        if (ep == null)
            throw 1;

        this.episode = ep;
    }
}
