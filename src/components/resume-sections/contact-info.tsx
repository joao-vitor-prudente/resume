import { View } from "@react-pdf/renderer";

import type { ContactInfo } from "@/me.ts";

import { House, List, Mail, Phone } from "@/components/icons";
import { TextWithIcon } from "@/components/text-with-icon.tsx";
import { styles } from "@/styles.ts";

export function ContactInfo(props: ContactInfo) {
  return (
    <View style={styles.section}>
      <TextWithIcon Icon={List} variant="sectionTitle">
        informações de contato
      </TextWithIcon>
      <View style={styles.sectionContent}>
        <TextWithIcon Icon={House}>{props.address}</TextWithIcon>
        <TextWithIcon Icon={Mail}>{props.email}</TextWithIcon>
        <TextWithIcon Icon={Phone}>{props.phone}</TextWithIcon>
      </View>
    </View>
  );
}
