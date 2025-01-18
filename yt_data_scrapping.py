from googleapiclient.discovery import build
import pandas as pd

API_KEY = 'HAHA, Better luck next time'
youtube = build('youtube', 'v3', developerKey=API_KEY)

def fetch_video_statistics(video_ids):
    video_data = []
    video_response = youtube.videos().list(
        part="statistics, snippet",
        id=",".join(video_ids)
    ).execute()

    for item in video_response.get("items", []):
        stats = item["statistics"]
        snippet = item["snippet"]

        video_data.append({
            "author": snippet.get("channelTitle", "Unknown"),
            "author_channel_url": f"https://www.youtube.com/channel/{snippet['channelId']}",
            "author_profile_image": snippet.get("thumbnails", {}).get("default", {}).get("url", "Unknown"),
            "video_title": snippet.get("title", "Unknown"),
            "likes": stats.get("likeCount", 0),
            "published_at": snippet.get("publishedAt", "Unknown"),
            "total_views": stats.get("viewCount", 0),
            "total_likes": stats.get("likeCount", 0)  
        })

    return video_data

def scrape_youtube_video_stats(video_ids):
    video_stats = fetch_video_statistics(video_ids)
    if not video_stats:
        print("Invalid video IDs or no data available.")
        return
    df = pd.DataFrame(video_stats)
    df.rename(columns={
        "video_title": "comment"
    }, inplace=True)
    output_file = "yt_nov24_scrap.csv"
    df.to_csv(output_file, index=False)
    print(f"Video statistics saved to {output_file}")

VIDEO_IDS = [
    "VIDEO_ID_1",
    "VIDEO_ID_2",
    "VIDEO_ID_3"
]

scrape_youtube_video_stats(VIDEO_IDS)
print('Hello')
