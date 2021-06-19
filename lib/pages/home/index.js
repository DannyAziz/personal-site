import styled from "styled-components";

import { useEffect, useState } from "react";

import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Loader from "@/components/loader";
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

const LiveStatWrapper = ({ loading, loadingElem, stat }) => {
  if (loading) {
    return loadingElem;
  }

  return stat;
};

const Home = ({ theme }) => {
  const [workedOut, setWorkedOut] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);
  const [steps, setSteps] = useState(null);
  const [hr, setHR] = useState(null);
  const [commitCode, setCommitCode] = useState(null);

  const fetchWorkedOut = async () => {
    let response = await fetch("/api/did-workout");
    let data = await response.json();
    setWorkedOut(data.didWorkout);
  };

  const fetchRecentlyPlayed = async () => {
    let response = await fetch("/api/recently-played");
    let data = await response.json();
    if (!data.error) {
      setRecentlyPlayed(data);
    }
  };

  const fetchSteps = async () => {
    let response = await fetch("/api/steps-today");
    let data = await response.json();
    if (!data.error) {
      setSteps(data.steps);
    }
  };

  const fetchHR = async () => {
    let response = await fetch("/api/heart-rate");
    let data = await response.json();
    if (!data.error) {
      setHR(data.hr);
    }
  };

  const fetchCodeCommit = async () => {
    let response = await fetch("/api/code-commit");
    let data = await response.json();
    if (!data.error) {
      setCommitCode(data.codeToday);
    }
  };

  useEffect(() => {
    fetchWorkedOut();
    fetchRecentlyPlayed();
    fetchSteps();
    fetchHR();
    fetchCodeCommit();
  }, []);

  const LoadingElem = () => <Loader theme={theme} />;

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
              loadingElem={<LoadingElem />}
              stat={
                <A
                  href={recentlyPlayed?.track.external_urls.spotify}
                  target="__blank"
                >
                  {recentlyPlayed?.track.name} -{" "}
                  {recentlyPlayed?.track.artists[0].name}
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
            <UnderLine>
              <LiveStatWrapper
                loading={workedOut === null}
                loadingElem={<LoadingElem />}
                stat={workedOut ? "Yes" : "No"}
              />
            </UnderLine>
          </LI>
          <LI>
            🚶‍♂️ How many steps today?{" "}
            <UnderLine>
              <LiveStatWrapper
                loading={steps === null}
                loadingElem={<LoadingElem />}
                stat={steps?.toLocaleString()}
              />
            </UnderLine>
          </LI>
          <LI>
            &#10084;&#65039; Resting Heart Rate?{" "}
            <UnderLine>
              <LiveStatWrapper
                loading={hr === null}
                loadingElem={<LoadingElem />}
                stat={hr}
              />
            </UnderLine>
          </LI>
          <LI>
            👨‍💻 Commit code today?{" "}
            <UnderLine>
              <LiveStatWrapper
                loading={commitCode === null}
                loadingElem={<LoadingElem />}
                stat={
                  <A href="https://github.com/dannyaziz" target="__blank">
                    {commitCode ? "Yes" : "No"}
                  </A>
                }
              />
            </UnderLine>
          </LI>
        </UL>
      </AboutSection>

      {/* <ItemList title={"Recent Things"} items={[]} /> */}
    </Layout>
  );
};
export default Home;
