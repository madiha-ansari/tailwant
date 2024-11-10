import logo from "@/app/asserts/square-regular (2).svg";
import Image from "next/image";
import style from "./style.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={style.gapdiv}></div>
      <div className={style.footer}>
        <nav className={style.footernav}>
          <div className={style.footerlogo}>
            <Image className={style.icon2} src={logo} alt="logo" />
          </div>
          <div className={style.linkContainer}>
            <div className={style.linkContainer2}>
              <label className={style.linklabel}> Use Cases </label>
              <ul className={style.linklist}>
                <li className={style.footerlink}>Cloud Dev Environments</li>
                <li className={style.footerlink}> Code Reviews</li>
                <li className={style.footerlink}>Code in Sandboxes</li>
                <li className={style.footerlink}>Learn & Experiment</li>
                <li className={style.footerlink}>Coding Exercises</li>
                <li className={style.footerlink}>Instant Feedback</li>
              </ul>
            </div>
          </div>
          <div className={style.linkContainer}>
            <div className={style.linkContainer2}>
              <label className={style.linklabel}> Ecosystem </label>
              <ul className={style.linklist}>
                <li className={style.footerlink}>Features</li>
                <li className={style.footerlink}> VS Code Extension</li>
                <li className={style.footerlink}>Sandpack</li>
                <li className={style.footerlink}>Status</li>
                <li className={style.footerlink}>Enterprise</li>
                <li className={style.footerlink}>Pricing</li>
              </ul>
            </div>
          </div>
          <div className={style.linkContainer}>
            <div className={style.linkContainer2}>
              <label className={style.linklabel}> Explore </label>
              <ul className={style.linklist}>
                <li className={style.footerlink}>Discover</li>
                <li className={style.footerlink}> Changelog</li>
                <li className={style.footerlink}>Documentation</li>
                <li className={style.footerlink}>Blog</li>
              </ul>
            </div>
          </div>
          <div className={style.linkContainer}>
            <div className={style.linkContainer2}>
              <label className={style.linklabel}>Company </label>
              <ul className={style.linklist}>
                <li className={style.footerlink}>About</li>

                <li className={style.footerlink}>Support</li>
                <li className={style.footerlink}>Careers</li>
                <li className={style.footerlink}>Brand kit</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={style.gapdiv}></div>
      <div className={style.footer2}>
        <p className={style.copyright}>
          &copy; 2022 CodeSandbox. All rights reserved.
        </p>
        <ul className={style.linklist2}>
          <li> Term of Use</li>
          <li className={style.footerlink2}> privacy & Cookie policy</li>
        </ul>
      </div>
    </footer>
  );
}
