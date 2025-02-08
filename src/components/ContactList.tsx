import { Contact } from "../types/Contact";
import css from "./ContactList.module.css";

type ContactListProps = {
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
};

export const ContactList = ({ contacts, onDeleteContact }: ContactListProps) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};