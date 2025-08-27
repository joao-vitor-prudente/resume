import type { ComponentProps } from "react";

import { Circle, Path, Rect, Svg } from "@react-pdf/renderer";

export function Brazil(props: ComponentProps<typeof Svg>) {
  return (
    <Svg height="32" stroke="0.1" viewBox="0 0 32 32" {...props}>
      <Rect fill="#459a45" height="24" rx="4" ry="4" width="30" x="1" y="4" />
      <Path
        d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
        opacity=".15"
      />
      <Path d="M3.472,16l12.528,8,12.528-8-12.528-8L3.472,16Z" fill="#fedf00" />
      <Circle cx="16" cy="16" fill="#0a2172" r="5" />
      <Path
        d="M14,14.5c-.997,0-1.958,.149-2.873,.409-.078,.35-.126,.71-.127,1.083,.944-.315,1.951-.493,2.999-.493,2.524,0,4.816,.996,6.519,2.608,.152-.326,.276-.666,.356-1.026-1.844-1.604-4.245-2.583-6.875-2.583Z"
        fill="#fff"
      />
    </Svg>
  );
}
