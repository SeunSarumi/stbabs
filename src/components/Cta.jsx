// This is for the whatsapp and call button

export default function Cta() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <a href="tel:07123456789">
        <button>Call Now</button>
      </a>
      <a href="https://wa.me/447123456789" style={{ marginLeft: "1rem" }}>
        <button>WhatsApp</button>
      </a>
    </div>
  );
}
