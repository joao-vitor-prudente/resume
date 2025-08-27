import { Document, Page, View } from "@react-pdf/renderer";

import {
  ContactInfo,
  Courses,
  EmploymentHistory,
  Header,
  Hobbies,
  Languages,
  Profile,
  References,
  Skills,
} from "@/components/resume-sections";
import { me } from "@/me.ts";
import { gridStyles, spacings, styles } from "@/styles.ts";

export function Resume() {
  const grid = gridStyles(spacings.lg);
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <Header {...me.about} {...me.contactInfo} />
        <Profile {...me.about} />
        <View style={grid.container}>
          <View style={grid.item("30%")}>
            <View style={{ flexDirection: "column", gap: spacings.lg }}>
              <ContactInfo {...me.contactInfo} />
              <Languages languages={me.languages} />
              <Hobbies hobbies={me.hobbies} />
            </View>
          </View>
          <View style={grid.item("70%")}>
            <Skills skills={me.skills} />
          </View>
        </View>
        <Courses courses={me.courses} />
      </Page>
      <Page size="A4" style={styles.page}>
        <Header {...me.about} {...me.contactInfo} />
        <EmploymentHistory employmentHistory={me.employmentHistory} />
        <References references={me.references} />
      </Page>
    </Document>
  );
}
