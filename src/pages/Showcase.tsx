import Card from "../components/Card";
import Carousel from "../components/Carousel";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <article id="showcase" className="page">
      <h1>Personal Showcase</h1>
      <Carousel>
        <Card
          href="https://lightcycle.netlify.app/"
          image="/showcase/light-cycle-ultimate.png"
          title="Light Cycle Ultimate"
          text="Light Cycle Ultimate is a full freedom racing game. While  surviving the obstacles and other light cycles in the arena, also try to get your enemies trapped by your light ray trail. The powerups that are scattered around the arena will give you the extra boost of power you need, and together with your racing skills you will become the Ultimate Light Cycle Champion!"
        />
        <Card
          href="https://bloodwych.netlify.app/"
          image="/showcase/bloodwych.png"
          title="Bloodwych"
          text="An ominous presence has enveloped the small village of Treihadwyl and draped it in a shroud of paralyzing terror. As shadows grow larger the population grows smaller. Zendick the evil overlord and his undead army are feeding on the inhabitants. Now all that stands between the carnage and the land of Trazere is the Bloodwych, a secret alliance of psychic sorcerers. Divided, they would crumble under the overlord's power. But together there is at least a glimmer of hope of defeating the scourge that's devouring the countryside."
        />
        <Card
          href="https://texture-tinker-tool.netlify.app/"
          image="/showcase/texture.png"
          title="Texture Tinker Tool"
          text="Live texture editing tool for ThreeJS and React Three Fiber"
        />
      </Carousel>
    </article>
  );
};

export default Showcase;
