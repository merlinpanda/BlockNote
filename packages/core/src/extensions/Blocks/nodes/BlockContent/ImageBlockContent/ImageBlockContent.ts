import { mergeAttributes } from "@tiptap/core";
import { createTipTapBlock } from "../../../api/block";
import styles from "../../Block.module.css";
import { mergeCSSClasses } from "../../../../../shared/utils";

export const ImageBlockContent = createTipTapBlock<"image">({
  name: "image",
  content: "inline*",

  addAttributes() {
    return {
      title: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-title"),
        renderHTML: (attributes) => {
          return {
            "data-title": attributes.title,
          };
        },
      },
      src: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-src"),
        renderHTML: (attributes) => {
          return {
            "data-src": attributes.src,
          };
        },
      },
    };
  },

  renderHTML({ node, HTMLAttributes }) {
    const blockContentDOMAttributes =
      this.options.domAttributes?.blockContent || {};
    const inlineContentDOMAttributes =
      this.options.domAttributes?.inlineContent || {};

    return [
      "div",
      mergeAttributes(
        {
          ...blockContentDOMAttributes,
          class: mergeCSSClasses(
            styles.blockContent,
            blockContentDOMAttributes.class
          ),
          "data-content-type": this.name,
        },
        HTMLAttributes
      ),
      [
        "img",
        {
          ...inlineContentDOMAttributes,
          class: mergeCSSClasses(
            styles.inlineContent,
            styles.image,
            inlineContentDOMAttributes.class
          ),
          src: node.attrs.src,
          title: node.attrs.title,
        },
        0,
      ],
    ];
  },
});
