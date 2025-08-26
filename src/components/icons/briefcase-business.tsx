import type { ComponentProps } from "react";

import { Path, Rect, Svg } from "@react-pdf/renderer";

export function BriefcaseBusiness(props: ComponentProps<typeof Svg>) {
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
      <Path d="M12 12h.01" />
      <Path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <Path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <Rect height="14" rx="2" width="20" x="2" y="6" />
    </Svg>
  );
}
