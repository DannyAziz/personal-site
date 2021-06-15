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

const A = styled.a`
  color: ${(p) => p.theme.textColor};
`;

const UnderLine = styled.span`
  text-decoration: underline;
  text-underline-offset: 5px;
`;

const UL = styled.ul`
  padding-left: 40px;
`;

const LI = styled.li`
  margin-bottom: 1em;
`;

const LiveStatWrapper = ({ loading, stat }) => {
  if (loading) {
    return <span>Loading...</span>;
  }

  return stat;
};

const Home = () => {
  const [workedOut, setWorkedOut] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  const fetchWorkedOut = async () => {
    let response = await fetch("/api/did-workout");
    let data = await response.json();
    setWorkedOut(data.didWorkout);
  };

  const fetchRecentlyPlayed = async () => {
    let response = await fetch("/api/recently-played");
    let data = await response.json();
    setRecentlyPlayed(data);
  };

  useEffect(() => {
    fetchWorkedOut();
    fetchRecentlyPlayed();
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
        <P>
          📍 I'm currently based in{" "}
          <UnderLine>London, United Kingdom 🇬🇧</UnderLine>
        </P>
        <P>
          🚀 The last project I launched was:{" "}
          <UnderLine>*PRODUCT HUNT INTEGRATION HERE?*</UnderLine>
        </P>
        <P>
          🎵 The last song I listened to was:{" "}
          <UnderLine>
            <LiveStatWrapper
              loading={recentlyPlayed === null}
              stat={
                <A href={recentlyPlayed?.track.external_urls.spotify}>
                  {recentlyPlayed?.track.name} - {recentlyPlayed?.track.artists[0].name}
                </A>
              }
            />
          </UnderLine>
        </P>

        <P>
          🐦{" "}
          <A href="https://twitter.com/dannyaziz97" target="__blank">
            Find me on Twitter
          </A>
        </P>

        <P>Live Stats:</P>
        <UL>
          <LI>
            💪 Worked out today?{" "}
            <UnderLine>{workedOut ? "Yes" : "No"}</UnderLine>
          </LI>
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
