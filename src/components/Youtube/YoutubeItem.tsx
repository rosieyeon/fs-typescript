import React from "react";
import { YoutubeData } from "features/youtubeList/youtubeListSlice";
import {
  YoutubeItemChannel,
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
      <YoutubeItemThumbnail src={youtube.thumbnail} />
      <YoutubeItemTitle>{youtube.title}</YoutubeItemTitle>
      <YoutubeItemChannel>{youtube.channelTitle}</YoutubeItemChannel>
    </YoutubeItemLayout>
  );
};

export default YoutubeItem;
