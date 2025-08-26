import {
  type BlobProviderParams,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import { type FC } from "react";

interface PdfInterfaceProps {
  readonly document: FC;
}

export function PdfInterface(props: PdfInterfaceProps) {
  return (
    <div style={{ display: "flex" }}>
      <PDFViewer style={{ height: "64rem", width: "120rem" }}>
        <props.document />
      </PDFViewer>
      <PDFDownloadLink
        children={DownloadButton}
        document={<props.document />}
      />
    </div>
  );
}

function DownloadButton(props: BlobProviderParams) {
  if (props.error) return <button disabled>Error</button>;
  if (props.loading) return <button disabled>Loading</button>;
  return <button>Download PDF</button>;
}
