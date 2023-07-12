import { Fragment } from "react";
import { useRouter } from "next/router";

import {
  getEventById,
  getFeaturedEvents,
  getAllEvents,
} from "../../helper/api";
import EventSummary from "../../components/Event-details/event-summary";
import EventLogistics from "../../components/Event-details/event-logistics";
import EventContent from "../../components/Event-details/event-content";
import ErrorAlert from "../../components/Ui/error-alert";

function EventDetailPage(props) {
  const { event } = props;

  if (!event) {
    return (
      <ErrorAlert>
        <p>Loading</p>
      </ErrorAlert>
    );
  }
  // const router = useRouter();

  // const eventid = router.query.eventid;
  // const event = getEventById(eventid);
  // console.log(eventid);
  // if (!event) {
  //   return (
  //     <ErrorAlert>
  //       <p>No event found!</p>
  //     </ErrorAlert>
  //   );
  // }

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
export async function getStaticProps(context) {
  const { params } = context;
  const eventid = params.eventid;
  const eventById = await getEventById(eventid);

  return {
    props: {
      event: eventById,
    },
    revalidate: 20,
  };
}
export async function getStaticPaths() {
  const data = await getAllEvents();

  const paramsEvent = data.map((event) => ({
    params: { eventid: event.id }, //note: eventid it the file name
  }));

  return {
    paths: paramsEvent,
    fallback: true,
  };
}

export default EventDetailPage;
