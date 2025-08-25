import { font, weight } from "@/assets/fonts";
import OswaldBold from "@/assets/fonts/oswald/bold.ttf";
import OswaldLight from "@/assets/fonts/oswald/light.ttf";
import OswaldMedium from "@/assets/fonts/oswald/medium.ttf";
import OswaldRegular from "@/assets/fonts/oswald/regular.ttf";
import OswaldSemibold from "@/assets/fonts/oswald/semibold.ttf";

export const oswaldFamily = [
  { family: font.oswald, fontWeight: weight.bold, src: OswaldBold },
  { family: font.oswald, fontWeight: weight.light, src: OswaldLight },
  { family: font.oswald, fontWeight: weight.medium, src: OswaldMedium },
  { family: font.oswald, fontWeight: weight.regular, src: OswaldRegular },
  { family: font.oswald, fontWeight: weight.semibold, src: OswaldSemibold },
] as const;
