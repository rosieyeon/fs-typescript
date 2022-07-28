import React from "react";
import { YoutubeItem } from "store/store.types";
import { Channel, Layout, Thumbnail, Title } from "./YoutubeItem.styled";

interface YoutubeProps {
  youtube: YoutubeItem;
}

const YoutubeItems = ({ youtube }: YoutubeProps) => {
  // console.log(youtube);
  return (
    <Layout>
      <Thumbnail src={youtube.thumbnail} />
      <Title>{youtube.title}</Title>
      <Channel>{youtube.channelTitle}</Channel>
    </Layout>
  );
};

export default YoutubeItems;
