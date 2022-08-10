import styled from 'styled-components';

export const YoutubeItemLayout = styled.a`
  text-decoration: none;
`;
export const YoutubeItemThumbnail = styled.img`
  width: 100%;
`;
export const YoutubeItemTitle = styled.span`
  font-weight: 600;
  padding: 10px 0 20px 0;
  text-decoration: none;
  color: white;
  line-height: 20px;
`;
export const YoutubeItemBookmark = styled.svg<{ width: number }>`
  vertical-align: middle;
  margin-right: 8px;
`;
