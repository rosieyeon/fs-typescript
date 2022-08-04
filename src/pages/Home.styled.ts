import styled from "styled-components";

export const HomeLayout = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const HomeNavbar = styled.div``;

export const HomeLogo = styled.img`
  display: block;
  width: 500px;
  margin: 0 auto;
`;

export const HomeSearch = styled.div`
  text-align: center;
`;
export const HomeSearchBar = styled.input`
  width: 40%;
  height: 35px;
  border-radius: 6px;
  padding: 10px;
`;
export const HomeSearchButton = styled.button`
  height: 35px;
  border-radius: 6px;
  margin-left: 10px;
  width: 100px;
  background-color: #d12d35;
  color: white;
  cursor: pointer;
  border: none;
`;
export const HomeYoutubeItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 0 auto;

  width: 90%;
  padding: 60px 0;
`;

export const HomeLoading = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 0 auto;

  width: 90%;
  padding: 60px 0;
`;
export const HomeLoadingSkeleton = styled.div`
  /* ${({ theme }) => theme.skeletonGradation} */
  width: 100%;
`;
export const HomeLoadingImg = styled.div`
  ${({ theme }) => theme.skeletonGradation}

  border-radius: 4px;
  margin-bottom: 8px;
  aspect-ratio: 16/9;
`;
export const HomeLoadingTxt = styled.div`
  ${({ theme }) => theme.skeletonGradation}
  width: 100%;
  height: 20px;
  border-radius: 4px;

  padding: 10px 0 20px 0;
`;

export const HomeError = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
