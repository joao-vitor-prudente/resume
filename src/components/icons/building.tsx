import type { ComponentProps } from "react";

import { Circle, Path, Rect, Svg } from "@react-pdf/renderer";

export function Building(props: ComponentProps<typeof Svg>) {
  return (
    <Svg
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <Circle cx="8" cy="10" r="0.5" />
      <Circle cx="12" cy="10" r="0.5" />
      <Circle cx="16" cy="10" r="0.5" />
      <Circle cx="8" cy="14" r="0.5" />
      <Circle cx="12" cy="14" r="0.5" />
      <Circle cx="16" cy="14" r="0.5" />
      <Circle cx="8" cy="6" r="0.5" />
      <Circle cx="12" cy="6" r="0.5" />
      <Circle cx="16" cy="6" r="0.5" />
      <Path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
      <Rect height="20" rx="2" width="16" x="4" y="2" />
    </Svg>
  );
}
