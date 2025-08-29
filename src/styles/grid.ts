import type { Styles } from "@react-pdf/renderer";

interface GridItemOptions {
  colspan: number;
}

interface GridOptions {
  columns: number;
  gap: number;
}

interface GridStyles {
  container: Styles[string];
  item: (options: GridItemOptions) => Styles[string];
}

// not having access to display grid or calc sure is a pain :(
export function gridStyles({ columns, gap }: GridOptions): GridStyles {
  return {
    container: { flexDirection: "row", flexWrap: "wrap", margin: -gap },
    item: ({ colspan }: GridItemOptions) => {
      const width = (100 * colspan) / columns;
      return { padding: gap, width: `${width.toFixed(2)}%` };
    },
  };
}
