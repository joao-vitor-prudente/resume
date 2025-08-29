import { Link, View } from "@react-pdf/renderer";

import type { Projects } from "@/me";

import { Github, Link as LinkIcon, Rocket } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { intl } from "@/intl";
import { styles, typography } from "@/styles";
import { capitalize } from "@/utlis.ts";

export function Projects(props: Projects) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Rocket} variant="sectionTitle">
        {intl.projects.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TextWithIcon Icon={Github} variant="cardTitle">
              {capitalize(intl.projects.github.title)}
            </TextWithIcon>
          </View>
          <View style={styles.cardContent}>
            <TextWithIcon Icon={LinkIcon}>
              <Link href={props.github} style={typography.body}>
                {capitalize(intl.projects.github.link)}
              </Link>
            </TextWithIcon>
          </View>
        </View>
      </View>
    </View>
  );
}
