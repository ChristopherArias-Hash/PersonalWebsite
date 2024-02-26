import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import "./App.css";
import ContactForm from "./ContactForm";

function App() {
  // State variables
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  // Fetch contacts from the server when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  // Fetch contacts data from the server
  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  // Close the modal and reset currentContact state
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };

  // Open the modal for creating a new contact
  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  // Open the modal for editing an existing contact
  const openEditModal = (contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  // Callback function to update contacts after editing
  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <>
      <div className = "container">
      <div className="centered-contact">
      {/* ContactList component to display the list of contacts */}
      <ContactList contacts={contacts} updateContact={openEditModal} updateCallback={onUpdate} />
     
      {/* Button to open the modal for creating a new contact */}
     
      <button className ="submitButton" onClick={openCreateModal}>Create New Contact</button>
      </div>
      </div>
      {/* Modal for editing an existing contact */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
