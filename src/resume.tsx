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
import { spacings, styles, twoColumnGridStyles } from "@/styles.ts";

export function Resume() {
  return (
    <Document title="Resume">
      <Page size="A4" style={styles.page}>
        <Header {...me.about} {...me.contactInfo} />
        <Profile {...me.about} />
        <View style={twoColumnGridStyles(spacings.xl).container}>
          <View style={twoColumnGridStyles(spacings.xl, 34).item}>
            <ContactInfo {...me.contactInfo} />
            <Languages languages={me.languages} />
            <Hobbies hobbies={me.hobbies} />
          </View>
          <View style={twoColumnGridStyles(spacings.xl, 66).item}>
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
