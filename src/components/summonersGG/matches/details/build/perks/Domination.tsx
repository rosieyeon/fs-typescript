import { useAppSelector } from 'app/store';
import React from 'react';
import { RIOT_CDN } from 'services/riot/cdnValue';
import {
  Layout,
  PerksGrayImg,
  PerksImg,
  PerksImgBox,
  PerksImgContainer,
  PerksLayout,
} from './Perks.styled';
import { PerksDataProps } from './Socery';

const Domination = (data: PerksDataProps) => {
  const { match } = useAppSelector((state) => state.selectedMatch);
  console.log(match);
  return (
    <PerksLayout>
      {data.isPrimary ? (
        <Layout>
          <PerksImgContainer>
            <PerksImg
              src={`${RIOT_CDN}/perkStyle/${data.primaryPerks.style}.png`}
            />
          </PerksImgContainer>
          <PerksImgBox>
            {first.map((perk, idx) =>
              perk === data.primaryPerks[0] ? (
                <PerksImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              ) : (
                <PerksGrayImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              )
            )}
          </PerksImgBox>
          <PerksImgBox>
            {second.map((perk, idx) =>
              perk === data.primaryPerks[1] ? (
                <PerksImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              ) : (
                <PerksGrayImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              )
            )}
          </PerksImgBox>
          <PerksImgBox>
            {third.map((perk, idx) =>
              perk === data.primaryPerks[2] ? (
                <PerksImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              ) : (
                <PerksGrayImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              )
            )}
          </PerksImgBox>
          <PerksImgBox>
            {fourth.map((perk, idx) =>
              perk === data.primaryPerks[3] ? (
                <PerksImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              ) : (
                <PerksGrayImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              )
            )}
          </PerksImgBox>
        </Layout>
      ) : (
        <Layout>
          <PerksImgContainer>
            <PerksImg
              src={`${RIOT_CDN}/perkStyle/${data.subPerks.style}.png`}
            />
          </PerksImgContainer>
          <PerksImgBox>
            {second.map((perk, idx) =>
              perk === data.subPerks[0] || perk === data.subPerks[1] ? (
                <PerksImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              ) : (
                <PerksGrayImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              )
            )}
          </PerksImgBox>
          <PerksImgBox>
            {third.map((perk, idx) =>
              perk === data.subPerks[0] || perk === data.subPerks[1] ? (
                <PerksImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              ) : (
                <PerksGrayImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              )
            )}
          </PerksImgBox>
          <PerksImgBox>
            {fourth.map((perk, idx) =>
              perk === data.subPerks[0] || perk === data.subPerks[1] ? (
                <PerksImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              ) : (
                <PerksGrayImg src={`${RIOT_CDN}/perk/${perk}.png`} key={idx} />
              )
            )}
          </PerksImgBox>
        </Layout>
      )}
    </PerksLayout>
  );
};
const first = [8112, 8124, 8128, 9923];
const second = [8126, 8139, 8143];
const third = [8136, 8120, 8138];
const fourth = [8135, 8134, 8105, 8106];
export default Domination;
