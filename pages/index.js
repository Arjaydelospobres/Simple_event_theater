import { getFeaturedEvents } from "..//helper/api";
import EventList from "../components/Event/event-list";

function HomePage(props) {
  const { event } = props;

  return (
    <div>
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
