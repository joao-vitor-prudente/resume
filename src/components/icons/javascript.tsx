import type { ComponentProps } from "react";

import { Path, Svg } from "@react-pdf/renderer";

export function Javascript(props: ComponentProps<typeof Svg>) {
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
      <Path d="M21 7 L21 3 L3 3 L3 21 L21 21" />
      <Path d="M14 10 L14 16 Q14 18, 12 18 Q10 18, 10 16" />
      <Path d="M21 12 Q21 10, 19 10 Q17 10, 17 12 Q17 14, 19 14 Q21 14, 21 16 Q21 18, 19 18 Q17 18, 17 16" />
    </Svg>
  );
}
