import {useState} from "react";
import audio from "../../../assets/audio/copy_color_audio.m4a";
import styles from "./ColorItem.module.scss";

const ColorItem = ({name, color}) => {

  const sound = new Audio(audio);

  const [isAnimation, setIsAnimation] = useState(false);

  const animationStage1Time = 300; //colorScaleWrapper scale
  const animationStage2Time = 300; //copyText appear
  const animationStage23Delay = 300; //copyText lifetime

  const textColor = isColorLight(color) ? "#000" : "#fff";
  const body = document.querySelector("body");

  const handleClick = () => {
    if (isAnimation) {
      return;
    }
    setIsAnimation(true);
    const element = document.getElementById(`mod-col-${name}`);

    navigator.clipboard.writeText(color);
    sound.currentTime = 0;

    body.style.overflow = "hidden";
    element.classList.add(styles.copyStart);
    setTimeout(() => {
      sound.play();
      element.classList.add(styles.copyMiddle);
    }, animationStage1Time);
    setTimeout(() => {
      element.classList.add(styles.copyEnd);
    }, animationStage1Time + animationStage2Time + animationStage23Delay);
    setTimeout(() => {
      element.classList.remove(styles.copyStart);
      element.classList.remove(styles.copyMiddle);
      element.classList.remove(styles.copyEnd);
      body.style.overflow = "auto";
      setIsAnimation(false);
    }, animationStage1Time + animationStage2Time + animationStage23Delay + animationStage2Time);
  };

  return (
    <div className={styles.color}
         id={`mod-col-${name}`}
         style={{backgroundColor: color}}
         role={"button"}
         onClick={handleClick}>
      <div className={styles.colorScaleWrapper}
           style={{
             backgroundColor: color,
             transition: `transform ${animationStage1Time}ms ease-in-out,
                          border-radius ${animationStage1Time}ms ease-in-out,
                          opacity ${animationStage2Time}ms ease-in-out`,
           }}></div>
      <h3 style={{color: textColor}}>{name}</h3>
      <p className={styles.copyButton} style={{color: textColor, borderColor: textColor}}>Copy</p>

      <div className={styles.copyText} style={{
        transition: `opacity ${animationStage2Time}ms ease-in-out`,
        backgroundColor: `rgba(${isColorLight ? "255, 255, 255, 0.2" : "0, 0, 0, 0.8"})`,
      }}>
        <hr style={{backgroundColor: textColor}}/>
        <h4 style={{color: textColor}}>Copied</h4>
        <p style={{color: textColor}}>{color}</p>
        <hr style={{backgroundColor: textColor}}/>
      </div>
    </div>
  );
};

export default ColorItem;

function isColorLight(hexColor) {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return brightness > 100; //change this to configure
}