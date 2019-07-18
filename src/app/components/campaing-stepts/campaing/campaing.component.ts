import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
import { CampaingStepps } from "src/app/campaing-stepps";

@Component({
  selector: "app-campaing",
  templateUrl: "./campaing.component.html",
  styleUrls: ["./campaing.component.scss"]
})
export class CampaingComponent extends CampaingStepps implements OnInit {
  form: FormGroup;
  objetives: Array<any>;
  networks: Array<any>;
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [],
      objetive: [],
      pubDateInit: [],
      pubDateEnd: [],
      announcementExtensions: this.fb.array([]),
      textExtensions: this.fb.array([])
    });
    this.addannouncementExtensionForm();
    this.addTextExtensionForm();
  }

  get announcementArray(): FormArray {
    return this.form.get("announcementExtensions") as FormArray;
  }

  addannouncementExtensionForm(): void {
    this.announcementArray.push(this.announcementExtensionForm());
  }

  removeAnnouncementExtensionForm(index: number): void {
    this.announcementArray.removeAt(index);
  }

  announcementExtensionForm(): FormGroup {
    return new FormGroup({
      text: new FormControl(),
      descriptiveLineOne: new FormControl(),
      descriptiveLineTwo: new FormControl(),
      url: new FormControl()
    });
  }

  get textArray(): FormArray {
    return this.form.get("textExtensions") as FormArray;
  }

  addTextExtensionForm(): void {
    this.textArray.push(this.textExtensionForm());
  }

  textExtensionForm(): FormGroup {
    return new FormGroup({
      outstandingText1: new FormControl(),
      outstandingText2: new FormControl(),
      outstandingText3: new FormControl(),
      outstandingText4: new FormControl()
    });
  }

  removeTextExtensionForm(index: number): void {
    this.textArray.removeAt(index);
  }

  submit(): void {
    console.log(this.form);
    
    this.advanceStep();
  }
}
