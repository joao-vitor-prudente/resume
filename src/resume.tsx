import { Document, Page, View } from "@react-pdf/renderer";

import {
  ContactInfo,
  Courses,
  EmploymentHistory,
  Footer,
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
import { gridStyles, spacings, styles } from "@/styles";

export function Resume() {
  const grid = gridStyles({ columns: 3, gap: spacings.xl });
  const translatedMe = me[RESUME_OPTIONS.language];
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <Header {...translatedMe.about} {...translatedMe.contactInfo} />
        </View>
        <View style={styles.pageContent}>
          <Profile {...translatedMe.about} />
          <View style={grid.container}>
            <View style={grid.item({ colspan: 1 })}>
              <View style={{ flexDirection: "column", gap: spacings.lg }}>
                <ContactInfo {...translatedMe.contactInfo} />
                <Languages languages={translatedMe.languages} />
                <Projects {...translatedMe.projects} />
                <Hobbies hobbies={translatedMe.hobbies} />
              </View>
            </View>
            <View style={grid.item({ colspan: 2 })}>
              <Skills skills={translatedMe.skills} />
            </View>
          </View>
        </View>
        <View style={styles.pageFooter}>
          <Footer {...translatedMe.projects} />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <Courses courses={translatedMe.courses} />
        <EmploymentHistory employmentHistory={translatedMe.employmentHistory} />
        <References references={translatedMe.references} />
      </Page>
    </Document>
  );
}
