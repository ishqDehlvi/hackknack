import { useMemo } from "react";
import styles from "./Property1mobile.module.css";

const Property1mobile = ({
  property1mobilePosition,
  property1mobileTop,
  property1mobileLeft,
}) => {
  const property1mobileStyle = useMemo(() => {
    return {
      position: property1mobilePosition,
      top: property1mobileTop,
      left: property1mobileLeft,
    };
  }, [property1mobilePosition, property1mobileTop, property1mobileLeft]);

  return (
    <div className={styles.property1mobile} style={property1mobileStyle}>
      <div className={styles.property1mobileChild} />
      <b className={styles.hackknack}>
        <span className={styles.hackknackTxt}>
          <span>Hack</span>
          <span className={styles.knack}>Knack</span>
        </span>
      </b>
      <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
    </div>
  );
};

export default Property1mobile;
