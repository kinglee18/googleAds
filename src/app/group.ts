import { FormArray } from "@angular/forms";

export interface Group {
  type: string;
  keywordsList: string | Array<string>;
  announcements: Array<any>;
}
