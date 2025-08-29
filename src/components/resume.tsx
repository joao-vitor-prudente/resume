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
  const intlMe = me[RESUME_OPTIONS.language];
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <Header {...intlMe.about} {...intlMe.contactInfo} />
        </View>
        <View style={styles.pageContent}>
          <Profile {...intlMe.about} />
          <View style={grid.container}>
            <View style={grid.item({ colspan: 1 })}>
              <View style={{ flexDirection: "column", gap: spacings.lg }}>
                <ContactInfo {...intlMe.contactInfo} />
                <Languages languages={intlMe.languages} />
                <Projects {...intlMe.projects} />
                <Hobbies hobbies={intlMe.hobbies} />
              </View>
            </View>
            <View style={grid.item({ colspan: 2 })}>
              <Skills skills={intlMe.skills} />
            </View>
          </View>
        </View>
        <View style={styles.pageFooter}>
          <Footer {...intlMe.projects} />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <Courses courses={intlMe.courses} />
        <EmploymentHistory employmentHistory={intlMe.employmentHistory} />
        <References references={intlMe.references} />
      </Page>
    </Document>
  );
}
