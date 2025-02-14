export class episodeModel {
    id: number;
    title: string = "[Title]";
    ryear: Date = new Date();
    length: number = 0;
    rate: number = 0;
    synopsis: string = "[Synopsis]";
    director: string = "[Director]";
    casting: string = "[Casting]";
    imageUrl: string = "";
    like: number = 0;
    userNote?: number;

    constructor(id: number, title: string, ryear: number, length: number, rate: number, synopsis: string, director: string, casting: string, imageUrl: string, like: number, userNote?: number) {
        this.id = id;
        this.title = title;

        this.ryear = new Date();
        this.ryear.setFullYear(ryear);
        
        this.length = length;
        this.rate = rate;
        this.synopsis = synopsis;
        this.director = director;
        this.casting = casting;
        this.imageUrl = imageUrl;
        this.like = like;
        this.userNote = userNote;
    }
}