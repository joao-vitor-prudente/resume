import { View } from "@react-pdf/renderer";

import type { Hobby } from "@/me";

import { Palette } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { intl } from "@/intl";
import { styles } from "@/styles";

interface HobbiesProps {
  readonly hobbies: Hobby[];
}

export function Hobbies(props: HobbiesProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Palette} variant="sectionTitle">
        {intl.t.hobbies.title}
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
