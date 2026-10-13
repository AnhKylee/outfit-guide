import OutfitTable from "@/components/OutfitTable";
import { rules } from "@/data/outfits";

export default function Home() {
  return (
    <main className="container">
      <h1>🎨 Bảng Phối Màu & Kiểu Dáng Trang Phục Nam</h1>
      <p className="subtitle">
        Công thức phối đồ dạo phố, đi chơi chuẩn phong cách và tỷ lệ hình khối
      </p>
      <OutfitTable />
      <section className="rules-section">
        <h3>📐 Nguyên tắc chung</h3>
        <ul>
          {rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
