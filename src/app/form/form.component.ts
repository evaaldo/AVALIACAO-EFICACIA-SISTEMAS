import { Component } from '@angular/core';
import { FormInputComponent } from "../form-input/form-input.component";
import { FormActionComponent } from "../form-action/form-action.component";
import { FormsModule } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, FormInputComponent, FormActionComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nomeSistema = "";
  cicloEntrega = "";
  diretoria = "";
  ganhosPorProcesso = "";
  valorMedioHora = "";
  descricaoSistema = "";
  areaImpactada = "";
  horasDesenvolvimento = "";
  unidade = "";
  repeticao = "";
  classificacao = "";
  descricaoGanhos = "";

  constructor(private formService: FormService) { }

  onSubmit() {
    this.formService.getHelloWorld().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  };
}
