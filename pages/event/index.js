import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../helper/api";
import EventList from "../../components/Event/event-list";
import EventsSearch from "../../components/Event/event-search";

function AllEventsPage(props) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/event/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.event} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const allEvent = await getAllEvents();
  return {
    props: {
      event: allEvent,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
