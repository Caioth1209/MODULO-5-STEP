export class Util {
    public static randomizar(inicio: number, fim : number) : number{
        return Math.floor(inicio + Math.random() * (fim - inicio));
    }
}