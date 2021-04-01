import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Cliente } from "../model/cliente.model";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    APIURL = "http://localhost:56511"

    constructor(private http: HttpClient) {}

    buscar(): Observable<Cliente[]>
    {
        return this.http.get<Cliente[]>(this.APIURL + "/cliente")
    }
}