import { useState, useEffect } from "react";
import Main from "../layout/Main";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
}

interface MusicProps {
  playlistUrl: string;
  playlistId?: string;
}

const Music: React.FC<MusicProps> = ({
  playlistUrl = "PL2Jxcnz4c2jkbuSyhU9pF5KJhm3AxjicL" // default playlist
}) => {
  const [currentVideoId, setCurrentVideoId] = useState<string>("");
  const [playlistItems, setPlaylistItems] = useState<VideoItem[]>([]);

  // Note: In a production environment, you should move this to an environment variable
  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistUrl}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        const items = data.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        setPlaylistItems(items);
        if (items.length > 0 && !currentVideoId) {
          setCurrentVideoId(items[0].id);
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylistItems();
  }, [playlistUrl]);

  return (
    <Main>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <a href={`https://www.youtube.com/playlist?list=${playlistUrl}`} target="_blank" rel="noopener noreferrer" className="underline">
              <h1 className="text-sm">View Playlist on Youtube ↗️</h1>
            </a>
          </div>
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <div className="aspect-w-16 h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              {currentVideoId && (
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideoId}`}
                  title="YouTube video player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Playlist Section */}
          <div className="lg:col-span-1 text-black">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-4">Playlist</h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {playlistItems.map((video) => (
                  <div
                    key={video.id}
                    className={`flex gap-4 p-2 rounded-lg cursor-pointer transition-all hover:bg-gray-100 ${
                      currentVideoId === video.id ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => setCurrentVideoId(video.id)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-32 h-18 object-cover rounded"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-sm font-medium line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Music;
