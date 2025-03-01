import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-action',
  standalone: true,
  imports: [],
  templateUrl: './form-action.component.html',
  styleUrl: './form-action.component.css'
})
export class FormActionComponent {
  @Input({ required: true }) buttonText!: string;
  @Input({ required: true }) buttonClass?: string;
}
