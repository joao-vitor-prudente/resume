import { Text, View } from "@react-pdf/renderer";

import type { Job } from "@/me";

import { BriefcaseBusiness } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { intl } from "@/intl";
import { listStyles, styles, typography } from "@/styles";
import { formatDateRange } from "@/utlis.ts";

interface EmploymentHistoryProps {
  readonly employmentHistory: Job[];
}

export function EmploymentHistory(props: EmploymentHistoryProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={BriefcaseBusiness} variant="sectionTitle">
        {intl.t.employmentHistory.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        {props.employmentHistory.map((job, index) => (
          <JobCard {...job} key={index} />
        ))}
      </View>
    </View>
  );
}

function JobCard(props: Job) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={typography.cardTitle}>
          {intl.t.employmentHistory.jobTitle(
            props.position,
            props.company,
            props.city,
          )}
        </Text>
        <Text style={typography.cardSubtitle}>
          {formatDateRange(props.from, props.to, intl)}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <View style={listStyles.list}>
          {props.activities.map((activity, index) => (
            <Text key={index} style={listStyles.listItem}>
              {activity}
            </Text>
          ))}
        </View>
        <Text style={typography.body}>{props.description}</Text>
      </View>
    </View>
  );
}
