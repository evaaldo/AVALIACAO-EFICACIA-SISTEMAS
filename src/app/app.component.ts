import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormActionComponent } from './form-action/form-action.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormInputComponent, FormActionComponent, LeftSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
