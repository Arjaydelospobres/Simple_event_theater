import Image from "next/image";

import Button from "../Ui/button";
import DateIcon from "../Icons/date-icon";
import HomeIcon from "../Icons/home-icon";
import RightIcon from "../Icons/right-icon";
import design from "./event-items.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/event/${id}`;

  return (
    <li className={design.item}>
      <Image src={"/" + image} alt={title} width={250} height={150} />
      <div className={design.content}>
        <div className={design.summary}>
          <h2>{title}</h2>
          <div className={design.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={design.address}>
            <HomeIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={design.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={design.icon}>
              <RightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
