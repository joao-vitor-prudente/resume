import type { ComponentProps } from "react";

import { Path, Svg } from "@react-pdf/renderer";

export function List(props: ComponentProps<typeof Svg>) {
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
      <Path d="M3 12h.01" />
      <Path d="M3 18h.01" />
      <Path d="M3 6h.01" />
      <Path d="M8 12h13" />
      <Path d="M8 18h13" />
      <Path d="M8 6h13" />
    </Svg>
  );
}
