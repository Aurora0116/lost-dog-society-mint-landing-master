import { ArrowDownIcon } from "../svgIcons";

export const Banner = () => {
  return (
    <div className="banner">
      {/* eslint-disable-next-line */}
      <img src="/image/banner.jpg" alt="banner" className="banner-img" />
      <div className="banner-content">
        <div className="banner-title">Welcome in the dog house</div>
        <p>THIS IS WHAT&#39;S UP</p>
        <button>
          {/* <div className="btn-title"> */}
          <span className="text">discover</span>
          <span className="icon">
            <ArrowDownIcon />
          </span>
          {/* </div> */}
        </button>
      </div>
    </div>
  );
};
