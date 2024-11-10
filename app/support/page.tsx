import Header from "../components/reusable/header";
import style from "./style.module.css";
import blog from "@/app/asserts/address-book-regular.svg";
import people from "@/app/asserts/users-solid.svg";
import Footer from "../components/reusable/footer";
import Image from "next/image";
import global from "@/app/asserts/globe-solid (1).svg";
export default function SupportPage() {
  return (
    <>
      <Header></Header>
      <main className={style.main2}>
        <header className={style.header}>
          <h1 className={style.headthree}>
            CodeSanbox<span className={style.headone2}>Support</span>
          </h1>
          <h2 className={style.headfour}>Find the help you need.</h2>
        </header>
        <div className={style.anchordiv1}>
          <div className={style.anchordiv}>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>Your First Repository</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>Create a Sanbox</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>Workspaces</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>DevTools</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>Docker Integration</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>Environment variables</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>VS Code Integration</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>GitHub App</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>Team and Access</h3>
            </a>
            <a href="#" className={style.achor}>
              <h3 className={style.achortext}>Plans and Billing</h3>
            </a>
          </div>
        </div>
        <div className={style.main}>
          <div className={style.containerone}>
            <div className={style.containertwo}>
              <div className={style.circle}>
                <Image src={global} alt="logo" className={style.circletwo} />
              </div>
              <div className={style.head}>
                <h2 className={style.headone}>FAQ</h2>
                <h3 className={style.headtwo}>
                  Find the answers to common questions.
                </h3>
                <a className={style.smallanchor} href="#">
                  Open FAQ
                </a>
              </div>
            </div>
          </div>
          <div className={style.containerone}>
            <div className={style.containertwo}>
              <div className={style.circle}>
                <Image src={blog} alt="logo" className={style.circletwo} />
              </div>
              <div className={style.head}>
                <h2 className={style.headone}>Docs</h2>
                <h3 className={style.headtwo}>Learn more about CodeSandbox.</h3>
                <a className={style.smallanchor} href="#">
                  Go to documentation
                </a>
              </div>
            </div>
          </div>
          <div className={style.containerone}>
            <div className={style.containertwo}>
              <div className={style.circle}>
                <Image src={people} alt="logo" className={style.circletwo} />
              </div>
              <div className={style.head}>
                <h2 className={style.headone}>System Status</h2>
                <h3 className={style.headtwo}>
                  Check the status of uour services.
                </h3>
                <a className={style.smallanchor} href="#">
                  Access now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.contactContainer}>
          <div className={style.contactContainer2}>
            <div className={style.formheadings}>
              <span className={style.formhead}>Contact our Support team.</span>

              <span className={style.formpara}>
                still have questions? Our Support team is here to help you!
              </span>
            </div>
            <form className={style.form}>
              <div className={style.portion1}>
                <div className={style.formpart1}>
                  <label className={style.label}>Your name</label>
                  <input
                    className={style.input}
                    type="text"
                    placeholder="e.g. Kathryn Janeway"
                    required
                  />
                </div>
                <div className={style.formpart1}>
                  <label className={style.label}>Your email</label>
                  <input
                    className={style.input}
                    type="text"
                    placeholder="e.g. janeway@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className={style.portion2}>
                <label className={style.label}>
                  what do you need help with?
                </label>
                <input
                  className={style.input}
                  type="text"
                  placeholder="What you need help with"
                  required
                />
              </div>
              <div className={style.portion1}>
                <button className={style.button} type="button">
                  Send
                </button>
                <div>We respond within 72 hours.</div>
              </div>
            </form>
          </div>
        </div>
       
      </main>
      <Footer></Footer>
    </>
  );
}
