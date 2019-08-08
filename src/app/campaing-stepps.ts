import { Input } from "@angular/core";
import { MatStepper } from "@angular/material";
import { Account } from './account';

export class CampaingStepps {
  @Input() private stepper: MatStepper;
  @Input() public account: Account;

  protected advanceStep(): void {
    this.stepper.next();
  }
}
