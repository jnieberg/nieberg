import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card";
import "swiper/css";
import "./Career.scss";

const Career = () => {
  return (
    <article id="career" className="page">
      <h1>Career Highlights</h1>
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <Card
            image="/career/eikelenboom.jpg"
            title="Eikelenboom B.V."
            heading="Invoice handling at the sales department"
            subheading="February 2002 - November 2002"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/career/eperium.jpg"
            title="Eperium Business Solution"
            heading="Frontend Developer / Usability Specialist."
            subheading="November 2002 - December 2016"
            text="Responsible for building user-friendly, front-end webshops with an eCommerce product called Intershop."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/career/wunderman.png"
            title="Wunderman Thompson Commerce"
            heading="Medior Frontend Developer"
            subheading="March 2019 - May 2020"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/career/kabisa.png"
            title="Kabisa Software Artisans"
            heading="Medior Frontend Developer / Consultant"
            subheading="May 2020 - present"
            text="As a Front-end Developer I am part of a multidisciplinary SCRUM team that iteratively delivers software to the customers. Examples of projects you will be working on vary from mobile to desktop applications, from community websites and webshops to reservation systems and chat applications. Together with the team I was responsible for designing, realising, delivering and maintaining working software. I contribute to the continuous improvement of the development process and the organisation. I consciously apply the co-creation process and am prepared to apply new techniques. I can fulfil different roles, like technical designer, developer and consultant."
          />
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default Career;
