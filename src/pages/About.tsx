import Fa from "../components/Fa";
import "./About.scss";

const About = () => (
  <div id="about" className="page">
    <article>
      <h1>About me</h1>
      <div className="info">
        <div>
          <Fa icon="globe" /> Weesp, The Netherlands
        </div>
        <div>
          <Fa icon="flag" /> Dutch
        </div>
      </div>
      <p>
        <img src="/me/jorg.png" alt="Jorg Nieberg" />
        <strong>Let me introduce myself,</strong> my name is{" "}
        <a href="https://www.linkedin.com/in/jorg-nieberg-216ba621/" aria-details="Go to the LinkedIn page of Jorg Nieberg" target="_new">
          Jorg Nieberg
        </a>
        . 46 years old. I have lived in Weesp for the same amount of years, and I am currently married and living together with my beautiful wife
        Lisette. I have two beautiful daughters called Elvy and Leia (resp. 5 and 2 years old). I like playing computer games, but occasionally also
        like to create them as one of my favourite hobbies. Pasta, pizza and sushi are things you can always invite me for, even in the middle of the
        night.
      </p>
      <p>
        In my more than 19 years of IT experience, my main drive is providing and sharing my expertise in clean and understandable code. Staying ahead
        of the competition in both knowledge and innovation is important to me. And to achieve that, I like to dive into the latest news about code
        languages, coding, tools and frameworks, to become more and more the front-end developer than I currently am. If you think your code can use a
        lot of spring cleaning, I would like to put my hands on it and be sure the code is lean, slick and transparent. And if terms like usability,
        accessibility, style guides, design systems, chatbots and split testing scare you, I am happy to help you out and tell you more about it!
      </p>
    </article>
  </div>
);

export default About;
