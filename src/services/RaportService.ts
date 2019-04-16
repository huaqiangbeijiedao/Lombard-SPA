import {ServiceBase} from "./ServiceBase"
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Transaction } from "../app/Models/Transaction"
import { Product } from 'src/app/Models/Product';
@Injectable({
    providedIn: 'root',
})

export class RaportService{
    constructor(private api: ServiceBase){}

    public getOutage(quant:number) : Observable<Product[]>
    {
        return this.api.get(`Raport/Outage/${quant}`);
    }
}