import styled from "styled-components";

import { useEffect } from "react";

import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ItemList from "@/components/itemList";

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
  return (
    <Layout>
      <Hero text={"I Make Things"} />
      <AboutSection>
        <P>
          Hi 👋, I'm Danny an indie-hacker, full-stack developer and amateur
          photographer
        </P>
        <P>I love to make things</P>
        <P>🇬🇧 I'm currently based in *LOCATION*</P>
        <P>
          🚀 The last project I launched was: *PRODUCT HUNT INTEGRATION HERE?*
        </P>
        <P>🎵 The last song I listened to was: *SPOTIFY TING HERE*</P>

        <P>Let's talk on Twitter, or send me an email 😃</P>

        <P>Live Stats:</P>
        <UL>
          <LI>💪 Worked out today?</LI>
          <LI>🚶‍♂️ Steps today</LI>
          <LI>&#10084;&#65039; Resting Heart Rate?</LI>
          <LI>👨‍💻 Commit Code Today? </LI>
        </UL>
      </AboutSection>

      <ItemList title={"Recent Things"} items={[]} />
    </Layout>
  );
};
export default Home;
