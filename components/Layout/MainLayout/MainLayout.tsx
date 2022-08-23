import { ReactNode } from "react";
import { Meta, Footer, Navbar } from "@/components";
import styles from "./mainLayout.module.scss";

interface Props {
  children?: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Meta />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
