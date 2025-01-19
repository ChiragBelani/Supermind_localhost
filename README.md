# **Team Localhost**

Team Members: Chirag Belani, Chinmay Inamdar, Tanishka Singh, Anushka Waghmare

# **Automated Research and Trigger Finder (ART Finder) Documentation**

## **Overview**

ART Finder is an automated system designed to streamline the research and marketing content generation process. It combines data scraping, machine learning, and actionable insights to identify user pain points and provide strategic marketing suggestions. The integration of Langflow's Retrieval-Augmented Generation (RAG) agents allows the system to leverage vectorized datasets for advanced content analysis and recommendation generation.

---

## **Workflow Explanation**

### **1\. Data Sources**

The process begins by collecting data from the following sources:

* **YouTube**: Scrapes video descriptions, comments, and metadata for user opinions and trends.  
* **Reddit**: Gather data from posts, discussions, and comments to identify common pain points and discussions.  
* **Company’s Data**: Includes internal datasets, feedback forms, and existing customer insights.

---

### **2\. Web Scraping**

* **Purpose**: Automates the extraction of structured and unstructured data from the provided sources.  
* **Techniques**: Uses tools such as Beautiful Soup, Scrapy, or Selenium for scraping. For social platforms, APIs may also be used (e.g., YouTube Data API and Reddit API).  
* **Output**: Generates raw datasets containing user-generated content, competitor data, and industry-specific information.

---

### **3\. Vectorized Dataset**

* **Purpose**: Transforms raw textual data into vectorized representations to enable machine learning models to process them efficiently.  
* **Tools**: Uses pre-trained embeddings such as Sentence Transformers, OpenAI’s embeddings, or TF-IDF for textual representation.  
* **Storage**: Saves vectorized data in a database or vector database like Pinecone, Weaviate, or FAISS for efficient similarity searches.

---

### **4\. Langflow RAG Agent Integration**

* **What It Does**: The Langflow Retrieval-Augmented Generation (RAG) agent queries the vectorized dataset to generate insights and content recommendations based on the input context.  
* **Functions**:  
  * Identifies user pain points.  
  * Analyzes market trends in specific regions.  
* **Process**: The RAG agent retrieves relevant vectors and uses GPT or other LLMs to generate outputs tailored to marketing or user insight requirements.

---

### **5\. Identifying User Pain Points**

* **Objective**: Extract recurring problems, challenges, or feedback from users in the dataset.  
* **Implementation**:  
  * Sentiment Analysis: Understands the sentiment (positive, negative, or neutral) in user discussions.  
  * Clustering: Groups similar pain points to identify common themes.

---

### **6\. Market Analysis in Regions**

* **Objective**: Analyze the data to identify marketing trends and strategies in a given geographical area.  
* **Implementation**:  
  * Regional Categorization: Filters data based on location-specific keywords or tags.  
  * Competitor Benchmarking: Compares trends with competitor strategies to uncover market opportunities.

---

### **7\. Generating Analysis Reports**

* **Purpose**: Summarizes findings into a comprehensive report.  
* **Content**:  
  * Key user pain points.  
  * High-performing strategies by competitors.  
  * Suggested hooks, CTAs, and content formats.  
* **Visualization**: Uses graphs, word clouds, and sentiment analysis to make data comprehensible.

---

### **8\. Social Media/Product Integration**

* **Purpose**: Links the insights with the company’s social media or product strategy.  
* **Applications**:  
  * Social Media Campaigns: Develops targeted campaigns based on user feedback and pain points.  
  * Product Improvement: Suggests features or changes based on analyzed user data.

---

### **9\. Actionable Marketing Content Generation**

* **Objective**: Generates ready-to-use marketing content.  
* **Steps**:  
  * Content Suggestions: Provides hooks, CTAs, and solutions for marketing campaigns.  
  * Copywriting: Uses Google’s Gemini GPT integration for generating persuasive and user-centric ad copies.  
  * Creative Recommendations: Suggests banner themes, visuals, and layouts.

---

## **System Components**

### **1\. Data Collection Module**

* **Tools**: APIs, web scraping libraries (Beautiful Soup, Selenium, etc.).  
* **Input**: Data source URLs or API configurations.

### **2\. Data Processing Module**

* **Tools**:  
  * Text Cleaning: NLTK or SpaCy for cleaning and preprocessing text.  
  * Vectorization: Sentence Transformers or OpenAI embeddings for creating vectors.  
* **Output**: Vectorized dataset stored in a vector database.

### **3\. Langflow RAG Agent**

* **Description**: A retrieval-based language model integrated with the vector database for generating insights.  
* **Usage**: Employs LangChain workflows for querying and generating responses.

### **4\. Visualization Module**

* **Tools**: Matplotlib, Seaborn, Plotly, or D3.js for creating graphs and charts.  
* **Outputs**:  
  * Graphs showing user trends and pain points.  
  * Word clouds representing recurring themes.

### **5\. Marketing Content Generator**

* **Tools**: GPT-3.5/GPT-4 for generating ad copies, hooks, and campaign recommendations.

---

## **User Input Flow**

### **Step 1: Input Details**

The user provides:

* **Topic**: E.g., "Eco-friendly furniture."  
* **Target Audience**: E.g., "Urban millennials aged 25-35."  
* **Competitors**: E.g., "IKEA, Wayfair."  
* **Preferred Platforms**: E.g., "YouTube, Reddit, App Reviews."

### **Step 2: Analyze**

The system begins data scraping and analysis using the provided input.

### **Step 3: Dashboard Insights**

* Visualized insights and pain points.  
* Competitor analysis results.  
* Suggested strategies for marketing.

### **Step 4: Content Generation**

* The user selects "Generate Content" and specifies preferences like themes, CTAs, and visuals.  
* The system generates ad copies, banners, or reports.

---

## **Tech Stack**

### **Backend**

* **Language**: Javascript  
* **Database**: Datastax Astra DB for user inputs and processed data storage.

### **Frontend**

* **HTML** and **CSS** for visually appealing dashboard.

### **AI Integration**

* **Models**: Google’s Gemini.  
* **Libraries**: LangChain for RAG integration.

---

## **Future Enhancements**

* **Multi-language Support**: Expand analysis to non-English content.  
* **Real-time Updates**: Continuously scrape and update insights.  
* **Customization**: Allow users to set specific analysis goals or filters.

## **Unique Selling Point  (USP)/ Innovation**

Our initial idea for a unique selling point was to integrate an **automated ad banner creation feature**. This would take the output provided by **Gemini's insights**—including hooks, CTAs, and marketing content—and use it to generate customized ad banners. The banners would include tailored visuals, layouts, and text to suit specific target audiences and platforms, offering a seamless transition from insights to actionable marketing material.

However, due to **time constraints**, we won't be able to implement this feature in the current version. Despite this, it remains a promising enhancement for future iterations to make our platform truly stand out in the market.

<img width="466" alt="screenshot" src="https://github.com/user-attachments/assets/d7dc8bd7-f7b4-4163-afe7-67b39e4a9c4f" />


## **System Overview**

![diagram-export-1-19-2025-6_50_46-AM](https://github.com/user-attachments/assets/e572c45d-d0bf-4677-942a-5157aa203975)
