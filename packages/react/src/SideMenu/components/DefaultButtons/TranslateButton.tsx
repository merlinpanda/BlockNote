import { TbLanguageHiragana } from "react-icons/tb";
import { SideMenuButton } from "../SideMenuButton";
import { SideMenuProps } from "../SideMenuPositioner";
import { BlockSchema } from "@blocknote/core";
import { Tooltip } from "@mantine/core";

export const TranslateButton = <BSchema extends BlockSchema>(
  props: SideMenuProps<BSchema>
) => (
  <Tooltip label="Click to complete translation" withArrow>
    <div>
      <SideMenuButton>
        <TbLanguageHiragana size="1rem" data-test={"dragHandleAdd"} />
      </SideMenuButton>
    </div>
  </Tooltip>
);
