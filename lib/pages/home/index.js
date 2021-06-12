import styled from "styled-components";

import { useEffect, useState } from "react";

import Layout from "@/components/layout";
import Hero from "@/components/hero";
// import ItemList from "@/components/itemList";

const AboutSection = styled.div`
  padding: 15px;
`;

const P = styled.p`
  margin: 1em 0;
`;

const UL = styled.ul`
  padding-left: 40px;
`;

const LI = styled.li`
  margin-bottom: 1em;
`;

const Home = () => {
  const [workedOut, setWorkedOut] = useState(null);

  const fetchWorkedOut = async () => {
    let response = await fetch("/api/did-workout");
    let data = await response.json();
    setWorkedOut(data.didWorkout);
  };

  useEffect(() => {
    fetchWorkedOut();
  }, []);

  // TODO: Loaders
  // TODO: Live Stats styling

  return (
    <Layout>
      <Hero text={"I Make Things"} />
      <AboutSection>
        <P>
          👋 Hi, I'm Danny an indie-hacker, full-stack developer and amateur
          photographer
        </P>
        <P>I love to make things</P>
        <P>🇬🇧 I'm currently based in *LOCATION*</P>
        <P>
          🚀 The last project I launched was: *PRODUCT HUNT INTEGRATION HERE?*
        </P>
        <P>🎵 The last song I listened to was: *SPOTIFY TING HERE*</P>

        <P>🐦 Find me on Twitter</P>

        <P>Live Stats:</P>
        <UL>
          <LI>💪 Worked out today? {workedOut ? "Yes" : "No"}</LI>
          <LI>🚶‍♂️ How many steps today? </LI>
          <LI>&#10084;&#65039; Resting Heart Rate?</LI>
          <LI>👨‍💻 Commit code today? </LI>
        </UL>
      </AboutSection>

      {/* <ItemList title={"Recent Things"} items={[]} /> */}
    </Layout>
  );
};
export default Home;
