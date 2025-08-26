import type { ComponentProps } from "react";

import { Circle, Svg } from "@react-pdf/renderer";

export function Separator(props: ComponentProps<typeof Svg>) {
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
      <Circle cx="12" cy="12" fill={props.stroke ?? "currentColor"} r="6" />
    </Svg>
  );
}
