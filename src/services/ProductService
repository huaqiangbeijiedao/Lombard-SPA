import {ServiceBase} from "./ServiceBase"
import { Observable } from "rxjs";
import {Product} from "../app/Models/Product"

export class ProductService{
    constructor(private api: ServiceBase){}

    public getAll() : Observable<Product[]>
    {
        return this.api.get("/GetProducts");
    }

    public updateProduct(product : Product)
    {
        return this.api.post("/UpdateProduct", product);
    }

    public searchById(id : number) : Observable<Product>{
        return this.api.get("/SearchById/${id}")
    }

    public searchByName(name : string) : Observable<Product[]> 
    {
        return this.api.get("/SearchByName/${name}");
    }

    public removeProducts(products : Product[]){
        //return this.api.post("/RemoveProducts/")
    } 
}
