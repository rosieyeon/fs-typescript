import React from "react";
import { RIOT_CDN } from "services/cdnValue";
import { ItemsImg, ItemsLayout, ItemsSlot } from "./Items.styled";

interface itemProps {
  items: string[];
  win: boolean;
}

const Items = (data: itemProps) => {
  const itemsList = data.items;
  return (
    <ItemsLayout>
      {itemsList.map((item, idx) =>
        item !== "0" ? (
          <ItemsSlot key={idx} winlose={data.win}>
            <ItemsImg src={`${RIOT_CDN}/item/${item}.png`} />
          </ItemsSlot>
        ) : (
          <ItemsSlot key={idx} winlose={data.win}></ItemsSlot>
        )
      )}
    </ItemsLayout>
  );
};
export default Items;
