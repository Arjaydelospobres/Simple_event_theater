import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../helper/api";
import EventList from "../../components/Event/event-list";
import ResultsTitle from "../../components/Event/result";
import Button from "../../components/Ui/button";
import ErrorAlert from "../../components/Ui/error-alert";

function FilteredEventsPage(props) {
  if (props.hasError)
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/event">Show All Events</Button>
        </div>
      </Fragment>
    );

  if (!props.event || props.event.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/event">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={props.event} />
    </Fragment>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  )
    return { props: { hasError: true } };
  const filterEvent = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      event: filterEvent,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
