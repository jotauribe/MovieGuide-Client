import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [MaterialModule]
})
export class SharedModule {}
