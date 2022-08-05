import React from 'react';
import { YoutubeData } from 'features/youtube/youtubeListSlice';
import {
  YoutubeItemLayout,
  YoutubeItemThumbnail,
  YoutubeItemTitle,
} from './YoutubeItem.styled';

interface YoutubeProps {
  youtube: YoutubeData;
}

const YoutubeItem = ({ youtube }: YoutubeProps) => {
  return (
    <YoutubeItemLayout href={`https://www.youtube.com/embed/${youtube.id}`}>
      <YoutubeItemThumbnail src={youtube.thumbnail} />
      <YoutubeItemTitle>{youtube.title}</YoutubeItemTitle>
    </YoutubeItemLayout>
  );
};

export default YoutubeItem;
