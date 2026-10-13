// data/styles.ts
import type { OutfitRow, Swatch } from "./outfits";

export type FashionStyle = {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  rows: OutfitRow[];
  rules: string[];
};

const s = (name: string, hex: string): Swatch => ({ name, hex });

export const styles: FashionStyle[] = [
  {
    slug: "basic",
    label: "Cơ bản",
    emoji: "👕",
    description: "Công thức phối đồ dạo phố, đi chơi chuẩn phong cách.",
    rows: [
      {
        id: "white",
        pant: "Quần Trắng / Kem",
        pantColors: [s("Trắng tinh", "#FFFFFF"), s("Trắng kem", "#FDFBF7")],
        style:
          "Sơ mi Oxford, Sơ mi Linen (vải lanh), Áo Polo dệt kim phom ôm vừa.",
        tops: [
          s("Xanh Navy", "#0A192F"),
          s("Xanh Rêu", "#4A5D4E"),
          s("Xanh Nhạt", "#ADD8E6"),
          s("Màu Kem", "#FFFDD0"),
        ],
        outer: [s("Blazer Nâu", "#8B5A2B"), s("Denim Jacket", "#1E3A8A")],
        shoes: [s("Loafers Nâu", "#704214"), s("Sneakers Trắng", "#FFFFFF")],
      },
      {
        id: "black-wash",
        pant: "Quần Đen Wash",
        pantColors: [s("Xám Charcoal", "#36454F"), s("Đen Bạc", "#2B2B2B")],
        style:
          "Áo thun trơn cổ tròn, Sơ mi Poplin casual, Áo sơ mi dạ Flannel kẻ.",
        tops: [
          s("Trắng Tinh", "#FFFFFF"),
          s("Xám Tiêu", "#8A9A86"),
          s("Xanh Lục Bảo", "#046307"),
          s("Vàng Mù Tạt", "#E1AD01"),
        ],
        outer: [
          s("Overshirt Rêu", "#3B5323"),
          s("Overshirt Be", "#F5F5DC"),
          s("Khoác Da Đen", "#111111"),
        ],
        shoes: [s("Vans Cao Cổ", "#000000"), s("Chelsea Boots", "#1A1A1A")],
      },
      {
        id: "navy",
        pant: "Quần Xanh Navy",
        pantColors: [s("Classic Navy", "#0020C2"), s("Dark Denim", "#151B54")],
        style:
          "Áo sơ mi cổ cài nút, Sơ mi Chambray bụi nhẹ, Áo thun sọc ngang kẻ ngang.",
        tops: [
          s("Trắng Bột", "#FFF8DC"),
          s("Hồng Nhạt", "#FFC0CB"),
          s("Màu Kem/Be", "#F5F5DC"),
          s("Xám Nhạt", "#D3D3D3"),
        ],
        outer: [
          s("Măng Tô Lạc Đà", "#C19A6B"),
          s("Khoác Harrington", "#654321"),
        ],
        shoes: [s("Giày Tây Nâu", "#8B4513"), s("Sneakers Da", "#FFFFFF")],
      },
      {
        id: "olive",
        pant: "Quần Xanh Rêu",
        pantColors: [s("Olive Green", "#556B2F"), s("Army Khaki", "#78866B")],
        style:
          "Áo thun Henley cúc ngực, Sơ mi túi hộp (Utility), Áo nỉ (Sweatshirt).",
        tops: [
          s("Đen Tuyền", "#000000"),
          s("Trắng Kem", "#FDFBF7"),
          s("Vàng Nghệ", "#E3A018"),
          s("Xám Đậm", "#4A4F55"),
        ],
        outer: [s("Bomber Đen", "#1A1A1A"), s("Overshirt Denim", "#3B5B8C")],
        shoes: [s("Work Boots Nâu", "#5C4033"), s("Sneakers Retro", "#D9D2C0")],
      },
      {
        id: "grey",
        pant: "Quần Xám",
        pantColors: [s("Xám Than", "#4A4F55"), s("Xám Ghi", "#8E949A")],
        style: "Áo sơ mi cổ vát (Spread), Áo len cổ lọ dệt mỏng ôm sát.",
        tops: [
          s("Xanh Nhạt", "#ADD8E6"),
          s("Tím Nhạt", "#C8B6E2"),
          s("Trắng Tinh", "#FFFFFF"),
          s("Đỏ Rượu Vang", "#722F37"),
        ],
        outer: [s("Blazer Dạ Navy", "#0A192F"), s("Măng Tô Đen", "#111111")],
        shoes: [s("Oxford Đen", "#111111"), s("Derby Nâu Đậm", "#3E2723")],
      },
      {
        id: "beige",
        pant: "Quần Be / Kaki",
        pantColors: [s("Kaki", "#C3B091"), s("Be Sáng", "#E8DCC4")],
        style: "Áo sơ mi vải Chambray, Sơ mi Denim xanh, Sơ mi Linen mộc mạc.",
        tops: [
          s("Xanh Navy", "#0A192F"),
          s("Xanh Lá Đậm", "#1F4D2B"),
          s("Trắng Trơn", "#FFFFFF"),
          s("Đỏ Gạch / Cam", "#B5502F"),
        ],
        outer: [s("Field Jacket", "#4B5320"), s("Bomber Da Nâu", "#5C3A21")],
        shoes: [s("Sneakers Thấp", "#F2F2F2"), s("Chukka Da Lộn", "#9C7A54")],
      },
      {
        id: "basic-jeans",
        pant: "Quần Jeans Xanh",
        pantColors: [s("Xanh Wash Nhạt", "#6F8FB5"), s("Xanh Đậm", "#2F4A6B")],
        style: "Áo thun trơn cổ tròn, Sơ mi trắng, Áo polo, Áo sơ mi sọc.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Đen", "#111111"),
          s("Xám Nhạt", "#D3D3D3"),
          s("Đỏ Đô", "#722F37"),
        ],
        outer: [s("Khoác Bomber", "#1A1A1A"), s("Khoác Kaki Be", "#C3B091")],
        shoes: [s("Sneakers Trắng", "#FFFFFF"), s("Boots Nâu", "#5C4033")],
      },
      {
        id: "basic-short",
        pant: "Quần Short Kaki / Be",
        pantColors: [s("Kaki", "#C3B091"), s("Be Sáng", "#E8DCC4")],
        style: "Áo thun cổ tròn, Áo polo, Sơ mi ngắn tay linen.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xanh Navy", "#0A192F"),
          s("Xanh Nhạt", "#ADD8E6"),
          s("Xanh Rêu", "#4A5D4E"),
        ],
        outer: [s("Sơ mi Mặc Hở", "#6F8FB5"), s("Khoác Gió Mỏng", "#4B5320")],
        shoes: [
          s("Sneakers Trắng", "#FFFFFF"),
          s("Dép Quai Hậu Đen", "#1A1A1A"),
        ],
      },
    ],
    rules: [
      "Giữ tối đa 3 màu chính trong một set đồ (không tính giày và phụ kiện).",
      "Quần sáng đi với áo tối và ngược lại để tạo tương phản tự nhiên.",
      "Áo phom ôm vừa với quần ống đứng; áo oversize nên đi với quần gọn hơn.",
      "Màu giày và thắt lưng nên cùng tông với nhau.",
    ],
  },
  {
    slug: "minimalist",
    label: "Minimalist",
    emoji: "🤍",
    description: "Tối giản: bảng màu trung tính, form gọn, ít chi tiết.",
    rows: [
      {
        id: "min-white",
        pant: "Quần Be / Trắng Kem",
        pantColors: [s("Be", "#E8DCC4"), s("Trắng kem", "#FDFBF7")],
        style:
          "Áo thun trơn cổ tròn dày dặn, Sơ mi trắng form suông, Áo len mỏng.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xám Nhạt", "#D3D3D3"),
          s("Đen", "#111111"),
        ],
        outer: [s("Khoác Mỏng Be", "#D8C9A8"), s("Blazer Xám", "#8E949A")],
        shoes: [
          s("Sneakers Trắng Trơn", "#FFFFFF"),
          s("Loafers Đen", "#111111"),
        ],
      },
      {
        id: "min-black",
        pant: "Quần Đen / Xám Đậm",
        pantColors: [s("Đen", "#111111"), s("Xám Than", "#4A4F55")],
        style: "Áo thun đen/trắng trơn, Áo polo trơn, Áo cổ lọ mỏng.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xám Ghi", "#8E949A"),
          s("Be", "#E8DCC4"),
        ],
        outer: [s("Khoác Đen Trơn", "#1A1A1A"), s("Măng Tô Xám", "#6B7075")],
        shoes: [
          s("Sneakers Đen", "#1A1A1A"),
          s("Chelsea Boots Đen", "#111111"),
        ],
      },
      {
        id: "min-lightgrey",
        pant: "Quần Tây Xám Nhạt",
        pantColors: [s("Xám Nhạt", "#C9CCD0"), s("Xám Ghi", "#8E949A")],
        style: "Áo thun trơn dày, Sơ mi trắng cài kín, Áo len mỏng cổ tròn.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Đen", "#111111"),
          s("Xanh Navy", "#0A192F"),
        ],
        outer: [s("Blazer Đen", "#1A1A1A"), s("Khoác Mỏng Xám", "#6B7075")],
        shoes: [
          s("Sneakers Trắng Trơn", "#FFFFFF"),
          s("Loafers Đen", "#111111"),
        ],
      },
      {
        id: "min-linen-short",
        pant: "Quần Short Linen Be",
        pantColors: [s("Be Linen", "#DCCFB4"), s("Trắng Kem", "#FDFBF7")],
        style: "Áo thun trắng trơn, Sơ mi linen ngắn tay, Áo polo trơn.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xám Nhạt", "#D3D3D3"),
          s("Đen", "#111111"),
        ],
        outer: [s("Sơ mi Linen Mặc Hở", "#E8DCC4")],
        shoes: [s("Sneakers Trắng", "#FFFFFF"), s("Dép Da Be", "#B8A07A")],
      },
      {
        id: "min-denim",
        pant: "Jeans Xanh Đậm Trơn",
        pantColors: [s("Xanh Indigo", "#2F4A6B"), s("Đen Wash", "#2B2B2B")],
        style: "Áo thun trơn, Áo sơ mi Oxford trắng, Áo len cổ lọ mỏng.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Be", "#E8DCC4"),
          s("Xám Ghi", "#8E949A"),
        ],
        outer: [s("Khoác Da Đen Trơn", "#111111"), s("Măng Tô Be", "#C9B99A")],
        shoes: [
          s("Sneakers Da Trắng", "#F2F2F2"),
          s("Chelsea Boots Đen", "#111111"),
        ],
      },
    ],
    rules: [
      "Chỉ dùng 2–3 màu trung tính: trắng, đen, xám, be.",
      "Chọn chất liệu tốt thay vì họa tiết: cotton dày, len, linen.",
      "Tránh logo lớn; form áo quần suông, vừa vặn.",
    ],
  },
  {
    slug: "streetwear",
    label: "Streetwear",
    emoji: "🛹",
    description: "Đường phố: form rộng, layer, sneakers là điểm nhấn.",
    rows: [
      {
        id: "street-cargo",
        pant: "Quần Cargo Rộng",
        pantColors: [
          s("Olive", "#556B2F"),
          s("Đen", "#111111"),
          s("Be", "#C3B091"),
        ],
        style: "Áo thun oversize in hình, Hoodie, Áo sơ mi flannel mặc hở.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Đen", "#111111"),
          s("Xám Mốc", "#8E949A"),
        ],
        outer: [s("Bomber", "#1A1A1A"), s("Varsity Jacket", "#722F37")],
        shoes: [s("Sneakers Chunky", "#E8E8E8"), s("Jordan / Dunk", "#B5502F")],
      },
      {
        id: "street-jeans",
        pant: "Jeans Ống Rộng",
        pantColors: [s("Xanh Wash", "#3B5B8C"), s("Đen Wash", "#2B2B2B")],
        style: "Áo thun boxy, Áo nỉ cổ tròn, Áo tank layer ngoài áo dài tay.",
        tops: [
          s("Trắng Kem", "#FDFBF7"),
          s("Đen", "#111111"),
          s("Xanh Navy", "#0A192F"),
        ],
        outer: [
          s("Denim Jacket Rộng", "#1E3A8A"),
          s("Coach Jacket", "#3B5323"),
        ],
        shoes: [
          s("Vans Old Skool", "#111111"),
          s("Converse Cao Cổ", "#FFFFFF"),
        ],
      },
      {
        id: "street-jogger",
        pant: "Quần Jogger Nỉ",
        pantColors: [s("Xám Mốc", "#8E949A"), s("Đen", "#111111")],
        style: "Hoodie, Áo thun boxy, Áo nỉ cổ tròn, Áo crewneck in logo.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Đen", "#111111"),
          s("Xanh Navy", "#0A192F"),
        ],
        outer: [s("Bomber", "#1A1A1A"), s("Áo Khoác Gió", "#3B5B8C")],
        shoes: [
          s("Sneakers Chunky", "#E8E8E8"),
          s("Nike Air Force Trắng", "#FFFFFF"),
        ],
      },
      {
        id: "street-short",
        pant: "Quần Short Rộng",
        pantColors: [
          s("Đen", "#111111"),
          s("Xám Đậm", "#4A4F55"),
          s("Be", "#C3B091"),
        ],
        style: "Áo thun oversize, Áo tank top layer, Áo sơ mi cộc tay hoa văn.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Đen", "#111111"),
          s("Xám Mốc", "#8E949A"),
        ],
        outer: [
          s("Áo Khoác Gió Mỏng", "#4B5320"),
          s("Sơ mi Mặc Hở", "#6F8FB5"),
        ],
        shoes: [
          s("Sneakers Cao Cổ", "#111111"),
          s("Dép Quai Ngang", "#1A1A1A"),
        ],
      },
      {
        id: "street-parachute",
        pant: "Quần Parachute / Nylon",
        pantColors: [
          s("Xanh Rêu", "#4A5D4E"),
          s("Đen", "#111111"),
          s("Xám Khói", "#6B7075"),
        ],
        style: "Áo thun cropped boxy, Hoodie zip, Áo thun dài tay layer.",
        tops: [
          s("Trắng Kem", "#FDFBF7"),
          s("Đen", "#111111"),
          s("Cam Gạch", "#B5502F"),
        ],
        outer: [
          s("Áo Khoác Track Jacket", "#1F4D2B"),
          s("Puffer Mỏng", "#1A1A1A"),
        ],
        shoes: [
          s("Sneakers Retro Chạy Bộ", "#D9D2C0"),
          s("Boots Chunky Đen", "#111111"),
        ],
      },
    ],
    rules: [
      "Cân bằng tỷ lệ: trên rộng thì dưới có thể rộng, nhưng giày phải đủ to.",
      "Chọn 1 món làm điểm nhấn (giày, áo khoác hoặc áo in).",
      "Phụ kiện đơn giản: mũ lưỡi trai, túi đeo chéo, vòng cổ.",
    ],
  },
  {
    slug: "smart-casual",
    label: "Smart Casual",
    emoji: "🧥",
    description: "Lịch sự vừa phải, hợp đi làm, hẹn hò, gặp gỡ.",
    rows: [
      {
        id: "smart-chino",
        pant: "Quần Chinos Navy / Be",
        pantColors: [s("Navy", "#0A192F"), s("Be", "#C3B091")],
        style: "Sơ mi Oxford, Polo dệt kim, Áo len cổ tròn mỏng.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xanh Nhạt", "#ADD8E6"),
          s("Hồng Nhạt", "#FFC0CB"),
        ],
        outer: [s("Blazer Navy", "#0A192F"), s("Bomber Da Mỏng", "#5C3A21")],
        shoes: [s("Loafers Nâu", "#704214"), s("Derby Nâu", "#3E2723")],
      },
      {
        id: "smart-grey",
        pant: "Quần Tây Xám",
        pantColors: [s("Xám Than", "#4A4F55"), s("Xám Ghi", "#8E949A")],
        style: "Sơ mi cổ vát, Áo len cổ lọ mỏng, Áo thun trơn dưới blazer.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xanh Navy", "#0A192F"),
          s("Đỏ Rượu Vang", "#722F37"),
        ],
        outer: [s("Blazer Dạ", "#2B2B2B"), s("Măng Tô Lạc Đà", "#C19A6B")],
        shoes: [s("Oxford Đen", "#111111"), s("Chelsea Boots", "#1A1A1A")],
      },
      {
        id: "smart-jeans",
        pant: "Jeans Xanh Đậm Slim",
        pantColors: [s("Xanh Indigo", "#2F4A6B"), s("Đen Wash", "#2B2B2B")],
        style:
          "Sơ mi Oxford, Áo polo dệt kim, Áo len cổ tròn, Sơ mi trơn tay dài.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xanh Nhạt", "#ADD8E6"),
          s("Xám Nhạt", "#D3D3D3"),
        ],
        outer: [s("Blazer Xám", "#6B7075"), s("Khoác Bomber Mỏng", "#3B5323")],
        shoes: [s("Sneakers Da Trắng", "#F2F2F2"), s("Loafers Nâu", "#704214")],
      },
      {
        id: "smart-linen",
        pant: "Quần Tây Linen Be",
        pantColors: [s("Be Linen", "#DCCFB4"), s("Kem", "#F3E9D2")],
        style: "Sơ mi linen dài tay xắn gấu, Polo dệt kim, Áo thun dày trơn.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Xanh Nhạt", "#ADD8E6"),
          s("Xanh Navy", "#0A192F"),
        ],
        outer: [
          s("Blazer Linen Navy", "#1E3A8A"),
          s("Sơ mi Mặc Hở", "#FFFFFF"),
        ],
        shoes: [
          s("Loafers Nâu Nhạt", "#9C7A54"),
          s("Sneakers Trắng", "#FFFFFF"),
        ],
      },
      {
        id: "smart-olive",
        pant: "Quần Chinos Olive",
        pantColors: [s("Olive", "#556B2F"), s("Xanh Rêu Đậm", "#3B4A2A")],
        style: "Sơ mi trắng, Áo thun trơn, Polo dệt kim, Áo len mỏng.",
        tops: [
          s("Trắng Kem", "#FDFBF7"),
          s("Xanh Navy", "#0A192F"),
          s("Be", "#E8DCC4"),
        ],
        outer: [s("Blazer Nâu", "#8B5A2B"), s("Bomber Đen", "#1A1A1A")],
        shoes: [s("Derby Nâu", "#3E2723"), s("Sneakers Trắng", "#FFFFFF")],
      },
    ],
    rules: [
      "Quần và áo vừa vặn, không quá rộng hay quá ôm.",
      "Giày da hoặc sneakers da trơn; tránh giày thể thao lòe loẹt.",
      "Thắt lưng cùng tông với giày.",
    ],
  },
  {
    slug: "vintage",
    label: "Vintage",
    emoji: "📻",
    description: "Hoài cổ: màu đất, chất liệu cũ, cảm hứng thập niên 70–90.",
    rows: [
      {
        id: "vintage-brown",
        pant: "Quần Ống Loe / Ống Đứng Nâu",
        pantColors: [s("Nâu Đất", "#6B4A2F"), s("Be Đậm", "#B8A07A")],
        style:
          "Sơ mi cổ bẻ rộng, Áo polo dệt kim sọc, Áo len cổ tròn họa tiết.",
        tops: [
          s("Kem", "#F3E9D2"),
          s("Vàng Mù Tạt", "#E1AD01"),
          s("Cam Gạch", "#B5502F"),
        ],
        outer: [s("Khoác Da Nâu", "#5C3A21"), s("Khoác Corduroy", "#8B5A2B")],
        shoes: [s("Boots Nâu", "#5C4033"), s("Sneakers Retro", "#D9D2C0")],
      },
      {
        id: "vintage-denim",
        pant: "Jeans Xanh Wash Cổ Điển",
        pantColors: [s("Xanh Wash Nhạt", "#6F8FB5"), s("Xanh Đậm", "#2F4A6B")],
        style: "Áo thun trơn trắng, Áo sơ mi caro, Áo phông ringer.",
        tops: [
          s("Trắng Ngà", "#FDFBF7"),
          s("Đỏ Rượu", "#722F37"),
          s("Xanh Rêu", "#4A5D4E"),
        ],
        outer: [s("Denim Jacket", "#3B5B8C"), s("Varsity Jacket", "#1F4D2B")],
        shoes: [s("Converse Thấp", "#F2F2F2"), s("Loafers Nâu", "#704214")],
      },
      {
        id: "vintage-cord",
        pant: "Quần Corduroy",
        pantColors: [s("Nâu Socola", "#4A3322"), s("Xanh Rêu Đậm", "#3B4A2A")],
        style: "Sơ mi cổ bẻ họa tiết nhỏ, Áo len cổ polo, Áo thun ringer.",
        tops: [
          s("Kem", "#F3E9D2"),
          s("Cam Gạch", "#B5502F"),
          s("Vàng Mù Tạt", "#E1AD01"),
        ],
        outer: [s("Khoác Da Nâu", "#5C3A21"), s("Cardigan Len", "#8B5A2B")],
        shoes: [s("Boots Nâu", "#5C4033"), s("Loafers Nâu Đậm", "#3E2723")],
      },
      {
        id: "vintage-khaki",
        pant: "Quần Kaki Ống Rộng",
        pantColors: [s("Be Đậm", "#B8A07A"), s("Kem", "#E8DCC4")],
        style: "Áo thun trắng, Sơ mi sọc dọc, Áo polo sọc ngang.",
        tops: [
          s("Trắng Ngà", "#FDFBF7"),
          s("Xanh Navy", "#0A192F"),
          s("Đỏ Rượu", "#722F37"),
        ],
        outer: [
          s("Khoác Harrington", "#654321"),
          s("Blazer Nâu Xám", "#7A6A58"),
        ],
        shoes: [s("Sneakers Retro", "#D9D2C0"), s("Derby Nâu", "#704214")],
      },
      {
        id: "vintage-flare",
        pant: "Jeans Đen Ống Loe",
        pantColors: [s("Đen Wash", "#2B2B2B"), s("Xám Than", "#4A4F55")],
        style: "Sơ mi cổ rộng thập niên 70, Áo thun ôm, Áo len cổ lọ.",
        tops: [
          s("Kem", "#F3E9D2"),
          s("Nâu Caramel", "#A9733A"),
          s("Xanh Lục Bảo", "#046307"),
        ],
        outer: [s("Khoác Da Đen", "#111111"), s("Khoác Suede Nâu", "#8B5A2B")],
        shoes: [
          s("Chelsea Boots Nâu", "#5C4033"),
          s("Boots Cổ Thấp Đen", "#1A1A1A"),
        ],
      },
    ],
    rules: [
      "Ưu tiên tông màu ấm, hơi ngả vàng như nâu, be, cam gạch, mù tạt.",
      "Chất liệu có độ dày và texture: corduroy, denim, len, da.",
      "Chỉ cần 1–2 món hoài cổ là đủ, tránh mặc toàn bộ để không bị cosplay.",
    ],
  },
  {
    slug: "workwear",
    label: "Workwear",
    emoji: "🛠️",
    description: "Công nhân hiện đại: bền, nhiều túi, màu đất, phong cách mộc.",
    rows: [
      {
        id: "work-carpenter",
        pant: "Quần Carpenter / Dungaree",
        pantColors: [s("Nâu Canvas", "#8B6B4A"), s("Xanh Chàm", "#2F4A6B")],
        style: "Áo thun dày cổ tròn, Sơ mi chambray, Áo henley dày.",
        tops: [
          s("Trắng Kem", "#FDFBF7"),
          s("Xám Mốc", "#8E949A"),
          s("Xanh Chambray", "#6F8FB5"),
        ],
        outer: [s("Chore Coat", "#4B5320"), s("Khoác Canvas Nâu", "#7A5A3A")],
        shoes: [s("Work Boots", "#5C4033"), s("Sneakers Da Nâu", "#9C7A54")],
      },
      {
        id: "work-olive",
        pant: "Quần Cargo Olive",
        pantColors: [s("Olive", "#556B2F"), s("Đen Bạc", "#2B2B2B")],
        style: "Sơ mi túi hộp, Áo thun in nhẹ, Áo nỉ dày.",
        tops: [
          s("Be", "#E8DCC4"),
          s("Đen", "#111111"),
          s("Vàng Nghệ", "#E3A018"),
        ],
        outer: [s("Field Jacket", "#4B5320"), s("Overshirt Denim", "#3B5B8C")],
        shoes: [s("Boots Da Lộn", "#9C7A54"), s("Sneakers Đen", "#1A1A1A")],
      },
      {
        id: "work-selvedge",
        pant: "Jeans Selvedge Chàm",
        pantColors: [s("Xanh Chàm", "#1F2F4D"), s("Xanh Wash Đậm", "#2F4A6B")],
        style: "Áo thun dày, Sơ mi flannel, Sơ mi chambray, Henley dày.",
        tops: [
          s("Trắng Kem", "#FDFBF7"),
          s("Đỏ Gạch", "#B5502F"),
          s("Xám Mốc", "#8E949A"),
        ],
        outer: [s("Chore Coat Nâu", "#7A5A3A"), s("Khoác Denim", "#3B5B8C")],
        shoes: [s("Work Boots", "#5C4033"), s("Chukka Da Lộn", "#9C7A54")],
      },
      {
        id: "work-canvas",
        pant: "Quần Kaki Canvas Be",
        pantColors: [s("Be Canvas", "#C3B091"), s("Nâu Nhạt", "#A9895E")],
        style: "Sơ mi túi hộp, Áo thun dày, Áo nỉ cổ tròn.",
        tops: [
          s("Trắng Kem", "#FDFBF7"),
          s("Xanh Navy", "#0A192F"),
          s("Xanh Rêu", "#4A5D4E"),
        ],
        outer: [
          s("Khoác Canvas Olive", "#4B5320"),
          s("Vest Làm Việc", "#6B4A2F"),
        ],
        shoes: [s("Boots Da Nâu", "#5C4033"), s("Sneakers Da", "#9C7A54")],
      },
      {
        id: "work-overalls",
        pant: "Quần Yếm Denim",
        pantColors: [s("Xanh Chàm", "#2F4A6B"), s("Xanh Nhạt", "#6F8FB5")],
        style: "Áo thun trắng, Áo thun sọc, Sơ mi cộc tay mặc trong.",
        tops: [
          s("Trắng", "#FFFFFF"),
          s("Sọc Navy/Kem", "#8E949A"),
          s("Vàng Nghệ", "#E3A018"),
        ],
        outer: [s("Sơ mi Flannel Mặc Hở", "#722F37")],
        shoes: [s("Work Boots", "#5C4033"), s("Sneakers Trắng", "#FFFFFF")],
      },
    ],
    rules: [
      "Chọn màu đất: nâu, olive, xanh chàm, be, đen.",
      "Chất liệu ưu tiên canvas, denim dày, twill, đường may chắc.",
      "Giày boots hoặc sneakers da để giữ vẻ mộc mạc.",
    ],
  },
];

export const getStyle = (slug: string) => styles.find((x) => x.slug === slug);
