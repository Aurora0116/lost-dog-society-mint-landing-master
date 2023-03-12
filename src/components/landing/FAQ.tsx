import { useEffect, useState } from "react";
import Question from "./Question";

export default function FAQ() {
  const [view, setView] = useState(false);

  const show = () => {
    // console.log("%#$%");
    setView(true);
  };

  useEffect(() => {
    // console.log(view);
  }, [view]);

  return (
    <div className="FAQ" id="FAQ">
      {/* eslint-disable-next-line */}
      <img src="/image/FAQ.png" alt="" />
      <div className="questions">
        <h1 className="FAQ-title">frequently asked questions</h1>
        <Question num={"3"} />
        <Question num={"2"} />
        <Question num={"1"} />
      </div>
    </div>
  );
}
