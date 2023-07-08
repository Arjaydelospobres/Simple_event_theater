import Link from "next/link";

import design from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={design.header}>
      <div className={design.logo}>
        <Link href="/">Theater Events</Link>
      </div>
      <nav className={design.navigation}>
        <ul>
          <li>
            <Link href="/event">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
