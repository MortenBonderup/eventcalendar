import EventItem from "./EventItem";

export default function EventList({ events, setEvents }) {

  // When user press delete, the id is used to identify
  // the event, it is excluded and a new version of the event list is created.
  function deleteEventHandler(id) {
    const isConfirmed = window.confirm("Are you sure you want to delete this event?");
    if (isConfirmed) {
      setEvents(events.filter(event => event.id !== id));
    }
  }

  return (
    <div>
      {events.map(event => (
        <EventItem 
          key={event.id}
          event={event}
          deleteHandler={deleteEventHandler}
        />
      ))}
    </div>
  );
}


