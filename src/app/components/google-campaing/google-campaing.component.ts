import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { GoogleCampaingService } from 'src/app/google-campaing.service';

@Component({
  selector: "app-google-campaing",
  templateUrl: "./google-campaing.component.html",
  styleUrls: ["./google-campaing.component.scss"]
})
export class GoogleCampaingComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  businessName: string ;
  constructor(private fb: FormBuilder, private campaingService: GoogleCampaingService) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: []
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: []

    });
  }

  get enableCampaingStep (){
    return this.campaingService.getLastAccount();
  }
}
