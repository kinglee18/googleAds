import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { CampaingStepps } from "src/app/campaing-stepps";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { GoogleCampaingService } from "src/app/google-campaing.service";
import { Group } from "src/app/group";

@Component({
  selector: "app-announcements",
  templateUrl: "./announcements.component.html",
  styleUrls: ["./announcements.component.scss"]
})
export class AnnouncementsComponent extends CampaingStepps implements OnInit {
  @Input() groups: Array<Group>;
  form: FormArray;
  titleLength = 30;
  descriptionLength = 90;
  groupsNumber = [];

  constructor(
    private fb: FormBuilder,
    private googleService: GoogleCampaingService
  ) {
    super();
  }

  ngOnInit() {
    this.assignGroups();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.groupsNumber = JSON.parse(JSON.stringify(changes.groups.currentValue));
    for (const group of this.groupsNumber) {
      const preValue = group.announcement ? group.announcement.value : {};
      group["form"] = new FormGroup({
        announcements: new FormArray([this.announcementForm(preValue)])
      });
    }
  }

  assignGroups(): void {}

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

  removeForm(index: number, group) {
    this.getAnnouncementArray(group).removeAt(index);
  }

  saveForm() {
    let groupInfo: Array<Group> = this.groupsNumber;
    groupInfo = groupInfo.map((grp: any) => {
      grp.announcements = grp.form.value.announcements;
      console.log(grp);
      
      return grp;
    });
console.log();

    this.googleService.saveGroups(groupInfo, this.account.id);
  }

  formInfo() {
    return {};
  }

  finishCampaing() {}
}
