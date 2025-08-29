import { View } from "@react-pdf/renderer";

import type { ContactInfo } from "@/me";

import { House, List, Mail, Phone } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { intl } from "@/intl";
import { styles } from "@/styles";

export function ContactInfo(props: ContactInfo) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={List} variant="sectionTitle">
        {intl.contactInfo.title}
      </TextWithIcon>
      <View style={styles.sectionContent}>
        <TextWithIcon Icon={House}>{props.address}</TextWithIcon>
        <TextWithIcon Icon={Mail}>{props.email}</TextWithIcon>
        <TextWithIcon Icon={Phone}>{props.phone}</TextWithIcon>
      </View>
    </View>
  );
}
