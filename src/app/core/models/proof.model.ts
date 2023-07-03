export class Proof{
    constructor(
        public idProof:number,
        public dateProof:Date,
        public proofImg:Blob,
        public description:string,
        public accepted:number,
        public challengerName:string,
        public idHouse:number,
        public idChallenge:number,
        ){}
    }