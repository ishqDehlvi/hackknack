import Property1Variant2 from "../components/Property1Variant2";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <img className={styles.desktop1Item} alt="" src="/group-23.svg" />
      <div className={styles.poweredByDelhiContainer}>
        <span>{`Powered by `}</span>
        <span className={styles.delhiTechnicalCampus}>
          Delhi Technical Campus
        </span>
      </div>
      <div className={styles.dates}>
        <div className={styles.february}>06 - 07 FEBRUARY</div>
      </div>
      <div className={styles.learnExploreTeach}>
        <div className={styles.teach}>Teach</div>
        <div className={styles.learn}>Learn</div>
        <div className={styles.explore}>Explore</div>
        <div className={styles.div}>|</div>
        <div className={styles.div1}>|</div>
      </div>
      <div className={styles.arrowText}>
        <div className={styles.weInviteYou}>
          We invite you to the biggest hackathon in Greater Noida, NCR.
        </div>
        <img className={styles.arrowTextChild} alt="" src="/arrow-1.svg" />
      </div>
      <div className={styles.schedule}>
        <button className={styles.scheduleChild} />
        <button className={styles.viewSchedule}>View Schedule</button>
      </div>
      <div className={styles.register}>
        <button className={styles.registerChild} />
        <button className={styles.registerNow}>Register Now</button>
      </div>
      <h1 className={styles.hackknack}>
        <span>Hack</span>
        <span className={styles.delhiTechnicalCampus}>Knack</span>
      </h1>
      <img
        className={styles.megaCreator1Icon}
        alt=""
        src="/megacreator-1@2x.png"
      />
      <Property1Variant2
        property1Variant2Position="absolute"
        property1Variant2Top="0px"
        property1Variant2Left="0px"
        hackKnackMargin="0"
        hackKnackFontWeight="700"
        groupDivTextDecoration="none"
        rectangleDivTextDecoration="none"
        gETINTOUCHTextDecoration="none"
        homeTextDecoration="none"
        aboutUsTextDecoration="none"
        tracksTextDecoration="none"
        contactTextDecoration="none"
      />
      <div className={styles.layout}>
        <div className={styles.layoutChild} />
        <div className={styles.layoutItem} />
        <div className={styles.layoutInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.layoutChild1} />
      </div>
    </div>
  );
};

export default Desktop1;
