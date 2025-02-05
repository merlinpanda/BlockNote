import {
  BaseSlashMenuItem,
  BlockSchema,
  defaultBlockSchema,
  DefaultBlockSchema,
  getDefaultSlashMenuItems,
} from "@blocknote/core";
import {
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiListOrdered,
  RiListUnordered,
  RiText,
  RiImageFill,
} from "react-icons/ri";
import { formatKeyboardShortcut } from "../utils";
import { ReactSlashMenuItem } from "./ReactSlashMenuItem";

const extraFields: Record<
  string,
  Omit<
    ReactSlashMenuItem<DefaultBlockSchema>,
    keyof BaseSlashMenuItem<DefaultBlockSchema>
  >
> = {
  Heading: {
    group: "Headings",
    icon: <RiH1 size={18} />,
    hint: "Used for a top-level heading",
    shortcut: formatKeyboardShortcut("Mod-Alt-1"),
  },
  "Heading 2": {
    group: "Headings",
    icon: <RiH2 size={18} />,
    hint: "Used for key sections",
    shortcut: formatKeyboardShortcut("Mod-Alt-2"),
  },
  "Heading 3": {
    group: "Headings",
    icon: <RiH3 size={18} />,
    hint: "Used for subsections and group headings",
    shortcut: formatKeyboardShortcut("Mod-Alt-3"),
  },
  "Heading 4": {
    group: "Headings",
    icon: <RiH4 size={18} />,
    hint: "Used for subsections and group headings 3",
    shortcut: formatKeyboardShortcut("Mod-Alt-4"),
  },
  "Numbered List": {
    group: "Basic blocks",
    icon: <RiListOrdered size={18} />,
    hint: "Used to display a numbered list",
    shortcut: formatKeyboardShortcut("Mod-Alt-7"),
  },
  "Bullet List": {
    group: "Basic blocks",
    icon: <RiListUnordered size={18} />,
    hint: "Used to display an unordered list",
    shortcut: formatKeyboardShortcut("Mod-Alt-9"),
  },
  Paragraph: {
    group: "Basic blocks",
    icon: <RiText size={18} />,
    hint: "Used for the body of your document",
    shortcut: formatKeyboardShortcut("Mod-Alt-0"),
  },
  Image: {
    group: "Medias",
    icon: <RiImageFill size={18} />,
    hint: "Image",
    shortcut: formatKeyboardShortcut("Mod-Alt-i"),
  },
};

export function getDefaultReactSlashMenuItems<BSchema extends BlockSchema>(
  // This type casting is weird, but it's the best way of doing it, as it allows
  // the schema type to be automatically inferred if it is defined, or be
  // inferred as any if it is not defined. I don't think it's possible to make it
  // infer to DefaultBlockSchema if it is not defined.
  schema: BSchema = defaultBlockSchema as unknown as BSchema
): ReactSlashMenuItem<BSchema>[] {
  const slashMenuItems: BaseSlashMenuItem<BSchema>[] =
    getDefaultSlashMenuItems(schema);

  return slashMenuItems.map((item) => ({
    ...item,
    ...extraFields[item.name],
  }));
}
