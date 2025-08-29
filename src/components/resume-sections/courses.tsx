import { Link, Text, View } from "@react-pdf/renderer";

import type { Course } from "@/me";

import { BookOpen, GraduationCap, Link as LinkIcon } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { intl } from "@/intl";
import { styles, typography } from "@/styles";
import { capitalize } from "@/utlis.ts";

interface CoursesProps {
  readonly courses: Course[];
}

export function Courses(props: CoursesProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={GraduationCap} variant="sectionTitle">
        {intl.t.courses.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        {props.courses.map((course, index) => (
          <CourseCard {...course} key={index} />
        ))}
      </View>
    </View>
  );
}

function CourseCard(props: Course) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <TextWithIcon Icon={BookOpen} variant="cardTitle">
          {props.name}
        </TextWithIcon>
        <Text style={typography.cardSubtitle}>{props.institution}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={typography.body}>{props.description}</Text>
        <TextWithIcon Icon={LinkIcon}>
          <Link href={props.diplomaUrl} style={typography.body}>
            {capitalize(intl.t.courses.link)}
          </Link>
        </TextWithIcon>
      </View>
    </View>
  );
}
