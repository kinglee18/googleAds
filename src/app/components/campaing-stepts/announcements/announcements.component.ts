import { Component, OnInit } from "@angular/core";
import { CampaingStepps } from "src/app/campaing-stepps";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { Group } from 'src/app/group';

@Component({
  selector: "app-announcements",
  templateUrl: "./announcements.component.html",
  styleUrls: ["./announcements.component.scss"]
})
export class AnnouncementsComponent extends CampaingStepps implements OnInit {
  form: FormArray;

  groupsNumber = [{}, {}, {}];

  
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.assignGroups();
  }

  assignGroups(): void {
    for (const group of this.groupsNumber) {
      group['form'] =  new FormGroup({
        announcements: new FormArray([this.announcementForm()])
      });
    }
  }

  announcementForm(): FormGroup {
    return new FormGroup({
      url: new FormControl()
    });
  }
 
}
