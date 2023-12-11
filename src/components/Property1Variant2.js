import { useMemo } from "react";
import styles from "./Property1Variant2.module.css";

const Property1Variant2 = ({
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
  hackKnackMargin,
  hackKnackFontWeight,
  groupDivTextDecoration,
  rectangleDivTextDecoration,
  gETINTOUCHTextDecoration,
  homeTextDecoration,
  aboutUsTextDecoration,
  tracksTextDecoration,
  contactTextDecoration,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [property1Variant2Position, property1Variant2Top, property1Variant2Left]);

  const hackKnackStyle = useMemo(() => {
    return {
      margin: hackKnackMargin,
      fontWeight: hackKnackFontWeight,
    };
  }, [hackKnackMargin, hackKnackFontWeight]);

  const groupDivStyle = useMemo(() => {
    return {
      textDecoration: groupDivTextDecoration,
    };
  }, [groupDivTextDecoration]);

  const rectangleDivStyle = useMemo(() => {
    return {
      textDecoration: rectangleDivTextDecoration,
    };
  }, [rectangleDivTextDecoration]);

  const gETINTOUCHStyle = useMemo(() => {
    return {
      textDecoration: gETINTOUCHTextDecoration,
    };
  }, [gETINTOUCHTextDecoration]);

  const homeStyle = useMemo(() => {
    return {
      textDecoration: homeTextDecoration,
    };
  }, [homeTextDecoration]);

  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: aboutUsTextDecoration,
    };
  }, [aboutUsTextDecoration]);

  const tracksStyle = useMemo(() => {
    return {
      textDecoration: tracksTextDecoration,
    };
  }, [tracksTextDecoration]);

  const contactStyle = useMemo(() => {
    return {
      textDecoration: contactTextDecoration,
    };
  }, [contactTextDecoration]);

  return (
    <div className={styles.property1variant2} style={property1Variant2Style}>
      <nav className={styles.property1variant2Child} />
      <b className={styles.hackknack} style={hackKnackStyle}>
        <span>Hack</span>
        <span className={styles.knack}>Knack</span>
      </b>
      <div className={styles.vectorParent} style={groupDivStyle}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.groupChild} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} style={rectangleDivStyle} />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <div className={styles.getInTouch} style={gETINTOUCHStyle}>
          GET IN TOUCH
        </div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home} style={homeStyle}>
          Home
        </div>
        <div className={styles.div}>01</div>
      </div>
      <div className={styles.aboutUsParent}>
        <div className={styles.home} style={aboutUsStyle}>
          About Us
        </div>
        <div className={styles.groupInner} />
        <div className={styles.div}>02</div>
      </div>
      <div className={styles.tracksParent}>
        <div className={styles.home} style={tracksStyle}>
          Tracks
        </div>
        <div className={styles.div}>03</div>
      </div>
      <div className={styles.contactParent}>
        <div className={styles.home} style={contactStyle}>
          Contact
        </div>
        <div className={styles.div}>04</div>
      </div>
    </div>
  );
};

export default Property1Variant2;
