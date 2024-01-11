import styles from "./section.module.scss";
import { ReactNode, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { css } from "../../utils";

interface Props {
  bgImage?: StaticImageData;
  imageAlt?: string;
  isOverlay?: boolean;
  children?: ReactNode;
  isBottomShadowEnabled?: boolean;
  isTopShadowEnabled?: boolean;
  topNav?: boolean;
  bgColor?: string;
  centered?: boolean;
  className?: string;
  addAnimation?: boolean;
}

const Section = ({
  bgImage,
  imageAlt,
  isOverlay = false,
  children = null,
  isBottomShadowEnabled = false,
  isTopShadowEnabled = false,
  topNav = false,
  bgColor,
  centered = false,
  addAnimation = true,
}: Props) => {
  const ref = useRef(null);

  const bothShadows =
    isBottomShadowEnabled && isTopShadowEnabled ? styles.bottomTopShadow : "";
  const topShadow = !bothShadows && isTopShadowEnabled ? styles.topShadow : "";
  const bottomShadow =
    !bothShadows && isBottomShadowEnabled ? styles.bottomShadow : "";
  const topPadding = topNav ? styles.topPadding : "";
  const isCentered = centered ? styles.centered : "";

  useEffect(() => {
    if (ref.current && addAnimation === true) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      });
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div
      className={css(styles.container, topShadow, bottomShadow, bothShadows)}
    >
      {bgColor && (
        <div
          className={styles.backgroundColor}
          style={{
            backgroundColor: bgColor,
          }}
        />
      )}
      {bgImage && (
        <div className={styles.backgroundImage}>
          {isOverlay && <div className={styles.overlay} />}
          <Image
            className={styles.image}
            alt={bgImage ? imageAlt : ""}
            src={bgImage}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      <div
        ref={ref}
        className={css(
          styles.componentContainer,
          topPadding,
          isCentered,
          addAnimation === true ? styles.hidden : ""
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
