import { FC } from "react";
import InactivityDetector from "../InactivityDetector/InactivityDetector";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <InactivityDetector />
    </div>
  );
};

export default App;
