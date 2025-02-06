import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-surf-spot',
    standalone: false,

    templateUrl: './surf-spot.component.html',
    styleUrl: './surf-spot.component.scss'
})
export class SurfSpotComponent implements OnInit {
    name!: string;
    location!: string;
    imageUrl!: string;
    description!: string;
    like!: number;
    buttonLabel!: string;

    ngOnInit(): void {
        this.name = "Nazaré";
        this.location = "Portugal";
        this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Can_you_see_the_surfer%3F_%2833988985575%29.jpg/320px-Can_you_see_the_surfer%3F_%2833988985575%29.jpg";
        this.description = "Le spot pour les grosses vagues en automne!!!";
        this.like = 77;
        this.buttonLabel = "Like";
    }

    onLike(): void {
        if (this.buttonLabel == "Like") {
            this.like++;
            this.buttonLabel = "Dislike";
        }
        else {
            this.like--;
            this.buttonLabel = "Like";
        }
    }
}