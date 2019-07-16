import {
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule
} from "@angular/material";
import { NgModule } from "@angular/core";

const list = [
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule, 
  MatAutocompleteModule
  
];
@NgModule({
  imports: list,
  exports: list
})
export class CustomMaterialModule {}
