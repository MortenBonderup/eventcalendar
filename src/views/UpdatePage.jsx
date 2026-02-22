import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const { id } = useParams();

  // Initialize state with data from localStorage or an empty array
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const event = events.find(event => event.id === Number(id)); // Find the event in question
 
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  // Optional: Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setDescription(event.description);
    }
  }, [event]);

  
  function updateHandler(e) {
    e.preventDefault();
    const updatedEvent = { id: Number(id), title: title, date: date, description: description };
    // console.log(updatedEvent);
    setEvents(events.map((event) =>
      event.id === Number(id) ? updatedEvent : event
    )
  );

    navigate("/");
  }

  return (
    <form onSubmit={updateHandler}>
      <h2>Update event</h2>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="number" id="id" name="id" value={id} readOnly />
      </div>
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
      <button type="submit">Update</button>
    </form>
  );
};