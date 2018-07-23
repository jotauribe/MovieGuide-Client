import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-birthdate-picker',
  templateUrl: './birthdate-picker.component.html',
  styleUrls: ['./birthdate-picker.component.css']
})
export class BirthdatePickerComponent implements ControlValueAccessor {
  value = '';
  @Input() id: string;
  @Input() type = 'text';
  @Input() placeholder = '';

  @ViewChild('inputElement') private _inputElement: ElementRef;

  constructor() {}

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
