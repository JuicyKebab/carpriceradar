import SeedForm from "./SeedForm";

export const metadata = {
  title: "Seed prices",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: 16 }}>
        <div className="wrap">
          <h1>Seed prices</h1>
          <p className="lead">
            Owner only. Enter today&apos;s lowest rate per car type from the live
            Discover Cars results. Leave a field blank to skip it.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SeedForm />
        </div>
      </section>
    </main>
  );
}
