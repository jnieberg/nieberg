import "./Career.scss";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Career = () => {
  return (
    <article id="career" className="page">
      <h1>Career Highlights</h1>
      <Carousel>
        <Card
          image="/career/eikelenboom.jpg"
          title="Eikelenboom B.V."
          heading="Invoice handling at the sales department"
          subheading="February 2002 - November 2002"
        />
        <Card
          image="/career/eperium.jpg"
          title="Eperium Business Solution"
          heading="Frontend Developer / Usability Specialist."
          subheading="November 2002 - December 2016"
          text="Responsible for building user-friendly, front-end webshops with an eCommerce product called Intershop."
        />
        <Card
          image="/career/wunderman.png"
          title="Wunderman Thompson Commerce"
          heading="Medior Frontend Developer"
          subheading="March 2019 - May 2020"
        />
        <Card
          image="/career/kabisa.png"
          title="Kabisa Software Artisans"
          heading="Medior Frontend Developer / Consultant"
          subheading="May 2020 - present"
          text="As a Front-end Developer I am part of a multidisciplinary SCRUM team that iteratively delivers software to the customers. Examples of projects you will be working on vary from mobile to desktop applications, from community websites and webshops to reservation systems and chat applications. Together with the team I was responsible for designing, realising, delivering and maintaining working software. I contribute to the continuous improvement of the development process and the organisation."
        />
      </Carousel>
    </article>
  );
};

export default Career;
