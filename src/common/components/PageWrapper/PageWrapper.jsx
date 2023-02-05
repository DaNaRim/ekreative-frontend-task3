import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import styles from "./PageWrapper.module.scss";

const PageWrapper = (props) => (
  <div className={styles.page_wrapper}>
    <Header className={styles.main_header}/>
    {props.children}
    <Footer className={styles.main_footer}/>
  </div>
);

export default PageWrapper;