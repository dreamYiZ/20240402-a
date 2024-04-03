import Image from "next/image";
import classes from "./home.module.scss";

export default function Home() {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


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
            <div className={`${classes.NavItem} ${classes.TextShadow}`}>
              项目背景
            </div>
            <div className={`${classes.NavItem} ${classes.TextShadow}`}>
              产品介绍
            </div>
            <div className={`${classes.NavItem} ${classes.TextShadow}`}>
              合作方式
            </div>
          </div>
        </div>
      </nav>
      <div className={classes.Banner}>
        <Image src="/banner-landscape.png" alt="Banner" layout="fill" objectFit="cover" />
      </div>
    </main>
  );
}
