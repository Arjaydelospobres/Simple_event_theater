import Head from "next/head";

import { getFeaturedEvents } from "..//helper/api";
import EventList from "../components/Event/event-list";

function HomePage(props) {
  const { event } = props;

  return (
    <div>
      <Head>
        <title>All Theater Event</title>
      </Head>
      <EventList items={event} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      event: featuredEvents,
    },
  };
}

export default HomePage;
