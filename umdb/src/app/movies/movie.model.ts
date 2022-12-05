import { Person } from "../persons/person.model";

export class Movie {
    constructor(
        public _id: string,
        public title: string,
        public summary: string,
        public release_date?: Date,
        public image_url?: URL,
        public actors?: Person[],
        public directors?: Person[]
    ) {

    }
}