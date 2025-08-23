import type { ComponentProps } from "react";

import { Path, Svg } from "@react-pdf/renderer";

export function Languages(props: ComponentProps<typeof Svg>) {
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
      <Path d="m5 8 6 6" />
      <Path d="m4 14 6-6 2-3" />
      <Path d="M2 5h12" />
      <Path d="M7 2h1" />
      <Path d="m22 22-5-10-5 10" />
      <Path d="M14 18h6" />
    </Svg>
  );
}
