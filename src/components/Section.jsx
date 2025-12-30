export default function Section({ title, children }) {
  return (
    <section
      style={{ maxWidth: "900px", margin: "3rem auto", padding: "0 1rem" }}
    >
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </section>
  );
}
