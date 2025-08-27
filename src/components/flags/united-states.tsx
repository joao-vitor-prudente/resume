import type { ComponentProps } from "react";

import { Image } from "@react-pdf/renderer";

export function UnitedStates(
  props: Omit<ComponentProps<typeof Image>, "source">,
) {
  return <Image source="/src/assets/flags/united-states.png" {...props} />;
}
