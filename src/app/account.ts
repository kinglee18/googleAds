import { Campaing } from "./campaing";
import { Group } from './group';

export interface Account {
  id: string;
  campaing: Campaing;
  groups: Array<Group>;
}
