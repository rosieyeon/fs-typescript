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

export interface PerksDataProps {
  primaryPerks: { style: number; 0: number; 1: number; 2: number; 3: number };
  subPerks: { style: number; 0: number; 1: number };
  isPrimary: boolean;
}

const Socery = (data: PerksDataProps) => {
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

const first = [8214, 8229, 8230];
const second = [8224, 8226, 8275];
const third = [8210, 8234, 8233];
const fourth = [8237, 8232, 8236];
export default Socery;
