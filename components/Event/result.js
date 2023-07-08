import Button from "../Ui/button";
import design from "./result.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={design.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/event">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
