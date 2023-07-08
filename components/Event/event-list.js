import EventItem from "./event-items";
import design from "./event-list.module.css";

function Eventlist(props) {
  const { items } = props; // alternative to props.name
  return (
    <ul className={design.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default Eventlist;
