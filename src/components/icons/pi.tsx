import type { ComponentProps } from "react";

import { Line, Path, Svg } from "@react-pdf/renderer";

export function Pi(props: ComponentProps<typeof Svg>) {
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
      <Line x1="9" x2="9" y1="4" y2="20" />
      <Path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <Path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </Svg>
  );
}
