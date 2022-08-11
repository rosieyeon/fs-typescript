import React, { useState } from 'react';
import { YoutubeData } from 'features/youtube/youtubeListSlice';
import {
  YoutubeItemBookmark,
  YoutubeItemLayout,
  YoutubeItemLink,
  YoutubeItemThumbnail,
  YoutubeItemTitle,
} from './YoutubeItem.styled';
import { useAppDispatch, useAppSelector } from 'app/store';
import { addVideo } from 'features/youtube/playListSlice';

interface YoutubeProps {
  youtube: YoutubeData;
}

const YoutubeItem = ({ youtube }: YoutubeProps) => {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useAppDispatch();

  const { playList } = useAppSelector((state) => state.playList);
  console.log(playList);

  const onClickLike = () => {
    if (!isLike) {
      dispatch(addVideo({ ...youtube, bookmark: true }));
      setIsLike(!isLike);
    }
  };

  console.log(isLike);

  return (
    <YoutubeItemLayout>
      <YoutubeItemLink href={`https://www.youtube.com/embed/${youtube.id}`}>
        <YoutubeItemThumbnail src={youtube.thumbnail} />
      </YoutubeItemLink>
      <YoutubeItemBookmark
        width={20}
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClickLike}
      >
        <path
          d="M17.7364 6.89649L12.7774 6.17579L10.5606 1.68165C10.5001 1.5586 10.4005 1.45899 10.2774 1.39844C9.96882 1.2461 9.59382 1.37305 9.43952 1.68165L7.22272 6.17579L2.26374 6.89649C2.12702 6.91602 2.00202 6.98048 1.90632 7.07813C1.79062 7.19705 1.72686 7.35704 1.72906 7.52294C1.73126 7.68884 1.79923 7.84709 1.91804 7.9629L5.50593 11.4609L4.65827 16.4004C4.63839 16.5153 4.65111 16.6335 4.69497 16.7415C4.73884 16.8496 4.8121 16.9432 4.90645 17.0117C5.0008 17.0802 5.11246 17.1209 5.22878 17.1292C5.34509 17.1375 5.4614 17.113 5.56452 17.0586L10.0001 14.7266L14.4356 17.0586C14.5567 17.1231 14.6973 17.1445 14.8321 17.1211C15.1719 17.0625 15.4005 16.7402 15.3419 16.4004L14.4942 11.4609L18.0821 7.9629C18.1798 7.8672 18.2442 7.74219 18.2637 7.60548C18.3165 7.26368 18.0782 6.94727 17.7364 6.89649V6.89649ZM12.9844 10.9688L13.6895 15.0762L10.0001 13.1387L6.31061 15.0781L7.01569 10.9707L4.03132 8.06055L8.15632 7.46094L10.0001 3.72462L11.8438 7.46094L15.9688 8.06055L12.9844 10.9688Z"
          fill="#FFF278"
        />
        {isLike && (
          <path
            d="M17.7364 6.89649L12.7774 6.17579L10.5606 1.68165C10.5001 1.5586 10.4005 1.45899 10.2774 1.39844C9.96882 1.2461 9.59382 1.37305 9.43952 1.68165L7.22272 6.17579L2.26374 6.89649C2.12702 6.91602 2.00202 6.98048 1.90632 7.07813C1.79062 7.19705 1.72686 7.35704 1.72906 7.52294C1.73126 7.68884 1.79923 7.84709 1.91804 7.9629L5.50593 11.4609L4.65827 16.4004C4.63839 16.5153 4.65111 16.6335 4.69497 16.7415C4.73884 16.8496 4.8121 16.9432 4.90645 17.0117C5.0008 17.0802 5.11246 17.1209 5.22878 17.1292C5.34509 17.1375 5.4614 17.113 5.56452 17.0586L10.0001 14.7266L14.4356 17.0586C14.5567 17.1231 14.6973 17.1445 14.8321 17.1211C15.1719 17.0625 15.4005 16.7402 15.3419 16.4004L14.4942 11.4609L18.0821 7.9629C18.1798 7.8672 18.2442 7.74219 18.2637 7.60548C18.3165 7.26368 18.0782 6.94727 17.7364 6.89649V6.89649Z"
            fill="#FFF278"
          />
        )}
      </YoutubeItemBookmark>
      <YoutubeItemTitle>{youtube.title}</YoutubeItemTitle>
    </YoutubeItemLayout>
  );
};

export default YoutubeItem;
