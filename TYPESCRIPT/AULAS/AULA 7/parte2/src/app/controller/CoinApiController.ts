import {Request, Response} from 'express';
import fetch from 'node-fetch';

const apiUrl : string = "https://api.coinranking.com/v2/coins";

interface ICoin {
    uuid : string,
    symbol : string,
    name : string,
    color : string,
    iconUrl: string,
    marketCap : number,
    price : number,
    listedAt : number,
    tier : number,
    change : string,
    rank: number,
    sparkline : string[],
    lowVolume : boolean,
    coinRankingUrl : string,
    // hVolume : number,
    btcPrice : number
}

interface IData {
    stats : string,
    coins: ICoin[]
}

interface IResult {
    status : string,
    data: IData
}

class CoinApiController{

    constructor(){
        
    }

    public coin(req: Request, res: Response){
        return res.json({
            message: "Tudo ok"
        });
    }
}

export const coinApiController = new CoinApiController();