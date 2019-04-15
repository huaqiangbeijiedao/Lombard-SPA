import {ServiceBase} from "./ServiceBase"
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Transaction } from "../app/Models/Transaction"
@Injectable({
    providedIn: 'root',
})

export class TransactionService{
    constructor(private api: ServiceBase){}

    public getAll() : Observable<Transaction[]>
    {
        return this.api.get("Transaction");
    }

    // public updateProduct(product : Transaction)
    // {
    //     return this.api.post("Product/UpdateProduct", product);
    // }

    // public searchById(id : number) : Observable<Transaction>{
    //     return this.api.get("/SearchById/${id}")
    // }

    // public searchByName(name : string) : Observable<Transaction[]> 
    // {
    //     return this.api.get("/SearchByName/${name}");
    // }

    // public removeProducts(transaction : Transaction[]){
    //     //return this.api.post("/RemoveProducts/")
    // } 
}
