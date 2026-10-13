import type { Swatch } from "@/data/outfits";

export default function ColorBadges({ colors }: { colors: Swatch[] }) {
  return (
    <>
      {colors.map((c) => (
        <span className="color-badge" key={c.name}>
          <span className="color-dot" style={{ backgroundColor: c.hex }} />
          {c.name}
        </span>
      ))}
    </>
  );
}
