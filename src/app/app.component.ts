import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormActionComponent } from './form-action/form-action.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FormService } from './form.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, FormInputComponent, FormActionComponent, LeftSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
