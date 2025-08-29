import type { ComponentProps } from "react";

import { Path, Svg } from "@react-pdf/renderer";

export function Rocket(props: ComponentProps<typeof Svg>) {
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
      <Path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <Path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <Path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <Path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </Svg>
  );
}
