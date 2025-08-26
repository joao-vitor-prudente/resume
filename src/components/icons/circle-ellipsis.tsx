import type { ComponentProps } from "react";

import { Circle, Svg } from "@react-pdf/renderer";

export function CircleEllipsis(props: ComponentProps<typeof Svg>) {
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
      <Circle cx="12" cy="12" r="10" />
      <Circle cx="6" cy="12" r="0.5" />
      <Circle cx="12" cy="12" r="0.5" />
      <Circle cx="18" cy="12" r="0.5" />
    </Svg>
  );
}
