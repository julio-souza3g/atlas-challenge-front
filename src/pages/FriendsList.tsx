import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import api from "../services/api";

export interface IContact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: string;
}

export function FriendsList() {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    async function loadContacts() {
      api.get("/list-friends").then((response) => setContacts(response.data));
    }
    loadContacts();
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 my-2.5 mx-10">
        {contacts.map((contact) => (
          <Card key={contact._id} contact={contact} />
        ))}
      </div>
    </>
  );
}
