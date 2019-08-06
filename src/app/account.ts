import { Campaing } from "./campaing";
import { Group } from "./group";

export class Account {
  id: string;
  campaing: Campaing;
  groups: Array<Group>;

  constructor() {}

  deserialize(input: any): this {
    this.id = input.id;
    this.campaing = input.campaing;
    if (input.groups) {
      this.groups = input.groups;
    }
    return this;
  }
}
