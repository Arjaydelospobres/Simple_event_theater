import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../Dummy_data";
import EventList from "../../components/Event/event-list";
import EventsSearch from "../../components/Event/event-search";

function AllEventsPage() {
  const router = useRouter();
  const event = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/event/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={event} />
    </Fragment>
  );
}

export default AllEventsPage;
