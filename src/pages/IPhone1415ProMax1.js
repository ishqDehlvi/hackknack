import Property1mobile from "../components/Property1mobile";
import styles from "./IPhone1415ProMax1.module.css";

const IPhone1415ProMax1 = () => {
  return (
    <div className={styles.iphone1415ProMax1}>
      <div className={styles.iphone1415ProMax1Child} />
      <img
        className={styles.iphone1415ProMax1Item}
        alt=""
        src="/group-24.svg"
      />
      <Property1mobile
        property1mobilePosition="absolute"
        property1mobileTop="0px"
        property1mobileLeft="0px"
      />
      <div className={styles.poweredByDelhiContainer}>
        <span className={styles.poweredByDelhiContainer1}>
          <span>{`Powered by `}</span>
          <span className={styles.delhiTechnicalCampus}>
            Delhi Technical Campus
          </span>
        </span>
      </div>
      <div className={styles.dates}>
        <div className={styles.datesChild} />
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
        <div className={styles.scheduleInner}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.viewSchedule}>View Schedule</div>
      </div>
      <div className={styles.register}>
        <div className={styles.registerChild} />
        <div className={styles.registerNow}>Register Now</div>
      </div>
      <b className={styles.hackknack}>
        <span>Hack</span>
        <span className={styles.delhiTechnicalCampus}>Knack</span>
      </b>
      <img
        className={styles.megaCreator21}
        alt=""
        src="/megacreator-2-1@2x.png"
      />
    </div>
  );
};

export default IPhone1415ProMax1;
