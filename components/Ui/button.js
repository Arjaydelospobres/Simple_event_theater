import Link from "next/link"; //like navigate in reactjs

import design from "./Button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={design.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={design.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
