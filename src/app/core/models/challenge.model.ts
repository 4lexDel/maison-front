export class Challenge{
    constructor(
        public idChallenge:number,
        public title:string,
        public description:string,
        public expiration:string,
        public award:number,
        public success:number,
        public winner:string,
        public idHouse:number,
        ){}
    }