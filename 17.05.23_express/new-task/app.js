import express from "express";
import { v4 as uuidv4 } from "uuid";
const app = express();
const port = 4000;

app.use(express.json());

let contacts = [
  { id: "1", name: "Rizvan", email: "karimovrizvan84@gmail.com" },
  { id: "2", name: "Ali", email: "ali90@gmail.com" },
];

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.get("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const myContact = contacts.find((contact) => contact.id === id);
  if (!myContact) {
    res.status(404).send({ error: "Upppsss.... Your contact not found" });
  } else {
    res.json(myContact);
  }
});

app.post("/contacts", (req, res) => {
  const { name, email } = req.body;
  const newContact = { id: uuidv4(), name, email };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

app.put("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const findIndex = contacts.findIndex((contact) => contact.id === id);
  if (findIndex === -1) {
    res.status(404).send(error);
  } else {
    contacts[findIndex] = { id, name, email };
    res.json(contacts[findIndex]);
  }
});

app.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const findContact = contacts.findIndex((contact) => contact.id == id);
  if (findContact === -1) {
    res.status(404).send(error);
  } else {
    const deleteContact = contacts.splice(findContact, 1);
    res.json({ message: "Contact deleted", contact: deleteContact });
  }
});

app.listen(port, () => {
  console.log(`Server listening or port ${port}`);
});
