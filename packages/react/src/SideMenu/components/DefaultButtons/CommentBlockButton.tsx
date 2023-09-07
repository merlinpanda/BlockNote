import { TbMessage2 } from "react-icons/tb";
import { SideMenuButton } from "../SideMenuButton";
import { SideMenuProps } from "../SideMenuPositioner";
import { BlockSchema } from "@blocknote/core";
import { Tooltip } from "@mantine/core";

export const CommentBlockButton = <BSchema extends BlockSchema>(
  props: SideMenuProps<BSchema>
) => (
  <Tooltip label="Click to add a comment" withArrow>
    <div>
      <SideMenuButton>
        <TbMessage2 size="1rem" data-test={"dragHandleAdd"} />
      </SideMenuButton>
    </div>
  </Tooltip>
);
