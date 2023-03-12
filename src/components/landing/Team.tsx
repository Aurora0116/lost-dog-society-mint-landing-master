export default function Team() {
  return (
    <div className="team" id="team">
      <div className="team-banner">
        <div>
          {/* eslint-disable-next-line */}
          <img src="/image/banner-logo.png" alt="team" />
        </div>
        <h1 className="team-name">the dawg team</h1>
      </div>
      <div className="container">
        <div className="team-member">
          {DAWGTEAM.map((item, key) => (
            <div className="member-card" key={key}>
              <div className="card-back">
                {/* eslint-disable-next-line */}
                <img src={item.image} alt="" />
              </div>
              <div className="member-name">
                <div className="name">{item.name}</div>
                {/* <div className="name-effect"></div> */}
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DAWGTEAM = [
  {
    name: "The Dogfather",
    image: "/image/team.png",
    role: "FOUNDER",
  },
  {
    name: "The Dogfather",
    image: "/image/team.png",
    role: "FOUNDER",
  },
  {
    name: "The Dogfather",
    image: "/image/team.png",
    role: "FOUNDER",
  },
  {
    name: "The Dogfather",
    image: "/image/team.png",
    role: "FOUNDER",
  },
  {
    name: "The Dogfather",
    image: "/image/team.png",
    role: "FOUNDER",
  },
  {
    name: "The Dogfather",
    image: "/image/team.png",
    role: "FOUNDER",
  },
];
