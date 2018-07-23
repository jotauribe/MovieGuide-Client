import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BirthdatePickerComponent } from './components/register-form/components/birthdate-picker/birthdate-picker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    BirthdatePickerComponent
  ]
})
export class RegisterModule {}
