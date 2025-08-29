import { View } from "@react-pdf/renderer";

import type { Hobby } from "@/me";

import { Palette } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { translatedLayout } from "@/layout-translations.ts";
import { styles } from "@/styles.ts";

interface HobbiesProps {
  readonly hobbies: Hobby[];
}

export function Hobbies(props: HobbiesProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Palette} variant="sectionTitle">
        {translatedLayout.hobbies.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        {props.hobbies.map((hobby, index) => (
          <TextWithIcon Icon={hobby.icon} key={index}>
            {hobby.name}
          </TextWithIcon>
        ))}
      </View>
    </View>
  );
}
