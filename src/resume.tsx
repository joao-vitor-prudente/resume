import { Document, Page, Text } from "@react-pdf/renderer";

export function Resume() {
  return (
    <Document>
      <Page>
        <Text>Resume</Text>
      </Page>
    </Document>
  );
}
