import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() value: any = '';

  @Output() valueChange = new EventEmitter<any>();

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }
}
