import { Document, Page, Text, View } from "@react-pdf/renderer";

import { Beef } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { styles, typography } from "@/styles.ts";

export function Resume() {
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <Text style={typography.title}>Title</Text>
          <Text style={typography.subtitle}>Subtitle</Text>
        </View>
        <View style={styles.pageContent}>
          <View style={styles.section}>
            <Text style={typography.sectionTitle}>Section Title</Text>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={typography.cardTitle}>Card Title</Text>
                <Text style={typography.cardSubtitle}>Card Subtitle</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={typography.body}>Body</Text>
                <Text style={typography.bodyMuted}>Body Muted</Text>
                <TextWithIcon Icon={Beef} variant="sectionTitle">
                  Section Title
                </TextWithIcon>
                <TextWithIcon Icon={Beef} variant="cardTitle">
                  Card Title
                </TextWithIcon>
                <TextWithIcon Icon={Beef} variant="body">
                  Body
                </TextWithIcon>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.pageFooter}>
          <Text style={typography.body}>Footer</Text>
        </View>
      </Page>
    </Document>
  );
}
