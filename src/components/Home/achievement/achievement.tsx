import React from "react";
import styles from "./achievement.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { achievements } from "../../../config";

const Achievement: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <section ref={ref} className={styles.achievement}>
      <div className={styles.achievementHeader}>
        <div className={styles.achievementTitle}>110+ Happy Customers.</div>
        <p className={styles.achievementDesc}>
          Trusted by over 100 businesses, we deliver exceptional solutions that
          drive success and foster long-lasting partnerships.
        </p>
      </div>

      <div className={styles.achievementContent}>
        {achievements.map((item, index) => (
          <div key={index} className={styles.achievementItem}>
            <div className={styles.achievementNumber}>
              {inView ? (
                <CountUp
                  start={item.start}
                  delay={item.delay}
                  end={item.end}
                  duration={item.duration}
                  suffix={item.suffix}
                />
              ) : (
                "0+"
              )}
            </div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Achievement };
