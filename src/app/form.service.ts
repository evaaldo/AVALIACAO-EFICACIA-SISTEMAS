import { Injectable, signal } from "@angular/core";
import { IForm } from "./interfaces/IForm";
import { environment } from "../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({ providedIn: "root" })
export class FormService {
  apiUrl: string = environment.apiFormularioEficacia;

  constructor(private httpClient: HttpClient) {}

  getHelloWorld() {
    return this.httpClient.get(this.apiUrl, { responseType: "text" });
  }
}
