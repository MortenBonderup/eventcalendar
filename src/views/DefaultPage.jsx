
import { useState, useEffect } from "react";
import EventList from "../components/EventList";
import SearchField from "../components/Searchfield";

function DefaultPage() {

// Initialize state with data from localStorage or an empty array
const [events, setEvents] = useState(() => {
  const savedEvents = localStorage.getItem("events");
  return savedEvents ? JSON.parse(savedEvents) : [];
});

// Load saved filter text from localStorage on initial render
const [filterText, setFilterText] = useState(() => {
  const savedFilter = localStorage.getItem("filterText");
  return savedFilter ? savedFilter : "";
});

// Save filterText to localStorage whenever it changes
useEffect(() => {
  localStorage.setItem("filterText", filterText);
}, [filterText]);

// Read the events stored in webstorage/local storage
useEffect(() => {
  localStorage.setItem("events", JSON.stringify(events));
}, [events]);
 
// Sort the events in alphabetical order
const sortedEvents = events.toSorted((a, b) =>
    a.date.localeCompare(b.date, "en", { sensitivity: "base" })
  );

// Filter the events based on the input text
const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(filterText.toLowerCase())
  );

// Event handler that initiate filtering proces
const handleInputChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <>
      <SearchField handleInput={handleInputChange} filter={filterText}/>
      {filteredEvents.length > 0 ? (
        <div>
          <EventList events={filteredEvents} setEvents={setEvents} />
        </div>
      ) : (
      <p>Sorry, nothing to show...</p>
      )}
    </>
  );
}

export default DefaultPage;

