import { matchParticipants } from 'features/riot/matchDetailSlice';
import React, { useEffect, useState } from 'react';
import {
  BuildDivider,
  BuildLayout,
  BuildPerksBox,
  BuildText,
} from './Build.styled';
import Domination from './perks/Domination';
import Inspiration from './perks/Inspiration';
import Percision from './perks/Percision';
import Resolve from './perks/Resolve';
import Socery from './perks/Socery';
import StatsPerks from './perks/StatsPerks';

interface BuildDataProps {
  myData: matchParticipants;
}

const Build = (data: BuildDataProps) => {
  const myData = data.myData;
  console.log(myData);

  const [primary, setPrimary] = useState('');
  const [sub, setSub] = useState('');
  const primaryStyle = myData?.primaryPerks.style;
  const subStyle = myData?.subPerks.style;

  useEffect(() => {
    if (primaryStyle === 8000) {
      setPrimary('Percision');
    }
    if (primaryStyle === 8100) {
      setPrimary('Domination');
    }
    if (primaryStyle === 8200) {
      setPrimary('Socery');
    }
    if (primaryStyle === 8300) {
      setPrimary('Inspiration');
    }
    if (primaryStyle === 8400) {
      setPrimary('Resolve');
    }

    if (subStyle === 8000) {
      setSub('Percision');
    }
    if (subStyle === 8100) {
      setSub('Domination');
    }
    if (subStyle === 8200) {
      setSub('Socery');
    }
    if (subStyle === 8300) {
      setSub('Inspiration');
    }
    if (subStyle === 8400) {
      setSub('Resolve');
    }
  }, [primaryStyle, subStyle]);

  return (
    <BuildLayout>
      <BuildPerksBox>
        {primary === 'Percision' && (
          <Percision
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={true}
          />
        )}
        {primary === 'Domination' && (
          <Domination
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={true}
          />
        )}
        {primary === 'Socery' && (
          <Socery
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={true}
          />
        )}
        {primary === 'Inspiration' && (
          <Inspiration
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={true}
          />
        )}
        {primary === 'Resolve' && (
          <Resolve
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={true}
          />
        )}
        <BuildText>{primary}</BuildText>
      </BuildPerksBox>
      <BuildDivider />
      <BuildPerksBox>
        {sub === 'Percision' && (
          <Percision
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={false}
          />
        )}
        {sub === 'Domination' && (
          <Domination
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={false}
          />
        )}
        {sub === 'Socery' && (
          <Socery
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={false}
          />
        )}
        {sub === 'Inspiration' && (
          <Inspiration
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={false}
          />
        )}
        {sub === 'Resolve' && (
          <Resolve
            primaryPerks={myData.primaryPerks}
            subPerks={myData.subPerks}
            isPrimary={false}
          />
        )}
        <BuildText>{sub}</BuildText>
      </BuildPerksBox>
      <BuildDivider />
      <BuildPerksBox>
        <StatsPerks statPerks={myData.statPerks} />
        <BuildText>Rune Stats</BuildText>
      </BuildPerksBox>
    </BuildLayout>
  );
};
export default Build;
