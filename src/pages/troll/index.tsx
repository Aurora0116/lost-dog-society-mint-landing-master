import { useRouter } from "next/router";

export default function Troll() {
  const router = useRouter();
  return (
    <div className="troll">
      {/* eslint-disable-next-line */}
      <img src="/image/troll.jpg" alt="back" className="troll-background" />
      <div className="container">
        <button onClick={() => router.push("/")}>return to your steps</button>
      </div>
    </div>
  );
}
