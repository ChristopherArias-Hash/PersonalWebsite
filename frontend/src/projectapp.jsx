import React, { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import ContactList from "./components/ContactList";
import "./ProjectApp.css";
import ContactForm from "./components/ContactForm";


function projectApp() {
  // State variables
  const [contacts, setContacts] = useState([]);
  const sidebarData = [
    { id: 1, welcome: "", home: "HOME", aboutMe: "ABOUT ME", projects: "PROJECTS", gitHub: "GITHUB" },
  ]
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
    <div className="container">
    <div className = "sidebar">
       <div className = "centered-sidebar">
          <Sidebar sidebar={sidebarData} />
       </div>
    </div>
       <div className="centered-contact">
          {/* ContactList component to display the list of contacts */}
          <ContactList contacts={contacts} updateContact={openEditModal} updateCallback={onUpdate} />
          {/* Button to open the modal for creating a new contact */}
          <button className="submitButton" onClick={openCreateModal}>Create New Contact</button>
       </div>
    </div>
    {/* Modal for editing an existing contact */}
    {isModalOpen && (
    <div className="modal">
       <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
          {/* Left side of the modal */}
          {/* Content for the left side */}
       </div>
    </div>
    )}
    </>
  );
}

export default projectApp;
