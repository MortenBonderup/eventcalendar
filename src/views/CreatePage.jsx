import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  
  // Initialize state with data from localStorage or an empty array
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  // Optional: Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);


  function createHandler(e) {
    e.preventDefault();
    const highestId = events.length > 0 ? Math.max(...events.map(event => event.id)) : -1
    const newEvent = { id: highestId+1, title: title, date: date, description: description };
    setEvents([...events, newEvent]);
    navigate("/");
  }

  return (
    <form onSubmit={createHandler}>
      <h2>Create new Event</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} required onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} required onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};