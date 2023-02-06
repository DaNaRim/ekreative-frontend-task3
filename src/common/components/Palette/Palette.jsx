import {useState} from "react";
import ModalPalette from "../ModalPalette/ModalPalette";
import styles from "./Palette.module.scss";

const Palette = ({paletteName, emoji, colors}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.palette}>
      <div onClick={openModal}>
        <div className={styles.colors}>
          {colors.map((color) => (
            <div className={`${styles.color} ${color.name}`}
                 style={{backgroundColor: color.color}}
                 key={color.name}></div>
          ))}
        </div>
        <footer>
          <h5>{paletteName}</h5>
          <span>{emoji}</span>
        </footer>
      </div>
      {isModalOpen && <ModalPalette paletteName={paletteName} colors={colors} closeModal={closeModal}/>}
    </div>
  );
};

export default Palette;