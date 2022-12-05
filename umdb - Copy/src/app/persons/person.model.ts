export class Person {
    constructor(
        public _id: string,
        public first_name: string,
        public last_name: string,
        public is_selected: boolean,
        public middle_name?: string
    ) {

    }
}