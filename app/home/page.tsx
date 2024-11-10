import Header from "../components/reusable/header";
import stylesheet from "./page.module.css";
import imagelogo1 from "@/app/asserts/logoImage/adobe.webp";
import imagelogo2 from "@/app/asserts/logoImage/algolia.webp";
import imagelogo3 from "@/app/asserts/logoImage/atlassian.webp";
import imagelogo4 from "@/app/asserts/logoImage/intel.webp";
import imagelogo5 from "@/app/asserts/logoImage/microsoft.webp";
import imagelogo6 from "@/app/asserts/logoImage/nvidia.webp";
import imagelogo7 from "@/app/asserts/logoImage/shopify.webp";
import imagelogo8 from "@/app/asserts/logoImage/stripe.webp";
import imagelogo9 from "@/app/asserts/logoImage/uber.webp";
import imagelogo10 from "@/app/asserts/logoImage/zendesk.webp";
import image from "@/app/asserts/cloud.png";
import image2 from "@/app/asserts/image.webp";
import Fotter from "@/app/components/reusable/footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header></Header>

      <section className={stylesheet.ContainerOne}>
        <h1 className={stylesheet.heroname}>
          <div className={stylesheet.headingone}>Instant cloud</div>
          <div className={stylesheet.headingtwo}>development</div>
        </h1>
        <h2 className={stylesheet.headingthree}>
          CodeSandbox gives you 24/7 collaborative cloud
          <br />
          development environments (CDEs) that resume in 2 seconds.
        </h2>
        <button className={stylesheet.herobutton}>Try for free</button>
      </section>
      <div
        className={stylesheet.slider}
        style={{ width: "100%", height: "143px" }}
      >
        <div className={stylesheet.marquee}>
          <div className={stylesheet.marqueeContainer}>
            <div
              className={stylesheet.logolist}
              style={{ width: "100%", height: "103px" }}
            >
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo1}
                  alt="logo 1"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo2}
                  alt="logo 2"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo3}
                  alt="logo 3"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo4}
                  alt="logo 4"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo5}
                  alt="logo 5"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo6}
                  alt="logo 6"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo7}
                  alt="logo 7"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo8}
                  alt="logo 8"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo9}
                  alt="logo 9"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo10}
                  alt="logo 10"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo1}
                  alt="logo 11"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo2}
                  alt="logo 12"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo3}
                  alt="logo 13"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo4}
                  alt="logo 14"
                />
              </div>

              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo5}
                  alt="logo 15"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo6}
                  alt="logo 6"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo7}
                  alt="logo 7"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo8}
                  alt="logo 8"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo9}
                  alt="logo 9"
                />
              </div>
              <div className={stylesheet.item}>
                <Image
                  className={stylesheet.pic}
                  src={imagelogo10}
                  alt="logo 10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={stylesheet.Containertwo}>
        <div className={stylesheet.containertwohead}>
          <span className={stylesheet.cloud}>
            {" "}
            <Image className={stylesheet.img} src={image} alt="image" />
          </span>
          <div className={stylesheet.headingContainer}>
            <h2 className={stylesheet.headingfour}>
              Meet a CDE that makes an impact
            </h2>
          </div>
        </div>

        <div className={stylesheet.containerContent}>
          <div className={stylesheet.partion}>
            <div className={stylesheet.borderbox}>
              <div className={stylesheet.innerContent}>
                <h4 className={stylesheet.headingfive}> 5+</h4>
                <h4 className={stylesheet.headingsix}> hours saved</h4>
                <p className={stylesheet.para}>per developer, per week</p>
              </div>
            </div>
          </div>
          <div className={stylesheet.partion}>
            <div className={stylesheet.borderbox}>
              <div className={stylesheet.innerContent}>
                <h4 className={stylesheet.headingfive}> 90%</h4>
                <h4 className={stylesheet.headingsix}> reduction</h4>
                <p className={stylesheet.para}>in dev onboarding time</p>
              </div>
            </div>
          </div>
          <div className={stylesheet.partion}>
            <div className={stylesheet.borderbox}>
              <div className={stylesheet.innerContent}>
                <h4 className={stylesheet.headingfive}> 60%</h4>
                <p className={stylesheet.para2}>
                  of cloud workloads will be built and deployed using CDEs by
                  2026
                  <a className={stylesheet.link} href="#">
                    according to Gartner{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={stylesheet.buttondiv}>
          <button className={stylesheet.buttontwo}>
            {" "}
            Learn more about CDEs
          </button>
        </div>
      </section>
      <section className={stylesheet.Containerthree}>
        <div className={stylesheet.contentbox}>
          <h2 className={stylesheet.headthree}>Join the future of building</h2>
          <button className={stylesheet.herobutton}>Start for free</button>
        </div>
        <Image className={stylesheet.image3} src={image2} alt="image2" />
      </section>
      <Fotter></Fotter>
    </>
  );
}
