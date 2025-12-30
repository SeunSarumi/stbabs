import Cta from "../components/Cta";
import Section from "../components/Section";

export default function Booking() {
  return (
    <Section title="Booking & Contact">
      <p>All journeys must be pre-booked in advance.</p>

      <ul>
        <li>Phone: 07904898380</li>
        <li>Email: stbabslimited@gmail.com</li>
        <li>Operating hours: 24/7 (pre-booked)</li>
      </ul>

      <Cta />
    </Section>
  );
}
