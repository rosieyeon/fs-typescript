export interface YoutubeDto {
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

export const youtubeData = (data: YoutubeDto[]) => {
  return data.map((item: YoutubeDto) => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.medium.url,
      bookmark: false,
    };
  });
};
