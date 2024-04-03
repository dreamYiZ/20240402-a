"use client"
import Image from "next/image";
import classes from "./home.module.scss";
import mobile from "is-mobile";
import { useState, useEffect } from "react";


export default function Home() {

  const [mIsMobile, setMIsMobile] = useState();

  useEffect(() => {
    setMIsMobile(mobile())

    return () => {

    }
  }, [])



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  const Section = ({ title, children, id }) => {
    return <div className={classes.Section} id={id}>
      <h1 className={`${classes.SectionTitle} ${classes.TextShadow}`}>{title}</h1>
      <section className={classes.SectionContent}>
        {children}
      </section>
    </div>
  }


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const SIZE_IMAGE_BG = 300;

  const SIZE_IMG_INTRO = 800;

  return (
    <main className={classes.Home}>

      <nav className={classes.Nav}>
        <div className={classes.NavContent}>

          <div className={classes.NavLeft}>
            <Image
              src="/favicon.png" // Path to your logo
              alt="Logo"
              width={40} // Adjust based on your needs
              height={40} // Adjust based on your needs
              style={{ borderRadius: '50%', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}
            />
            <div className={`${classes.NavTitle} ${classes.TextShadow}`} onClick={scrollToTop}>
              蓝星计划
            </div>
          </div>


          <div className={`${classes.NavRight} ${classes.TextShadow}`}>
            <div className={`${classes.NavItem} ${classes.TextShadow}`} onClick={() => scrollToSection('section1')}>
              项目背景
            </div>
            <div className={`${classes.NavItem} ${classes.TextShadow}`} onClick={() => scrollToSection('section2')}>
              产品介绍
            </div>
            <div className={`${classes.NavItem} ${classes.TextShadow}`} onClick={() => scrollToSection('section3')}>
              合作方式
            </div>
          </div>

        </div>
      </nav>
      <div className={classes.Banner}>
        <Image src="/banner-landscape.png" alt="Banner" layout="fill" objectFit="cover" />
      </div>

      <Section title="项目背景" id="section1">

        <div className={classes.ProjectBg} >
          <div className={classes.ProjectBgText}>
            <p>功能单一</p>
          </div>
          <Image width={SIZE_IMAGE_BG} height={SIZE_IMAGE_BG} src="/fan-1.png" className={classes.ProjectBgImage} />
        </div>

        <div className={classes.ProjectBg}>
          <Image width={SIZE_IMAGE_BG} height={SIZE_IMAGE_BG} src="/fan-2.png" className={classes.ProjectBgImage} />

          <div className={classes.ProjectBgText}>
            <p>容易损坏</p>
          </div>
        </div>



      </Section>
      <Section title="产品介绍" id="section2">

        <div className={classes.ProjectIntro} >
          {mIsMobile && <Image width={300} height={220} src="/fan-new-1.png" className={classes.ProjectIntroImage} />}
          {!mIsMobile && <Image width={1000} height={600} src="/fan-new-1.png" className={classes.ProjectIntroImage} />}


          <div className={classes.ProjectIntroText}>
            <h3>模块化</h3>
            <div className={classes.ProjectIntroTextDetail}>
              <p>创新的模块化设计，实现无限可能</p>

              <p>我们的产品采用了独特的模块化设计，机头和机身可以分离，通过卡扣式接入，方便快捷。您可以根据需要，轻松切换风扇机头、电灯机头、筋膜枪机头、扩音器机头等多种机头，满足您的各种需求。</p>

              <p>机身设计有多种接口，可以作为充电宝使用，为您的设备提供持续的电力支持。模块化设计使得机头可以共用，大大提高了产品的使用效率。</p>

              <p>我们的设计理念是环保、可持续和低碳。通过共用机头，我们减少了生产和消费的资源浪费，降低了碳排放，为保护地球做出了我们的贡献。</p>

              <p>我们的产品不仅仅是一个工具，更是一种生活方式的改变。我们相信，通过我们的产品，您的生活将变得更加便捷，更加美好。让我们一起，创造无限可能！</p>

            </div>
          </div>
        </div>

      </Section>
      <Section title="合作方式" id="section3">
        <p>rentoo#protect-earth.com</p>
        <p>
          # 替换成 @
        </p>


      </Section>
    </main>
  );
}
