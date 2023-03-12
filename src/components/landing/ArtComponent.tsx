export default function ArtComponent() {
  return (
    <div className="art">
      <h1 className="title">the art</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{" "}
      </p>
      <div className="continer art-group">
        {/* eslint-disable-next-line */}
        <img src="/image/art1.jpg" alt="art1" />
        {/* eslint-disable-next-line */}
        <img src="/image/art2.jpg" alt="art2" />
        {/* eslint-disable-next-line */}
        <img src="/image/art3.jpg" alt="art3" />
        {/* eslint-disable-next-line */}
        <img src="/image/art4.jpg" alt="art4" />
      </div>
    </div>
  );
}
