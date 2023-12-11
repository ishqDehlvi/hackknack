import { useEffect } from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.comingSoon}>
      <img className={styles.comingSoonChild} alt="" src="/group-23.svg" />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.helpParent}>
          <div className={styles.help}>HELP</div>
          <a className={styles.contactUsOn}>Contact us on instagram</a>
          <a className={styles.gdscDtc}>Contact us on linkedin</a>
        </div>
        <a className={styles.aboutUsParent}>
          <div className={styles.help}>ABOUT US</div>
          <a className={styles.contactUsOn}>Delhi Technical Campus</a>
          <a className={styles.gdscDtc}>GDSC DTC</a>
        </a>
        <div className={styles.delhiTechnicalCampus1}>
          © Delhi Technical Campus, 2023-2024
        </div>
        <div className={styles.subscribeForUpdatesParent}>
          <div className={styles.subscribeForUpdates}>
            SUBSCRIBE FOR UPDATES
          </div>
          <div className={styles.rectangleParent}>
            <button className={styles.groupChild} />
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <input className={styles.groupItem} type="email" />
            <div className={styles.email}>Email</div>
          </div>
          <img className={styles.groupInner} alt="" src="/group-10.svg" />
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.designedAndCodedContainer}>
              <span>{`Designed and Coded by `}</span>
              <span className={styles.dtcTechnicalTeam}>
                DTC Technical Team
              </span>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.poweredByDelhiContainer}>
        <span className={styles.poweredByDelhiContainer1}>
          <span>{`Powered by `}</span>
          <span className={styles.dtcTechnicalTeam}>
            Delhi Technical Campus
          </span>
        </span>
      </div>
      <b className={styles.comingSoon1} data-animate-on-scroll>
        COMING SOON...
      </b>
      <div className={styles.learnExploreTeach}>
        <div className={styles.teach}>Teach</div>
        <div className={styles.learn}>Learn</div>
        <div className={styles.explore}>Explore</div>
        <div className={styles.div}>|</div>
        <div className={styles.div1}>|</div>
      </div>
      <div className={styles.hackknackByDtcContainer}>
        <span className={styles.poweredByDelhiContainer1}>
          <span>Hack</span>
          <span className={styles.dtcTechnicalTeam}>Knack by DTC</span>
        </span>
      </div>
      <img
        className={styles.megaCreator1Icon}
        alt=""
        src="/megacreator-1@2x.png"
      />
      <div className={styles.frameParent}>
        <input
          className={styles.frameChild}
          placeholder="Stay Updated...(email)"
          type="email"
        />
        <button className={styles.vectorWrapper}>
          <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
