import type { ComponentProps } from "react";

import { Path, Rect, Svg } from "@react-pdf/renderer";

export function Toolbox(props: ComponentProps<typeof Svg>) {
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
      <Rect height="12" width="18" x="3" y="8" />
      <Rect height="4" width="10" x="7" y="4" />
      <Path d="M3 14 L20 14" />
    </Svg>
  );
}
