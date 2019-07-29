import { Component, OnInit } from "@angular/core";
import { CampaingStepps } from "src/app/campaing-stepps";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: "app-announcements",
  templateUrl: "./announcements.component.html",
  styleUrls: ["./announcements.component.scss"]
})
export class AnnouncementsComponent extends CampaingStepps implements OnInit {
  form: FormArray;
  titleLength = 30;
  descriptionLength = 90;
  groupsNumber = [{}, {}, {}];

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.assignGroups();
  }

  assignGroups(): void {
    for (const group of this.groupsNumber) {
      group["form"] = new FormGroup({
        announcements: new FormArray([this.announcementForm()])
      });
    }
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

  addAnnouncement(group: any) {
    this.getAnnouncementArray(group).push(this.announcementForm());
  }

  private getAnnouncementArray(group) {
    return group.form.get("announcements") as FormArray;
  }

  duplicateForm(index: number, group) {
    const form = this.getAnnouncementArray(group).controls[index].value;
    this.getAnnouncementArray(group).push(this.announcementForm(form));
  }

  removeForm(index: number, group){
    this.getAnnouncementArray(group).removeAt(index);
  }
}
