import { Component, Input, OnInit } from '@angular/core';
import { episodeModel } from '../../models/episodeModel';

@Component({
    selector: 'app-episode',
    standalone: false,

    templateUrl: './episode.component.html',
    styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit {
    @Input() episode!: episodeModel;
    likeText!: string;

    ngOnInit(): void {
        this.likeText = "Like";
    }

    likeEventHandler(): void {
        if (this.likeText == "Like") {
            this.episode.like++;
            this.likeText = "Dislike";
        }
        else {
            this.episode.like--;
            this.likeText = "Like";
        }
    }
}
