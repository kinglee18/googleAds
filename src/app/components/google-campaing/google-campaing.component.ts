import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-google-campaing",
  templateUrl: "./google-campaing.component.html",
  styleUrls: ["./google-campaing.component.scss"]
})
export class GoogleCampaingComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  businessName: string = 'Nombre de negocio';
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: []
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: []

    });
  }
}
