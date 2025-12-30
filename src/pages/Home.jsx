import Cta from "../components/Cta";
import Section from "../components/Section";

function Home() {
  return (
    <>
      <Section>
        <h1>STBABS Private Hire Taxi Service</h1>
        <p>Serving Northampton & surrounding areas</p>

        <ul>
          <li>Licensed & insured</li>
          <li>24/7 pre-booked journeys</li>
          <li>Fixed prices, no surge</li>
          <li>Clean & comfortable vehicle</li>
        </ul>

        <Cta />
      </Section>
    </>
  );
}

export default Home;
