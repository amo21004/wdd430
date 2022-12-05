export class Person {
    constructor(
        public _id: string,
        public first_name: string,
        public last_name: string,
        public middle_name?: string,
        public image_url?: URL
    ) {

    }
}