import styled from "styled-components";

export const MatchesLayout = styled.div`
  margin: 8px 12px;
  padding-bottom: 60px;
`;
export const MatchesContent = styled.div`
  /* width: 740px; */
`;

export const LoadingSkeleton = styled.div`
  ${({ theme }) => theme.skeletonGradation}
  width: 740px;
  height: 96px;
  border-radius: 4px;
  line-height: 96px;

  text-align: center;
`;
