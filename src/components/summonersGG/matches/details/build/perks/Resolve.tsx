import React from 'react';
import { PerksDataProps } from './Socery';
import {
  Layout,
  PerksGrayImg,
  PerksImg,
  PerksImgBox,
  PerksImgContainer,
  PerksLayout,
} from './Perks.styled';
import { RIOT_CDN } from 'services/riot/cdnValue';

const Resolve = (data: PerksDataProps) => {
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
const first = [8437, 8439, 8465];
const second = [8446, 8463, 8401];
const third = [8429, 8444, 8473];
const fourth = [8451, 8453, 8242];
export default Resolve;
