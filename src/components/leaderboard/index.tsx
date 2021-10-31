import useStore from "../../store";
import { toTime } from "../../utils/timeutils";

function LeaderBoard() {
  const records = useStore((store) => store.records);

  return (
    <div>
      <h2>Leaderboard </h2>
      {records.length ? (
        records.map((record, i) => (
          <div className="record-entry" key={i}>
            <h4>{i + 1}.</h4>
            <h3>{toTime(record.score)}</h3>
            <p>{record.userName}</p>
          </div>
        ))
      ) : (
        <div className="record-entry">
          <p>
            <i>Nobody finished this game yet </i>
          </p>
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
