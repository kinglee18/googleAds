import {
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { NgModule } from "@angular/core";

const list = [
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  
];
@NgModule({
  imports: list,
  exports: list
})
export class CustomMaterialModule {}
