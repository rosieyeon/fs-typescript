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

const Percision = (data: PerksDataProps) => {
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

const first = [8005, 8008, 8021, 8010];
const second = [9101, 9111, 8009];
const third = [9104, 9105, 9103];
const fourth = [8014, 8017, 8299];
export default Percision;
