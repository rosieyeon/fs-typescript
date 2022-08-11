import styled from 'styled-components';

export const YoutubeLayout = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export const YoutubeNavbar = styled.div``;

export const YoutubeLogo = styled.img`
  display: block;
  width: 500px;
  margin: 0 auto;
`;

export const YoutubeSearch = styled.div`
  text-align: center;
`;

export const YoutubeSearchBar = styled.input`
  width: 40%;
  height: 35px;
  border-radius: 6px;
  padding: 10px;
  border: none;
`;

export const YoutubeCategoryBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-top: 20px;
`;

export const YoutubeCategoryButton = styled.button`
  padding: 2px 12px;
  border-radius: 50px;
  height: 30px;
  background-color: black;
  color: gray;
  border: 1px solid gray;
  cursor: pointer;

  :focus {
    background-color: gray;
    color: white;
  }
`;

export const YoutubeSearchButton = styled.button`
  height: 35px;
  border-radius: 6px;
  margin-left: 10px;
  width: 100px;
  background-color: #d12d35;
  color: white;
  cursor: pointer;
  border: none;
`;

export const YoutubeYoutubeItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 15px;
  margin: 0 auto;

  width: 90%;
  padding: 60px 0;
`;

export const YoutubeLoading = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 0 auto;

  width: 90%;
  padding: 60px 0;
`;

export const YoutubeLoadingSkeleton = styled.div`
  width: 100%;
`;

export const YoutubeLoadingImg = styled.div`
  ${({ theme }) => theme.skeletonGradation}

  border-radius: 4px;
  margin-bottom: 8px;
  aspect-ratio: 16/9;
`;

export const YoutubeLoadingTxt = styled.div`
  ${({ theme }) => theme.skeletonGradation}
  width: 100%;
  height: 20px;
  border-radius: 4px;

  padding: 10px 0 20px 0;
`;

export const YoutubeError = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
