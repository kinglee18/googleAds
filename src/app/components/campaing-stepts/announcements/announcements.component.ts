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
  titleLength =  30;
  descriptionLength =  90;
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

  announcementForm(): FormGroup {
    return new FormGroup({
      finalUrl: new FormControl(),
      title1: new FormControl(),
      title2: new FormControl(),
      title3: new FormControl(),
      description1: new FormControl(),
      description2: new FormControl(),
      route1: new FormControl(),
      route2: new FormControl()
    });
  }

  addAnnouncement(group: any) {
    this.getAnnouncementArray(group).push(this.announcementForm());
  }

  getAnnouncementArray(group) {
    return group.form.get("announcements") as FormArray;
  }
}
