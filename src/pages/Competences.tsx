import "./Competences.scss";
import Rating from "../components/Rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Competences = () => {
  return (
    <article id="competences" className="page">
      <h1>Competences</h1>
      <Tabs>
        <TabList role="tablist">
          <Tab>Primary Skills</Tab>
          <Tab>Secondary Skills</Tab>
          <Tab>Tertiary Skills</Tab>
          <Tab>Apps & Tools</Tab>
          <Tab>Other Skills</Tab>
        </TabList>

        <TabPanel>
          <Rating name="HTML5" value={5} />
          <Rating name="JavaScript" value={5} />
          <Rating name="CSS3" value={5} />
          <Rating name="SASS / SCSS" value={5} />
          <Rating name="Tailwind CSS" value={5} />
          <Rating name="TypeScript" value={4} />
          <Rating name="React" value={4} />
          <Rating name="Angular" value={3} />
          <Rating name="NodeJS" value={3} />
          <Rating name="Vue" value={2} />
          <Rating name="Java" value={2} />
        </TabPanel>

        <TabPanel>
          <Rating name="RegExp" value={5} />
          <Rating name="jQuery" value={5} />
          <Rating name="Github" value={4} />
          <Rating name="Express" value={4} />
          <Rating name="Storybook" value={4} />
          <Rating name="React Testing Library" value={3} />
          <Rating name="RxJS" value={3} />
          <Rating name="React Redux" value={2} />
        </TabPanel>

        <TabPanel>
          <Rating name="ThreeJS / R3F" value={5} />
          <Rating name="Visual Studio Code" value={5} />
          <Rating name="Dialogflow" value={4} />
          <Rating name="WebGL" value={3} />
        </TabPanel>

        <TabPanel className="pairs">
          <div>Intershop 7+</div>
          <div>InVision</div>
          <div>Storybook</div>
          <div>Jira</div>
          <div>Abstract</div>
          <div>Frontify</div>
          <div>Confluence</div>
          <div>Dialogflow</div>
          <div>Patternlab</div>
          <div>Trello</div>
          <div>Visual Studio Code</div>
          <div>Optimizely Web</div>
          <div>Optimizely Full Stack</div>
          <div>Github</div>
          <div>Slack</div>
          <div>Zoom</div>
          <div>Algolia</div>
          <div>Google Analytics</div>
          <div>Dynamic Yield</div>
        </TabPanel>

        <TabPanel className="pairs">
          <div>Scrum / Agile</div>
          <div>Responsive</div>
          <div>CX / UX</div>
          <div>Voice Assistance & Chatbots</div>
          <div>REST API</div>
          <div>JSON</div>
          <div>Accessibility</div>
          <div>Unit Tests</div>
          <div>Storytelling</div>
          <div>Pair programming</div>
          <div>Workshop / Hackathon</div>
        </TabPanel>
      </Tabs>
    </article>
  );
};

export default Competences;
