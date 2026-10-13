import { notFound } from "next/navigation";
import OutfitTable from "@/components/OutfitTable";
import { getStyle, styles } from "@/data/styles";

export function generateStaticParams() {
  return styles.map((st) => ({ slug: st.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const st = getStyle(params.slug);
  return { title: st ? `${st.label} | Men's Style` : "Not found" };
}

export default function StylePage({ params }: { params: { slug: string } }) {
  const st = getStyle(params.slug);
  if (!st) notFound();

  return (
    <main className="container">
      <h1>
        {st.emoji} {st.label}
      </h1>
      <p className="subtitle">{st.description}</p>
      <OutfitTable rows={st.rows} />
      <section className="rules-section">
        <h3>📐 Nguyên tắc chung</h3>
        <ul>
          {st.rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
