import { Component, Input } from '@angular/core';
import { ISelect } from '../interfaces/ISelect';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input({ required: true }) inputId!: string;
  @Input({ required: true }) inputType!: string;
  @Input() placeholder?: string;
  @Input() selectValues?: ISelect[];
}
