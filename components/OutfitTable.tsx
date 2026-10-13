import { outfits } from "@/data/outfits";
import ColorBadges from "./ColorBadges";

const headers = [
  "Loại Quần & Màu Sắc",
  "Kiểu Áo Phù Hợp",
  "Màu Áo Gợi Ý",
  "Áo Khoác / Lớp Ngoài",
  "Giày Đi Kèm",
];

export default function OutfitTable() {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {outfits.map((r) => (
            <tr key={r.id}>
              <td>
                <strong>{r.pant}</strong>
                <div className="badges">
                  <ColorBadges colors={r.pantColors} />
                </div>
              </td>
              <td>{r.style}</td>
              <td><ColorBadges colors={r.tops} /></td>
              <td><ColorBadges colors={r.outer} /></td>
              <td><ColorBadges colors={r.shoes} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
