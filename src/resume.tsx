import { Document, Page, View } from "@react-pdf/renderer";

import {
  ContactInfo,
  Courses,
  EmploymentHistory,
  Header,
  Hobbies,
  Languages,
  Profile,
  Projects,
  References,
  Skills,
} from "@/components/resume-sections";
import { me } from "@/me";
import { RESUME_OPTIONS } from "@/options.ts";
import { gridStyles, spacings, styles } from "@/styles.ts";

export function Resume() {
  const grid = gridStyles(spacings.lg);
  const translatedMe = me[RESUME_OPTIONS.language];
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <Header {...translatedMe.about} {...translatedMe.contactInfo} />
        <Profile {...translatedMe.about} />
        <View style={grid.container}>
          <View style={grid.item("30%")}>
            <View style={{ flexDirection: "column", gap: spacings.lg }}>
              <ContactInfo {...translatedMe.contactInfo} />
              <Languages languages={translatedMe.languages} />
              <Projects {...translatedMe.about} />
              <Hobbies hobbies={translatedMe.hobbies} />
            </View>
          </View>
          <View style={grid.item("70%")}>
            <Skills skills={translatedMe.skills} />
          </View>
        </View>
        <Courses courses={translatedMe.courses} />
      </Page>
      <Page size="A4" style={styles.page}>
        <Header {...translatedMe.about} {...translatedMe.contactInfo} />
        <EmploymentHistory employmentHistory={translatedMe.employmentHistory} />
        <References references={translatedMe.references} />
      </Page>
    </Document>
  );
}
