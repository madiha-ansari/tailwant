import Header from "../components/reusable/header";
import style from "./style.module.css";
import blog from "@/app/asserts/address-book-regular.svg";
import people from "@/app/asserts/users-solid.svg";
import tick from "@/app/asserts/circle-check-regular.svg";
import Image from "next/image";
import global from "@/app/asserts/globe-solid (1).svg";
import Footer from "../components/reusable/footer";
export default function ResourcesPage() {
  return (
    <>
      <Header></Header>
      <h1 className={style.mainhead}>Resources</h1>
      <section className={style.main}>
        <div className={style.containerone}>
          <div className={style.containertwo}>
            <div className={style.circle}>
              <Image src={global} alt="logo" className={style.circletwo} />
            </div>
            <h2 className={style.headone}>Discover</h2>
            <h3 className={style.headtwo}>
              Find inspiration for your next project.
            </h3>
          </div>
        </div>
        <div className={style.containerone}>
          <div className={style.containertwo}>
            <div className={style.circle}>
              <Image src={blog} alt="logo" className={style.circletwo} />
            </div>
            <h2 className={style.headone}>Blog</h2>
            <h3 className={style.headtwo}>
              Read news and insights from our team.
            </h3>
          </div>
        </div>
        <div className={style.containerone}>
          <div className={style.containertwo}>
            <div className={style.circle}>
              <Image src={people} alt="logo" className={style.circletwo} />
            </div>
            <h2 className={style.headone}>Community</h2>
            <h3 className={style.headtwo}>
              Engage with other Community members.
            </h3>
          </div>
        </div>
        <div className={style.containerone}>
          <div className={style.containertwo}>
            <div className={style.circle}>
              <Image src={tick} alt="logo" className={style.circletwo} />
            </div>
            <h2 className={style.headone}>Changelog</h2>
            <h3 className={style.headtwo}>
              Chect out our latest features and fixes.
            </h3>
          </div>
        </div>
     
      </section>
      <Footer></Footer>
    </>
  );
}
