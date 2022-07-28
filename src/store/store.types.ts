export interface Summoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export interface YoutubeItem {
  id: string;
  thumbnail: string;
  title: string;
  channelTitle: string;
}

export interface Youtube {
  kind: string;
  etag: string;
  id: YoutubeSearchResponseId;
  snippet: YoutubeSnippet;
  contentDetails: YoutubeContentDetails;
}

interface YoutubeSearchResponseId {
  kind: string;
  videoId: string;
}

interface YoutubeSnippet {
  publishedAt: string;
  publishTime?: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeSnippetThumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: YoutubeSnippetLocalized;
}

interface YoutubeSnippetLocalized {
  title: string;
  description: string;
}

interface YoutubeSnippetThumbnails {
  default: YoutubeSnippetThumbnail;
  medium: YoutubeSnippetThumbnail;
  high: YoutubeSnippetThumbnail;
  standard: YoutubeSnippetThumbnail;
  maxres: YoutubeSnippetThumbnail;
}

interface YoutubeSnippetThumbnail {
  url: string;
  width: number;
  height: number;
}

interface YoutubeContentDetails {
  duration: string;
}
