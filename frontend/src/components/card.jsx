import "./card.css";
import { useMyStates } from "../hooks/states";

export function Card() {
  const { level, stage, month, day } = useMyStates();
  return (
    <>
      <div className="wholeCard">
        <div className="square">
          <div className="Lv">Lv.</div>
          <div className="level">{level ? level : 99}</div>
        </div>
        <div className="row_rectangle">
          <div className="STAGE">STAGE</div>
          <div className="stageValue">{stage ? stage : 9}</div>
        </div>
        <div className="column_rectangle">
          <div className="year">2025</div>
          <div className="month">{month ? month : "11."}</div>
          <div className="day">{day ? day : "30"}</div>
        </div>
        <div className="displayPart">
          <span className="words">宠物成长的每一步，像素会停但时间是真的</span>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}
