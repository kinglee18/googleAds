import { Component, Input, SimpleChanges } from "@angular/core";
import { CampaingStepps } from "src/app/campaing-stepps";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { GoogleCampaingService } from "src/app/google-campaing.service";

@Component({
  selector: "app-announcements",
  templateUrl: "./announcements.component.html",
  styleUrls: ["./announcements.component.scss"]
})
export class AnnouncementsComponent extends CampaingStepps {
  @Input()
  set groups(value: any) {
    this.fillAccordion(value);
  }

  titleLength = 30;
  descriptionLength = 90;
  groupsNumber = [];

  constructor(
    private fb: FormBuilder,
    private googleService: GoogleCampaingService
  ) {
    super();
  }

  announcementForm(values?: any): FormGroup {
    const fg = new FormGroup({
      finalUrl: new FormControl(),
      title1: new FormControl(),
      title2: new FormControl(),
      title3: new FormControl(),
      description1: new FormControl(),
      description2: new FormControl(),
      route1: new FormControl(),
      route2: new FormControl()
    });
    if (values) {
      fg.patchValue(values);
    }
    return fg;
  }

  fillAccordion(groups) {
    this.groupsNumber = JSON.parse(JSON.stringify(groups));
    for (const group of this.groupsNumber) {
      this.googleService
        .getAnnouncementsById(this.account.id, group.id)
        .subscribe((announcements: Array<any>) => {
          let arr = new FormArray([this.announcementForm()]);
          group["announcementForm"] = new FormGroup({
            announcements: arr
          });
          if (announcements.length) {
            (group["announcementForm"].get(
              "announcements"
            ) as FormArray).setValue(announcements);
          }
        });
    }
  }
  addAnnouncement(group: any) {
    this.getAnnouncementArray(group).push(this.announcementForm());
  }

  private getAnnouncementArray(group) {
    return group.announcementForm.get("announcements") as FormArray;
  }

  duplicateForm(index: number, group) {
    const form = this.getAnnouncementArray(group).controls[index].value;
    this.getAnnouncementArray(group).push(this.announcementForm(form));
  }

  removeForm(index: number, group) {
    this.getAnnouncementArray(group).removeAt(index);
  }

  saveForm() {
    const values: Array<any> = [];

    this.groupsNumber.map(item => {
      values.push({
        announcementForm: item.announcementForm.value,
        id: item.id,
        keywordsList: item.keywordsList,
        type: item.type
      });
      return item;
    });
    this.googleService.saveAnnouncement(values, this.account.id);
  }

  formInfo() {
    return {};
  }

  finishCampaing() {}
}
