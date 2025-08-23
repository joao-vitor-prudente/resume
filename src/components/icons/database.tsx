import type { ComponentProps } from "react";

import { Ellipse, Path, Svg } from "@react-pdf/renderer";

export function Database(props: ComponentProps<typeof Svg>) {
  return (
    <Svg
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <Ellipse cx="12" cy="5" rx="9" ry="3" />
      <Path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <Path d="M3 12A9 3 0 0 0 21 12" />
    </Svg>
  );
}
