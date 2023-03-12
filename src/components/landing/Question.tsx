import { useEffect, useState } from "react";

export default function Question({ num }: { num: any }) {
  const [view, setView] = useState(false);
  const contentName = num + "_content";
  const titleName = num + "_title";

  const show = () => {
    if (view) {
      setView(false);
    } else {
      setView(true);
    }
  };

  useEffect(() => {
    let element = document.getElementById(num);
    if (view) {
      element!.innerText = "-";
    } else {
      element!.innerText = "+";
    }

    let content = document.getElementById(contentName);
    if (view) {
      content!.style.display = "block";
    } else {
      content!.style.display = "none";
    }

    // eslint-disable-next-line
  }, [view]);

  return (
    <div className="question">
      <div className="ask">
        <h1 className="title" onClick={show}>
          What is lost dog society?
        </h1>
        <p onClick={show} className="FAQ-view" id={num}>
          +
        </p>
      </div>
      <div className="answer" id={contentName}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
    </div>
  );
}
