import { font, weight } from "@/assets/fonts";
import SourceBold from "@/assets/fonts/source-sans-pro/bold.ttf";
import SourceLight from "@/assets/fonts/source-sans-pro/light.ttf";
import SourceMedium from "@/assets/fonts/source-sans-pro/medium.ttf";
import SourceRegular from "@/assets/fonts/source-sans-pro/regular.ttf";
import SourceSemibold from "@/assets/fonts/source-sans-pro/semibold.ttf";

export const sourceSansProFamily = [
  { family: font.source, fontWeight: weight.bold, src: SourceBold },
  { family: font.source, fontWeight: weight.light, src: SourceLight },
  { family: font.source, fontWeight: weight.medium, src: SourceMedium },
  { family: font.source, fontWeight: weight.regular, src: SourceRegular },
  { family: font.source, fontWeight: weight.semibold, src: SourceSemibold },
] as const;
