import logo from "@/app/asserts/square-regular (2).svg";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navone}>
        <div className={style.Logo}>
          <Image className={style.icon} src={logo} alt="Logo" />

          <a href="/home" className={style.logotext}>
            CodeSandbox
          </a>
        </div>

        <ul className={style.listone}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
        </ul>
        <div className={style.navbutton}>
          <button className={style.navbutton1}>Sign In</button>
          <button className={style.navbutton2}>Try for free</button>
        </div>
      </nav>
      <nav>
        <ul className={style.listtwo}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
