import { Pipe, PipeTransform } from '@angular/core';

const emojis: string[] = [
    "🌑", "🌘", "🌗", "🌖", "🌕"
];
const n = 33;

@Pipe({
    name: 'userNoteTransform',
    standalone: false
})

export class UserNoteTransformPipe implements PipeTransform {
    transform(value: number, ...args: unknown[]): string {
        if (value < 0 || value > 5) return "";

        let int, dec;
        
        int = Math.trunc(value);
        dec = (value - int);

        //Si la partie décimale existe, on normalise en fonction des indexes
        let exists: number = 0;
        if (dec > 0)
            exists = 1;

        dec = Math.trunc(3*dec + 1) //Transforme 0 <= x < 1 => 1 <= 3x+1 < 4, qui permet d'obtenir l'indexe dans le tableau (entre 1 et 3)

        //Partie entière
        let res  = emojis[4].repeat(int); //Ajoute les lunes pleines

        //Partie flottante (si partie décimale existe, permet d'exclure le "0" dans le dec calculé)
        if (exists)
            res += emojis[dec]; //Ajoute l'unique lune en croissant. 1 <= dec < 4 mais on veut [1, 3] dans le cas où la valeur décimale existe

        //Partie de fin
        res += emojis[0].repeat(5 - int - exists); //Ajoute les lunes vides (si nécessaire). Il y a int lunes et exists lune pour la partie décimale

        return res;
    }
}
