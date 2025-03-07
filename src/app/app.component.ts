import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormActionComponent } from './form-action/form-action.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FormService } from './form.service';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FormComponent, CommonModule, HeaderComponent, LeftSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
