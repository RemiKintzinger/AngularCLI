import { Component, Input, OnInit } from '@angular/core';
import { episodeModel } from '../../models/episodeModel';
import { Router } from '@angular/router';

@Component({
    selector: 'app-episode',
    standalone: false,

    templateUrl: './episode.component.html',
    styleUrl: './episode.component.scss'
})
export class EpisodeComponent {
    private router: Router;
    @Input() episode!: episodeModel;

    constructor(router: Router) {
        this.router = router;
    }

    onDetail(): void {
        this.router.navigateByUrl("film/" + this.episode.id);
    }
}
