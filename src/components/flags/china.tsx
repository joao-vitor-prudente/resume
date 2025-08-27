import type { ComponentProps } from "react";

import { Image } from "@react-pdf/renderer";

export function China(props: Omit<ComponentProps<typeof Image>, "source">) {
  return <Image source="/src/assets/flags/china.png" {...props} />;
}
