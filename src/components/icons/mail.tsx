import type { ComponentProps } from "react";

import { Path, Rect, Svg } from "@react-pdf/renderer";

export function Mail(props: ComponentProps<typeof Svg>) {
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
      <Path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <Rect height="16" rx="2" width="20" x="2" y="4" />
    </Svg>
  );
}
