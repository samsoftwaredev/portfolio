import styles from "./section.module.scss";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  bgImage?: StaticImageData;
  imageAlt?: string;
  isOverlay?: boolean;
  children?: ReactNode;
  isBottomShadowEnabled?: boolean;
  isTopShadowEnabled?: boolean;
  topNav?: boolean;
}

const Section = ({
  bgImage,
  imageAlt,
  isOverlay = false,
  children = null,
  isBottomShadowEnabled = false,
  isTopShadowEnabled = false,
  topNav = false,
}: Props) => {
  const topShadow = isTopShadowEnabled ? styles.topShadow : "";
  const bottomShadow = isBottomShadowEnabled ? styles.bottomShadow : "";
  const topPadding = topNav ? styles.topPadding : "";

  return (
    <div
      className={[styles.container, topShadow, topPadding, bottomShadow].join(
        " "
      )}
    >
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
      <div className={styles.componentContainer}>{children}</div>
    </div>
  );
};

export default Section;
