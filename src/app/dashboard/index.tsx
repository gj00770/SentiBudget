import { FunctionComponent, useState } from "react";
import { Wrappper } from "./style";
import classifyProduct from "../api/getCategory";

export const Dashboard: FunctionComponent = () => {
  const [description] = useState("도미노 피자");
  const [result] = useState("미정입니다");
  const [, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const classification = await classifyProduct(description);
    // setResult(classification);
    console.log(classification);
    setLoading(false);
  };

  return (
    <div>
      <Wrappper>
        <button onClick={handleSubmit}>테스트 버튼</button>
        <div>{result} && 모르겟다</div>
        <div>니가 쓴돈</div>
        <div>일별그래프</div>
        <div>일별 감정</div>
      </Wrappper>
      <div>
        <div>종류별 쓴거 </div>
        <div></div>
      </div>
    </div>
  );
};
