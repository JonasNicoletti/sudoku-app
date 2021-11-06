import useStore from "../../store";
import { toTime } from "../../utils/timeutils";

function LeaderBoard() {
  const records = useStore((store) => store.records);

  return (
    <div>
      {records.length ? (
        records.map((record, i) => (
          <div className="flex ml-3" key={i}>
            <h4 className="mr-4">{i + 1}.</h4>
            <h3 className="mr-2">{toTime(record.score)}</h3>
            <p>{record.userName}</p>
          </div>
        ))
      ) : (
        <div className="rlex ml-3">
          <p>
            <i>Nobody finished this game yet </i>
          </p>
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
