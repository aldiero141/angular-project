import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


const MaterialComponent = [
  MatCardModule
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule { }
