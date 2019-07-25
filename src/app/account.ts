import { Campaing } from "./campaing";
import { Group } from './group';

export interface Account {
  campaing: Campaing;
  groups: Array<Group>;
}
