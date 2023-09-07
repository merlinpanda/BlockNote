import { BlockSchema } from "@blocknote/core";

import { SideMenuProps } from "./SideMenuPositioner";
import { SideMenu } from "./SideMenu";
import { AddBlockButton } from "./DefaultButtons/AddBlockButton";
import { DragHandle } from "./DefaultButtons/DragHandle";
import { PutIntoKCardButton } from "./DefaultButtons/PutIntoKCardButton";
import { CommentBlockButton } from "./DefaultButtons/CommentBlockButton";
import { TranslateButton } from "./DefaultButtons/TranslateButton";

export const DefaultSideMenu = <BSchema extends BlockSchema>(
  props: SideMenuProps<BSchema>
) => (
  <SideMenu>
    {props.editor.model === "editable" && (
      <>
        <AddBlockButton {...props} />
        <DragHandle {...props} />
      </>
    )}
    {props.editor.model === "commentable" && (
      <>
        <CommentBlockButton {...props} />
        <PutIntoKCardButton {...props} />
        <TranslateButton {...props} />
      </>
    )}
  </SideMenu>
);
