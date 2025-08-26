import type { ComponentProps } from "react";

import { Circle, Path, Svg } from "@react-pdf/renderer";

export function University(props: ComponentProps<typeof Svg>) {
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
      <Path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <Path d="M18 12h.01" />
      <Path d="M18 16h.01" />
      <Path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
      <Path d="M6 12h.01" />
      <Path d="M6 16h.01" />
      <Circle cx="12" cy="10" r="2" />
    </Svg>
  );
}
