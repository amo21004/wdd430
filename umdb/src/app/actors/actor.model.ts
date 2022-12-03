import { Movie } from "../movies/movie.model";

export class Actor {
    constructor(
        public _id: string,
        public first_name: string,
        public middle_name: string | null,
        public last_name: string,
        public movies?: Movie[]
     ) {

    }
}