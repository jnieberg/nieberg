import Fa from "../components/Fa";
import Svg from "../components/Svg";
import "./About.scss";

const About = () => (
  <article id="about" className="page">
    <h1>Jorg Nieberg</h1>
    <div className="info">
      <Fa icon="earth" />
      <span>Weesp, NL</span>
      <Fa icon="flag" />
      <span>Dutch</span>
      <Fa icon="birthday-cake" />
      <span>10 November 1976</span>
      <Fa icon="envelope" />
      <a href="mailto:jnieberg@gmail.com">jnieberg@gmail.com</a>
      <Fa icon="phone" />
      <span>+31 6 102 12 779</span>
      <Svg icon="linkedin" />
      <a href="https://www.linkedin.com/in/jorg-nieberg-216ba621/" target="_new">
        linkedin.com
      </a>
    </div>
    <p>
      <span className="image" />
      <strong>Let me introduce myself,</strong> my name is{" "}
      <a href="https://www.linkedin.com/in/jorg-nieberg-216ba621/" aria-details="Go to the LinkedIn page of Jorg Nieberg" target="_new">
        Jorg Nieberg
      </a>{" "}
      and I am 46 years old. I have lived in Weesp for the same amount of years, and I am currently married and living together with my lovely wife
      Lisette. I have two beautiful daughters called Elvy and Leia (resp. 5 and 2 years old). I like playing computer games, but occasionally also
      like to create them as one of my favourite hobbies. Pasta, pizza and sushi are things you can always invite me for, even in the middle of the
      night.
    </p>
    <p>
      <strong>In my more than 19 years of IT experience</strong>, my main drive is providing and sharing my expertise in clean and understandable
      code. Staying ahead of the competition in both knowledge and innovation is important to me. And to achieve that, I like to dive into the latest
      news about code languages, coding, tools and frameworks, to become more and more the front-end developer than I currently am. If you think your
      code can use a lot of spring cleaning, I would like to put my hands on it and be sure the code is lean, slick and transparent. And if terms like
      usability, accessibility, style guides, design systems, chatbots and split testing scare you, I am happy to help you out and tell you more about
      it!
    </p>
  </article>
);

export default About;
