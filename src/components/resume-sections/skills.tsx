import { Text, View } from "@react-pdf/renderer";

import type { Skill } from "@/me.ts";

import { Toolbox } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { styles, typography } from "@/styles.ts";

interface SkillsProps {
  readonly skills: Skill[];
}

export function Skills(props: SkillsProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Toolbox} variant="sectionTitle">
        habilidades
      </TextWithIcon>
      <View style={styles.sectionContent}>
        {props.skills.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </View>
    </View>
  );
}

function SkillCard(props: Skill) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <TextWithIcon Icon={props.icon} variant="cardTitle">
          {props.title}
        </TextWithIcon>
      </View>
      <View style={styles.cardContent}>
        <Text style={typography.body}>{props.description}</Text>
      </View>
    </View>
  );
}
