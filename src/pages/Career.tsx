import Card from "../components/Card";
import "./Career.scss";

const Career = () => {
  return (
    <div id="career" className="page">
      <article>
        <h1>Career Highlights</h1>
        <div role="tablist">
          <button id="tab-1" role="tab" aria-controls="tabpanel-1" autoFocus></button>
          <button id="tab-2" role="tab" aria-controls="tabpanel-2"></button>
          <button id="tab-3" role="tab" aria-controls="tabpanel-3"></button>
          <button id="tab-4" role="tab" aria-controls="tabpanel-4"></button>
          <button id="tab-5" role="tab" aria-controls="tabpanel-5"></button>

          <div id="tabpanel-1" className="tabpanel" role="tabpanel" aria-labelledby="tab-1">
            <Card
              title="Eikelenboom B.V."
              heading="February 2002 - November 2002"
              image="/career/eikelenboom.jpg"
              text="Invoice handling at the sales department"
            />
          </div>
          <div id="tabpanel-2" className="tabpanel" role="tabpanel" aria-labelledby="tab-2">
            <Card
              title="Eperium Business Solution"
              heading="November 2002 - December 2016"
              image="/career/eperium.jpg"
              text="Frontend Developer / Usability Specialist"
            />
          </div>
          <div id="tabpanel-3" className="tabpanel" role="tabpanel" aria-labelledby="tab-3">
            <Card title="Salmon Netherlands" heading="December 2016 - March 2019" image="/career/salmon.jpg" text="Medior Frontend Developer" />
          </div>
          <div id="tabpanel-4" className="tabpanel" role="tabpanel" aria-labelledby="tab-4">
            <Card
              title="Wunderman Thompson Commerce"
              heading="March 2019 - May 2020"
              image="/career/wunderman.png"
              text="Medior Frontend Developer"
            />
          </div>
          <div id="tabpanel-5" className="tabpanel" role="tabpanel" aria-labelledby="tab-5">
            <Card
              title="Kabisa Software Artisans"
              heading="May 2020 - present"
              image="/career/kabisa.png"
              text="Medior Frontend Developer / Consultant"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Career;
