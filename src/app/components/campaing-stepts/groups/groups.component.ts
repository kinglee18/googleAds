import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CampaingStepps } from "src/app/campaing-stepps";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from "@angular/forms";
import { GoogleCampaingService } from "src/app/google-campaing.service";
import { Group } from "src/app/group";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.scss"]
})
export class GroupsComponent extends CampaingStepps implements OnInit {
  @Output() formEmitter: EventEmitter<FormGroup> = new EventEmitter();
  form: FormGroup;
  groupTypes = [
    {
      name: "Estandar",
      value: "standar"
    },
    { name: "Dinámico", value: "dynamic" }
  ];

  suggestedWords = ["Palabra 1 ", " Palabra 2"];

  constructor(
    private fb: FormBuilder,
    private campaingService: GoogleCampaingService
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      groups: this.fb.array([])
    });

    const groups = this.account.groups;
    if (groups) {
      for (const group of groups) {
        this.addGroupForm(group);
        this.formEmitter.emit(this.form);
      }
    } else {
      this.addGroupForm();
    }
    this.updateForm();
  }

  get groupsArray(): FormArray {
    return this.form.get("groups") as FormArray;
  }

  addGroupForm(group?: Group): void {
    this.groupsArray.push(this.groupForm(group));
  }

  groupForm(group?: Group): FormGroup {
    const fg = new FormGroup({
      id: new FormControl(),
      type: new FormControl(null, [Validators.required]),
      inputKeywords: new FormControl(),
      keywordsList: new FormControl(this.suggestedWords.toString(), [Validators.required])
    });
    if (group) {
      fg.patchValue(group);
    }
    return fg;
  }

  removeGroupForm(index: number): void {
    this.groupsArray.removeAt(index);
  }

  onAddWord(index: number) {
    this.addWords(index);
    this.saveForm(index);
  }

  addWords(index: number) {
    const input = this.groupsArray.controls[index].get("inputKeywords");

    if (input.value !== null) {
      const currentList = this.groupsArray.controls[index].get("keywordsList");
      for (const key of input.value.split(",")) {
        if (key.length) {
          currentList.setValue(currentList.value + `, ${key}`);
        }
      }
      input.reset();
    }
  }

  continue() {
    this.advanceStep();
  }

  saveForm(index) {
    
    this.campaingService.saveGroup(this.groupsArray.controls[index].value, this.account.id).subscribe(
      id => {
        this.groupsArray.controls[index]['controls']['id'].setValue(id);
      }
    );
  }

  removeKeyWord(word: string, index: number) {
    const list = this.groupsArray.controls[index].get("keywordsList");
    const regex = `[,]*${word}[\\s]*`;
    const words = list.value.replace(new RegExp(regex), "") as string;
    list.setValue(words);
    this.saveForm(index);
  }

  chip(index: number): Array<string> {
    return this.groupsArray.controls[index]
      .get("keywordsList")
      .value.split(",")
      .filter((word: string) => {
        return word.length >= 1;
      });
  }

  updateForm() {
    this.form.valueChanges.subscribe(
      data => {
        this.formEmitter.emit(this.form);
      }
    );
  }
}
