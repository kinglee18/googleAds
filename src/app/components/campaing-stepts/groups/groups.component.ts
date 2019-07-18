import { Component, OnInit } from "@angular/core";
import { CampaingStepps } from "src/app/campaing-stepps";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.scss"]
})
export class GroupsComponent extends CampaingStepps implements OnInit {
  form: FormGroup;
  words= ["a", "bbbbbbb", "jjj"]

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      groups: this.fb.array([])
    });
    this.addGroupForm();
    console.log(this.form);
    
  }

  get groupsArray(): FormArray {
    return this.form.get("groups") as FormArray;
  }

  addGroupForm(): void {
    this.groupsArray.push(this.groupForm());
  }

  groupForm(): FormGroup {
    return new FormGroup({
      type: new FormControl(),
      searchwords: new FormControl()
    });
  }

  removeGroupForm(index: number): void {
    this.groupsArray.removeAt(index);
  }

  continue() {
    this.advanceStep();
  }
}
