import { useEffect } from "react";
import Background from "../components/background";
import Section from "../components/section";

function HomePage() {
  return (
    <div>
      <div id="container">
        <Section />
        <Section />
        <Section />
      </div>
      <Background />
    </div>
  );
}

export default HomePage;
