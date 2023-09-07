import { HeadingBlockContent } from "../nodes/BlockContent/HeadingBlockContent/HeadingBlockContent";
import { ImageBlockContent } from "../nodes/BlockContent/ImageBlockContent/ImageBlockContent";
import { BulletListItemBlockContent } from "../nodes/BlockContent/ListItemBlockContent/BulletListItemBlockContent/BulletListItemBlockContent";
import { NumberedListItemBlockContent } from "../nodes/BlockContent/ListItemBlockContent/NumberedListItemBlockContent/NumberedListItemBlockContent";
import { ParagraphBlockContent } from "../nodes/BlockContent/ParagraphBlockContent/ParagraphBlockContent";
import { PropSchema, TypesMatch } from "./blockTypes";

export const defaultProps = {
  backgroundColor: {
    default: "transparent" as const,
  },
  textColor: {
    default: "black" as const, // TODO
  },
  textAlignment: {
    default: "left" as const,
    values: ["left", "center", "right", "justify"] as const,
  },
} satisfies PropSchema;

export type DefaultProps = typeof defaultProps;

export const defaultBlockSchema = {
  paragraph: {
    propSchema: defaultProps,
    node: ParagraphBlockContent,
  },
  heading: {
    propSchema: {
      ...defaultProps,
      level: { default: "1", values: ["1", "2", "3", "4"] as const },
    },
    node: HeadingBlockContent,
  },
  bulletListItem: {
    propSchema: defaultProps,
    node: BulletListItemBlockContent,
  },
  numberedListItem: {
    propSchema: defaultProps,
    node: NumberedListItemBlockContent,
  },
  image: {
    propSchema: {
      ...defaultProps,
      src: { default: "" },
      title: { default: "" },
    },
    node: ImageBlockContent,
  },
} as const;

export type DefaultBlockSchema = TypesMatch<typeof defaultBlockSchema>;
