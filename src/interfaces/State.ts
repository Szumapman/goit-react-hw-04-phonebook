import { Contact } from "../types/Contact";

export interface State {
  contacts: Contact[];
  filter: string;
}