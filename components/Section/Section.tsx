import styles from "./section.module.scss";
import { ReactNode } from "react";
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
}: Props) => {
  const bothShadows =
    isBottomShadowEnabled && isTopShadowEnabled ? styles.bottomTopShadow : "";
  const topShadow = !bothShadows && isTopShadowEnabled ? styles.topShadow : "";
  const bottomShadow =
    !bothShadows && isBottomShadowEnabled ? styles.bottomShadow : "";
  const topPadding = topNav ? styles.topPadding : "";
  const isCentered = centered ? styles.centered : "";
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
            alt={imageAlt}
            src={bgImage}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      <div className={css(styles.componentContainer, topPadding, isCentered)}>
        {children}
      </div>
    </div>
  );
};

export default Section;
