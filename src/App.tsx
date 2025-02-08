import React, { useState, useEffect } from 'react'
import './App.css'
import { ContactForm } from './components/ContactForm'
import { Contact } from './types/Contact'
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';


function App() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState<string>('');

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id: string) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </>
  )
}

export default App
