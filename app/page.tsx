import Link from "next/link";
import { styles } from "@/data/styles";

export default function Home() {
  return (
    <main className="container">
      <h1>👔 Men&apos;s Style Guide</h1>
      <p className="subtitle">Chọn một phong cách để xem gợi ý phối đồ</p>
      <div className="card-grid">
        {styles.map((st) => (
          <Link key={st.slug} href={`/style/${st.slug}`} className="style-card">
            <span className="emoji">{st.emoji}</span>
            <strong>{st.label}</strong>
            <p>{st.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
