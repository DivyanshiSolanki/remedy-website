import React, { useEffect, useState } from 'react';
import './service.css'
import './youtube.css'

const FetchYouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState(''); // State for search query
  const apiKey = 'AIzaSyDwXU8uzEPwNKXJXXOa-y51IuYIUx3_Ld0'; // Replace with your YouTube Data API key

  useEffect(() => {
    const fetchVideos = async () => {
      if (!query) return; // Do not fetch if query is empty

      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&part=snippet,id&type=video&videoDuration=medium&order=date&maxResults=10`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        setError('An error occurred: ' + error.message);
      }
    };

    fetchVideos();
  }, [query, apiKey]); // Fetch videos when query changes

  const displayVideos = () => {
    return videos.map(video => (
      <div key={video.id.videoId} >
        {/* <h6>{video.snippet.title}</h6> */}
        <iframe
          width="100%"
          height="250"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ));
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <> 
    <div className="youtube mt-10">



  <h1 class="seaa">Search Any <br /> <span class="span">  Health Issue</span></h1>
      <input class="inp"
        type="search"
        placeholder="Search for videos"
        value={query}
        onChange={handleSearch}
      />
<br /><br /> <br />
      <div className="video">
     
      <div id="video-container">
        {displayVideos()}
      </div>
      {error && <div id="error-message" style={{ color: 'red' }}>{error}</div>}
      </div>


    </div>

<br /><br /><br /><br /><br /><br /><br /><br /><br />
</>

  );
};

export default FetchYouTubeVideos;

