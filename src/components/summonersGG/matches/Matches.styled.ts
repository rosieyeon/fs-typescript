import styled from "styled-components";
import { skeleton } from "styles/theme";

export const MatchesLayout = styled.div`
  /* margin-top: 8px; */
  margin: 8px 12px;
  padding-bottom: 60px;
`;
export const MatchesContent = styled.div`
  /* width: 740px; */
`;

export const LoadingSkeleton = styled.div`
  width: 740px;
  height: 96px;
  border-radius: 4px;
  line-height: 96px;

  text-align: center;
  /* vertical-align: middle; */

  animation: ${skeleton} 1.8s infinite ease-in-out;
`;
