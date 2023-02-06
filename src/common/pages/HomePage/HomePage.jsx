import palettesData from "../../../data/pallete.json";
import Palette from "../../components/Palette/Palette";

import styles from "./HomePage.module.scss";

const HomePage = () => (
  <main className={styles.home}>
    <h1>Home Page</h1>
    <div className={styles.paletteList}>
      {palettesData.map((pallet) => (
        <Palette key={pallet.id} {...pallet}/>
      ))}
    </div>
  </main>
);

export default HomePage;

/*

Correct a first palette
{
    "paletteName": "Material UI Colors",
    "id": "material-ui-colors",
    "emoji": "🎨",
    "colors": [
      {
        "name": "red",
        "color": "#F44336"
      },
      {
        "name": "indigo",
        "color": "#3F51B5"
      },
      {
        "name": "teal",
        "color": "#009688"
      },
      {
        "name": "yellow",
        "color": "#FFEB3B"
      },
      {
        "name": "brown",
        "color": "#795548"
      },
      {
        "name": "pink",
        "color": "#E91E63"
      },
      {
        "name": "blue",
        "color": "#2196F3"
      },
      {
        "name": "green",
        "color": "#4CAF50"
      },
      {
        "name": "amber",
        "color": "#FFC107"
      },
      {
        "name": "grey",
        "color": "#9E9E9E"
      },
      {
        "name": "purple",
        "color": "#9C27B0"
      },
      {
        "name": "lightblue",
        "color": "#03A9F4"
      },
      {
        "name": "lightgreen",
        "color": "#8BC34A"
      },
      {
        "name": "orange",
        "color": "#FF9800"
      },
      {
        "name": "bluegrey",
        "color": "#607D8B"
      },
      {
        "name": "deeppurple",
        "color": "#673AB7"
      },
      {
        "name": "cyan",
        "color": "#00BCD4"
      },
      {
        "name": "lime",
        "color": "#CDDC39"
      },
      {
        "name": "deeporange",
        "color": "#FF5722"
      }
    ]
  },
 */