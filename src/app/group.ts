import { FormArray } from "@angular/forms";

export interface Group {
  id: number;
  type: string;
  keywordsList: string | Array<string>;
  announcements: Array<any>;
}
