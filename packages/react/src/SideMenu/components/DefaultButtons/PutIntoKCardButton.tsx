import { TbFileSymlink } from "react-icons/tb";
import { SideMenuButton } from "../SideMenuButton";
import { SideMenuProps } from "../SideMenuPositioner";
import { BlockSchema } from "@blocknote/core";
import { Tooltip } from "@mantine/core";

export const PutIntoKCardButton = <BSchema extends BlockSchema>(
  props: SideMenuProps<BSchema>
) => (
  <Tooltip label="Click to put into a new kcard" withArrow>
    <div>
      <SideMenuButton>
        <TbFileSymlink size="1rem" data-test={"dragHandleAdd"} />
      </SideMenuButton>
    </div>
  </Tooltip>
);
