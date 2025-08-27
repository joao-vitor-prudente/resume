import { Text, View } from "@react-pdf/renderer";

import type { Job } from "@/me.ts";

import { BriefcaseBusiness } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { listStyles, styles, typography } from "@/styles.ts";
import { formatDateRange } from "@/utlis.ts";

interface EmploymentHistoryProps {
  readonly employmentHistory: Job[];
}

export function EmploymentHistory(props: EmploymentHistoryProps) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={BriefcaseBusiness} variant="sectionTitle">
        histórico empregatício
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
          {`${props.position} em ${props.company} - ${props.city}`}
        </Text>
        <Text style={typography.cardSubtitle}>
          {formatDateRange(props.from, props.to)}
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
