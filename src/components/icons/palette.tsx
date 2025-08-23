import type { ComponentProps } from "react";

import { Circle, Path, Svg } from "@react-pdf/renderer";

export function Palette(props: ComponentProps<typeof Svg>) {
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
      <Path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
      <Circle cx="13.5" cy="6.5" fill="currentColor" r=".5" />
      <Circle cx="17.5" cy="10.5" fill="currentColor" r=".5" />
      <Circle cx="6.5" cy="12.5" fill="currentColor" r=".5" />
      <Circle cx="8.5" cy="7.5" fill="currentColor" r=".5" />
    </Svg>
  );
}
