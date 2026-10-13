export type Swatch = { name: string; hex: string };

export type OutfitRow = {
  id: string;
  pant: string;
  pantColors: Swatch[];
  style: string;
  tops: Swatch[];
  outer: Swatch[];
  shoes: Swatch[];
};

const s = (name: string, hex: string): Swatch => ({ name, hex });

export const outfits: OutfitRow[] = [
  {
    id: "white",
    pant: "Quần Trắng / Kem",
    pantColors: [s("Trắng tinh", "#FFFFFF"), s("Trắng kem", "#FDFBF7")],
    style: "Sơ mi Oxford, Sơ mi Linen (vải lanh), Áo Polo dệt kim phom ôm vừa.",
    tops: [s("Xanh Navy", "#0A192F"), s("Xanh Rêu", "#4A5D4E"), s("Xanh Nhạt", "#ADD8E6"), s("Màu Kem", "#FFFDD0")],
    outer: [s("Blazer Nâu", "#8B5A2B"), s("Denim Jacket", "#1E3A8A")],
    shoes: [s("Loafers Nâu", "#704214"), s("Sneakers Trắng", "#FFFFFF")],
  },
  {
    id: "black-wash",
    pant: "Quần Đen Wash",
    pantColors: [s("Xám Charcoal", "#36454F"), s("Đen Bạc", "#2B2B2B")],
    style: "Áo thun trơn cổ tròn, Sơ mi Poplin casual, Áo sơ mi dạ Flannel kẻ.",
    tops: [s("Trắng Tinh", "#FFFFFF"), s("Xám Tiêu", "#8A9A86"), s("Xanh Lục Bảo", "#046307"), s("Vàng Mù Tạt", "#E1AD01")],
    outer: [s("Overshirt Rêu", "#3B5323"), s("Overshirt Be", "#F5F5DC"), s("Khoác Da Đen", "#111111")],
    shoes: [s("Vans Cao Cổ", "#000000"), s("Chelsea Boots", "#1A1A1A")],
  },
  {
    id: "navy",
    pant: "Quần Xanh Navy",
    pantColors: [s("Classic Navy", "#0020C2"), s("Dark Denim", "#151B54")],
    style: "Áo sơ mi cổ cài nút, Sơ mi Chambray bụi nhẹ, Áo thun sọc ngang kẻ ngang.",
    tops: [s("Trắng Bột", "#FFF8DC"), s("Hồng Nhạt", "#FFC0CB"), s("Màu Kem/Be", "#F5F5DC"), s("Xám Nhạt", "#D3D3D3")],
    outer: [s("Măng Tô Lạc Đà", "#C19A6B"), s("Khoác Harrington", "#654321")],
    shoes: [s("Giày Tây Nâu", "#8B4513"), s("Sneakers Da", "#FFFFFF")],
  },
  {
    id: "olive",
    pant: "Quần Xanh Rêu",
    pantColors: [s("Olive Green", "#556B2F"), s("Army Khaki", "#78866B")],
    style: "Áo thun Henley cúc ngực, Sơ mi túi hộp (Utility), Áo nỉ (Sweatshirt).",
    tops: [s("Đen Tuyền", "#000000"), s("Trắng Kem", "#FDFBF7"), s("Vàng Nghệ", "#E3A018"), s("Xám Đậm", "#4A4F55")],
    outer: [s("Bomber Đen", "#1A1A1A"), s("Overshirt Denim", "#3B5B8C")],
    shoes: [s("Work Boots Nâu", "#5C4033"), s("Sneakers Retro", "#D9D2C0")],
  },
  {
    id: "grey",
    pant: "Quần Xám",
    pantColors: [s("Xám Than", "#4A4F55"), s("Xám Ghi", "#8E949A")],
    style: "Áo sơ mi cổ vát (Spread), Áo len cổ lọ dệt mỏng ôm sát.",
    tops: [s("Xanh Nhạt", "#ADD8E6"), s("Tím Nhạt", "#C8B6E2"), s("Trắng Tinh", "#FFFFFF"), s("Đỏ Rượu Vang", "#722F37")],
    outer: [s("Blazer Dạ Navy", "#0A192F"), s("Măng Tô Đen", "#111111")],
    shoes: [s("Oxford Đen", "#111111"), s("Derby Nâu Đậm", "#3E2723")],
  },
  {
    id: "beige",
    pant: "Quần Be / Kaki",
    pantColors: [s("Kaki", "#C3B091"), s("Be Sáng", "#E8DCC4")],
    style: "Áo sơ mi vải Chambray, Sơ mi Denim xanh, Sơ mi Linen mộc mạc.",
    tops: [s("Xanh Navy", "#0A192F"), s("Xanh Lá Đậm", "#1F4D2B"), s("Trắng Trơn", "#FFFFFF"), s("Đỏ Gạch / Cam", "#B5502F")],
    outer: [s("Field Jacket", "#4B5320"), s("Bomber Da Nâu", "#5C3A21")],
    shoes: [s("Sneakers Thấp", "#F2F2F2"), s("Chukka Da Lộn", "#9C7A54")],
  },
];

export const rules: string[] = [
  "Giữ tối đa 3 màu chính trong một set đồ (không tính giày và phụ kiện).",
  "Quần sáng đi với áo tối và ngược lại để tạo tương phản tự nhiên.",
  "Áo phom ôm vừa với quần ống đứng; áo oversize nên đi với quần gọn hơn.",
  "Màu giày và thắt lưng nên cùng tông với nhau.",
];
