import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../Dummy_data";
import EventSummary from "../../components/Event-details/event-summary";
import EventLogistics from "../../components/Event-details/event-logistics";
import EventContent from "../../components/Event-details/event-content";
import ErrorAlert from "../../components/Ui/error-alert";

function EventDetailPage() {
  const router = useRouter();

  const eventid = router.query.eventid;
  const event = getEventById(eventid);
  console.log(eventid);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
