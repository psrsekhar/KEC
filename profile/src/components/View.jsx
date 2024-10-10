import axios from "axios";
import { useEffect, useState } from "react";

export default function () {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const contactList = async () => {
      const apiResponse = await axios.get("http://localhost:1433/contacts");
      setContacts(apiResponse.data);
    };
    contactList();
  }, []);

  return (
    <div className="offset-3 col-6 text-justify">
      <h3 className="text-center text-success">Contact List</h3>
      <table className="table table-success table-striped table-bordered p-2 m-2">
        <thead>
          <tr>
            <th className="bg-success text-white text-center">Name</th>
            <th className="bg-success text-white text-center">Email</th>
            <th className="bg-success text-white text-center">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
