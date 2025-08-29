import { Link, View } from "@react-pdf/renderer";

import type { About } from "@/me";

import { Github, Link as LinkIcon, Rocket } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { translatedLayout } from "@/layout-translations.ts";
import { styles, typography } from "@/styles";
import { capitalize } from "@/utlis.ts";

export function Projects(props: About) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={Rocket} variant="sectionTitle">
        {translatedLayout.projects.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TextWithIcon Icon={Github} variant="cardTitle">
              {capitalize(translatedLayout.projects.github.title)}
            </TextWithIcon>
          </View>
          <View style={styles.cardContent}>
            <TextWithIcon Icon={LinkIcon}>
              <Link href={props.github} style={typography.body}>
                {capitalize(translatedLayout.projects.github.link)}
              </Link>
            </TextWithIcon>
          </View>
        </View>
      </View>
    </View>
  );
}
