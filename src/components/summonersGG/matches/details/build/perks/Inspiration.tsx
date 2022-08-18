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

interface PerksDataProps {
  primaryPerks: { style: number; 0: number; 1: number; 2: number; 3: number };
  subPerks: { style: number; 0: number; 1: number };
  isPrimary: boolean;
}
const Inspiration = (data: PerksDataProps) => {
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

const first = [8351, 8360, 8369];
const second = [8306, 8304, 8313];
const third = [8321, 8316, 8345];
const fourth = [8347, 8410, 8352];

export default Inspiration;
