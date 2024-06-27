import { FC } from "react";
// import InactivityDetector from "../InactivityDetector/InactivityDetector";
import useIdle from "../../hooks/useIdle";
import style from "./App.module.scss";

const App: FC = () => {
  const isIdle = useIdle(3000); // 3 seconds
  return (
    <div className={style["app"]}>
      {/* <InactivityDetector /> */}
      {isIdle ? <p>User is idle</p> : <p>User is active</p>}
    </div>
  );
};

export default App;
