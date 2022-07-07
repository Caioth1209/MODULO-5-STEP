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
    stats : object,
    coins: ICoin[]
}

interface IResult {
    status : string,
    data: IData
}

const promisse = <T>(fetchPromisse : any) : Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        fetchPromisse
        .then((result : any) => {
            result.json()
            .then((jsonResult : any) => {
                resolve(jsonResult as Promise<T>)
            });
        })
        .catch((err : any) => {
            console.log(err);
        })
    });
}

const fetchApi = <T>(url:string) : Promise<T> =>{
    return promisse(fetch(apiUrl));
}

const getCoins = async () : Promise<ICoin[]> => {
   return (await fetchApi<IResult>(apiUrl)).data.coins;
}

class CoinApiController{

    constructor(){
        this.getData();
    }

    public getData(){
        (async ()=>{
            const coins : ICoin[]
        })
    }

    public coin(req: Request, res: Response){
        return res.json({
            message: "Tudo ok"
        });
    }
}

export const coinApiController = new CoinApiController();