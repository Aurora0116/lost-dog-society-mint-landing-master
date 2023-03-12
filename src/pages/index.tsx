import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "../components/Widget";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="main-page">
      {/* eslint-disable-next-line */}
      <img src="/image/home-banner.jpg" className="home-banner" alt="" />
      <div className="home-content">
        <h1 className="loading_title">Choose</h1>
        <p className="loading-description">
          And see how deep the rabbit hole goes.
        </p>
        <div className="home-link-group">
          <Button
            title="red pill"
            color="red"
            onClick={() => router.push("/landing")}
          />
          <Button
            title="blue pill"
            color="blue"
            onClick={() => router.push("/troll")}
          />
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <img src="/image/banner-logo.png" className="banner-logo" alt="" />
    </div>
  );
};

export default Home;
