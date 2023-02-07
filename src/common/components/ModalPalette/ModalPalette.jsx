import ColorItem from "../ColorItem/ColorItem";
import styles from "./ModalPalette.module.scss";

const ModalPalette = ({paletteName, colors, closeModal}) => (
  <div>
    <div className={styles.background} onClick={closeModal}></div>
    <div className={styles.window}>
      <h1>{paletteName}</h1>
      <div className={styles.colors}>
        {colors.map((color) => (
          <ColorItem key={color.name} {...color}/>
        ))}
      </div>
    </div>
  </div>
);

export default ModalPalette;