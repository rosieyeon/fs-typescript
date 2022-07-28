import React from "react";
import { YoutubeData } from "features/youtubeList/youtubeListSlice";
import {
  // YoutubeItemChannel,
  // YoutubeItemContent,
  YoutubeItemLayout,
  YoutubeItemThumbnail,
  YoutubeItemTitle,
} from "./YoutubeItem.styled";

interface YoutubeProps {
  youtube: YoutubeData;
}

const YoutubeItem = ({ youtube }: YoutubeProps) => {
  return (
    <YoutubeItemLayout>
      {/* <YoutubeItemContent> */}
      <YoutubeItemThumbnail src={youtube.thumbnail} />
      <YoutubeItemTitle>{youtube.title}</YoutubeItemTitle>
      {/* <YoutubeItemChannel>{youtube.channelTitle}</YoutubeItemChannel> */}
      {/* </YoutubeItemContent> */}
    </YoutubeItemLayout>
  );
};

export default YoutubeItem;
