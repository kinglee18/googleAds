import { Input } from "@angular/core";
import { MatStepper } from "@angular/material";

export class CampaingStepps {
  @Input() private stepper: MatStepper;

  protected advanceStep(): void {
    this.stepper.next();
  }
}
