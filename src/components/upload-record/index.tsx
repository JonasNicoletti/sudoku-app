import { useState } from "react";
import { GameState, RecordDto } from "../../models";
import useStore from "../../store";
import CustomButton from "../common/ButtonController";
import axios from "axios";
import { useMutation } from "react-query";
import { toTime } from "../../utils/timeutils";

function UploadRecord() {
  const { setState, time, gameId, hints } = useStore();
  const [userName, setUserName] = useState<string>("");

  const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI,
  });

  const uploadRecord = useMutation<Response, unknown, RecordDto>(
    (data) => axiosClient.post(`/records`, data),
    {
      onSuccess: () => {
        setState(GameState.NEW, gameId);
      },
    }
  );

  return (
    <div>
      <p>Your total score is: {toTime(time + hints * 60)}</p>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        placeholder="Insert your username...."
      />
      <CustomButton
        displayName="Don't upload"
        onClick={() => setState(GameState.EMPTY)}
      />
      <CustomButton
        displayName="Upload"
        onClick={() => {
          const record: RecordDto = {
            gameId: gameId || "",
            score: time + hints * 60,
            userName: userName,
          };
          uploadRecord.mutate(record);
        }}
        disabled={userName?.length === 0}
      />
    </div>
  );
}

export default UploadRecord;
