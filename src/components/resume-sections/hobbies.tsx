import { View } from "@react-pdf/renderer";

import type { Hobby } from "@/me.ts";

import { Palette } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { styles } from "@/styles.ts";

interface HobbiesProps {
  readonly hobbies: Hobby[];
}

export function Hobbies(props: HobbiesProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Palette} variant="sectionTitle">
        hobbies
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
