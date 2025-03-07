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
    this.formService.submitData({
      nomeSistema: this.nomeSistema,
      cicloEntrega: this.cicloEntrega,
      diretoria: this.diretoria,
      ganhosPorProcesso: this.ganhosPorProcesso,
      valorMedioHora: this.valorMedioHora,
      descricaoSistema: this.descricaoSistema,
      areaImpactada: this.areaImpactada,
      horasDesenvolvimento: this.horasDesenvolvimento,
      unidade: this.unidade,
      repeticao: this.repeticao,
      classificacao: this.classificacao,
      descricaoGanhos: this.descricaoGanhos
    });
  };
}
