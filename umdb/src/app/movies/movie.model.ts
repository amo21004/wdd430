import { Actor } from "../actors/actor.model";

export class Movie {
    constructor(
        public _id: string,
        public title: string,
        public summary: string,
        public release_date: Date,
        public actors?: Movie[]
    ) {

    }
}