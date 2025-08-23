import type { ComponentProps } from "react";

import { Path, Svg } from "@react-pdf/renderer";

export function CodeXml(props: ComponentProps<typeof Svg>) {
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
      <Path d="m18 16 4-4-4-4" />
      <Path d="m6 8-4 4 4 4" />
      <Path d="m14.5 4-5 16" />
    </Svg>
  );
}
