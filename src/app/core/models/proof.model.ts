export class Proof{
    constructor(
        public idProof:number,//----------------------def
        public dateProof:Date,//----------------------def
        public proofImg:Blob,//----------------------Input
        public description:string,//----------------------Input
        public accepted:number,//----------------------def
        public challengerName:string,//----------------------Input
        public idHouse:number,//----------------------Input
        public idChallenge:number,//----------------obvious
        ){}
    }