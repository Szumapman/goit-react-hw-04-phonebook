import React from 'react';
import { Input } from "./Input";
import { Contact } from "../types/Contact";
import { nanoid } from "nanoid";
import  css from "./ContactForm.module.css";

type ContactFormProps = {
  contacts: Contact[];
  onAddContact: (contact: Contact) => void;
};


export const ContactForm = ({ contacts, onAddContact }: ContactFormProps) => {
  const namePattern = /^[a-zA-Z\u0400-\u04FF]+(([' \-][a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$/;
  const numberPattern = /\(?\+?\d{1,4}?\)?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}/;
  const nameString = "Name";
  const numberSting = "Number";
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newName = formData.get(nameString) as string;
    const newPhone = formData.get(numberSting) as string;
    const name = newName.trim().toLowerCase();
    const number = newPhone.trim();

    if (contacts.some((contact) => contact.name.toLowerCase() === name)) {
      alert(`${name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} is already in contacts`);
      return;
    }

    const contact = {
        id: nanoid(),
        name,
        number,
      };
    onAddContact(contact);
    event.currentTarget.reset();
  };

  
  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
        <Input type="text" name={nameString} pattern={namePattern.source} title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required={true} />
        <Input type="tel" name={numberSting} pattern={numberPattern.source} title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required={true} />
        <button type="submit">Add contact</button>
    </form>
  );
};