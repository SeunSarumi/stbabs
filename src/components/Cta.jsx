// This is for the whatsapp and call button

export default function Cta() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <a href="tel:07904898380">
        <button>Call Now</button>
      </a>
      <a href="https://wa.me/447904898380" style={{ marginLeft: "1rem" }}>
        <button>WhatsApp</button>
      </a>
    </div>
  );
}
