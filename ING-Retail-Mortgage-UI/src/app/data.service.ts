import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    baseUrl: string = "http://10.155.105.109:9000";



    constructor(private http: HttpClient) { }

    getRates() {

        return this.http.get<any>(this.baseUrl + "/api/v1/mortgage/interestRate")
            .pipe(map(post => {
                return post;
            }));
    }


    getEligibilty(post: object) {
        
        return this.http.post<any>(this.baseUrl + "/api/v1/mortgage/eligibility", post)
            .pipe(map(post => {
                return post;
            }));
    }

}
