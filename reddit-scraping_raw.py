import requests
import pandas as pd
import time

def fetch_reddit_data(subreddit, start_date, end_date, limit=13000):
    base_url = "https://api.pushshift.io/reddit/search/submission/"
    all_posts = []
    params = {
        "subreddit": subreddit,
        "after": start_date,
        "before": end_date,
        "size": 500,  # size in one go
    }
    
    while len(all_posts) < limit:
        response = requests.get(base_url, params=params)
        if response.status_code != 200:
            print(f"Error: {response.status_code}")
            break
        
        data = response.json()["data"]
        if not data:
            print("No more data available.")
            break

        for post in data:
            all_posts.append({
                "id": post.get("id"),
                "url": post.get("url"),
                "title": post.get("title"),
                "text": post.get("selftext"),
                "score": post.get("score"),
                "created_utc": post.get("created_utc"),
                "subreddit": post.get("subreddit"),
                "num_comments": post.get("num_comments"),
                "upvote_ratio": post.get("upvote_ratio"),
                "over_18": post.get("over_18"),
            })

        params["after"] = data[-1]["created_utc"]
        time.sleep(1) 

        if len(all_posts) >= limit:
            break

    return pd.DataFrame(all_posts[:limit])

subreddit = "Python" 
start_date = int(time.time()) - (3 * 30 * 24 * 60 * 60)  # 3 months codin
end_date = int(time.time()) 

reddit_data = fetch_reddit_data(subreddit, start_date, end_date, limit=13000)

reddit_data.to_csv("reddit_data_raw_13000.csv", index=False)
print("hello")
