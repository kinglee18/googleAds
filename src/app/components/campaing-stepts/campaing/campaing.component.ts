import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
import { CampaingStepps } from "src/app/campaing-stepps";
import { GoogleCampaingService } from "src/app/google-campaing.service";
import { Campaing } from "src/app/campaing";

@Component({
  selector: "app-campaing",
  templateUrl: "./campaing.component.html",
  styleUrls: ["./campaing.component.scss"]
})
export class CampaingComponent extends CampaingStepps implements OnInit {
  form: FormGroup;
  objetives: Array<any>;
  networks: Array<any>;
  textLimit1 = 25;
  textLimit2 = 35;

  constructor(
    private fb: FormBuilder,
    private campaingService: GoogleCampaingService
  ) {
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
    const campaing = this.checkLocalInfo();
    if (campaing) {
      this.form.patchValue(campaing);
      this.addDynamicForms(
        campaing.announcementExtensions,
        campaing.textExtensions
      );
    } else {
      this.addDynamicForms();
    }
  }

  addDynamicForms(
    announcementExtensions?: Array<any>,
    textExtensions?: Array<any>
  ) {
    this.addAnnouncementExtensionForm(announcementExtensions);
    this.addTextExtensionForm(textExtensions);
  }

  get announcementArray(): FormArray {
    return this.form.get("announcementExtensions") as FormArray;
  }

  addAnnouncementExtensionForm(announcementExtensions?: Array<any>): void {
    if (announcementExtensions && announcementExtensions.length) {
      for (const ext of announcementExtensions) {
        this.announcementArray.push(this.announcementExtensionForm(ext));
      }
    } else {
      this.announcementArray.push(this.announcementExtensionForm());
    }
  }

  removeAnnouncementExtensionForm(index: number): void {
    this.announcementArray.removeAt(index);
  }

  announcementExtensionForm(value?: any): FormGroup {
    const fg = new FormGroup({
      text: new FormControl(),
      descriptiveLineOne: new FormControl(),
      descriptiveLineTwo: new FormControl(),
      url: new FormControl()
    });
    if (value) {
      fg.patchValue(value);
    }
    return fg;
  }

  get textArray(): FormArray {
    return this.form.get("textExtensions") as FormArray;
  }

  addTextExtensionForm(textExtensions?: Array<any>): void {
    if (textExtensions && textExtensions.length) {
      for (const ext of textExtensions) {
        this.textArray.push(this.textExtensionForm(ext));
      }
    } else {
      this.textArray.push(this.textExtensionForm());
    }
  }

  textExtensionForm(values?: any): FormGroup {
    const fg = new FormGroup({
      outstandingText1: new FormControl(),
      outstandingText2: new FormControl(),
      outstandingText3: new FormControl(),
      outstandingText4: new FormControl()
    });
    if (values) {
      fg.patchValue(values);
    }
    return fg;
  }

  removeTextExtensionForm(index: number): void {
    this.textArray.removeAt(index);
  }

  submit(): void {
    this.saveForm();
    this.advanceStep();
  }

  checkLocalInfo(): Campaing {
    return this.campaingService.getLastAccount().campaing as Campaing;
  }

  saveForm() {
    this.campaingService.saveCampaing(this.form.value);
  }
}
