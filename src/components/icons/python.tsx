import type { ComponentProps } from "react";

import { Path, Svg } from "@react-pdf/renderer";

export function Python(props: ComponentProps<typeof Svg>) {
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
      <Path d="M3 8 L8 8 L8 3 L16 3 L16 8 L21 8 L21 16 L16 16 L16 21 L8 21 L8 16 L3 16 Z" />
      <Path d="M16 8 L16 12 L8 12 L8 16" />
      <Path d="M7 8 L12 8" />
      <Path d="M16 16 L12 16" />
    </Svg>
  );
}
