import { Document, Page } from "@react-pdf/renderer";

import { Header, Profile } from "@/components/resume-sections";
import { me } from "@/me.ts";
import { styles } from "@/styles.ts";

export function Resume() {
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <Header {...me.about} {...me.contactInfo} />
        <Profile {...me.about} />
      </Page>
    </Document>
  );
}
