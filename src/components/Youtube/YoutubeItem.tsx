import React from "react";
import { YoutubeData } from "features/youtubeList/youtubeListSlice";
import { Channel, Layout, Thumbnail, Title } from "./YoutubeItem.styled";

interface YoutubeProps {
  youtube: YoutubeData;
}

const YoutubeItem = ({ youtube }: YoutubeProps) => {
  return (
    <Layout>
      <Thumbnail src={youtube.thumbnail} />
      <Title>{youtube.title}</Title>
      <Channel>{youtube.channelTitle}</Channel>
    </Layout>
  );
};

export default YoutubeItem;
