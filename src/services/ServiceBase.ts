import { HttpClient } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root',
})
export class ServiceBase{
    readonly BASE_URL : string = "http://localhost:54937/api/"

    config = {
        headers:{
            'Content-Type': 'application/json'
        }
    };

    constructor(private httpClient : HttpClient) {}

    public get(relative_url : string): Observable<any> {
        const url = this.BASE_URL + relative_url;
        return this.httpClient.get(url);
    }

    public post(relative_url: string, object: any): Observable<any>{
        const url = this.BASE_URL + relative_url;
        return this.httpClient.post(url, JSON.stringify(object), this.config);
    }
}