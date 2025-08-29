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
import { intl } from "@/intl";
import { gridStyles, spacings, styles } from "@/styles";

export function Resume() {
  const grid = gridStyles({ columns: 3, gap: spacings.xl });
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <Header {...intl.t.me.about} {...intl.t.me.contactInfo} />
        </View>
        <View style={styles.pageContent}>
          <Profile {...intl.t.me.about} />
          <View style={grid.container}>
            <View style={grid.item({ colspan: 1 })}>
              <View style={{ flexDirection: "column", gap: spacings.lg }}>
                <ContactInfo {...intl.t.me.contactInfo} />
                <Languages languages={intl.t.me.languages} />
                <Projects {...intl.t.me.projects} />
                <Hobbies hobbies={intl.t.me.hobbies} />
              </View>
            </View>
            <View style={grid.item({ colspan: 2 })}>
              <Skills skills={intl.t.me.skills} />
            </View>
          </View>
        </View>
        <View style={styles.pageFooter}>
          <Footer {...intl.t.me.projects} />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <Courses courses={intl.t.me.courses} />
        <EmploymentHistory employmentHistory={intl.t.me.employmentHistory} />
        <References references={intl.t.me.references} />
      </Page>
    </Document>
  );
}
