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

  groupsNumber = [3, 3, 3];

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.array([]);
  }

  assignGroups(): void {
    for (let group of this.groupsNumber) {
    }
  }

  announcementForm(): FormGroup {
    return new FormGroup({
      url: new FormControl()
    });
  }
 
}
