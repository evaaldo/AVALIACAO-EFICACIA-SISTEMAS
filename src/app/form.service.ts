import { Injectable, signal } from "@angular/core";
import { IForm } from "./interfaces/IForm";

@Injectable({ providedIn: "root" })
export class FormService {
  submitData(data: IForm) {
    console.log(data);
  }
}
