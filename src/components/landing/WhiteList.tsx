export default function WhiteList() {
  return (
    <div className="whitelist">
      <div className="submit-side">
        <div className="title">enter for a chance to win a whitelist spot</div>
        <input type="text" placeholder="Enter your email address here" />
        <input type="submit" className="submit-btn" value="submit" />
      </div>
      {/* eslint-disable-next-line */}
      <img src="/image/whitelist.png" alt="" />
    </div>
  );
}
