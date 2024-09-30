import React, { useState, useEffect } from "react";

const userName = "shubo_kobir";
const apiKey = "bd456b17c4842a4e18b5b0804a26754a";

export const LastFmData = () => {
  const [lfmData, setLfmData] = useState(null); // Initialize with null for easier checks
  const [isPlaying, setIsPlaying] = useState(false); // State to check if a track is playing
  const [error, setError] = useState(""); // Error state

  // Fetch data from Last.fm API
  useEffect(() => {
    const fetchLastFmData = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Log the data to inspect

        const track = data?.recenttracks?.track?.[0]; // Get the first track from the response
        setIsPlaying(track?.["@attr"]?.nowplaying === "true"); // Check if the track is playing
        setLfmData(track); // Update the lfmData with the track info
      } catch (err) {
        console.error(err); // Log the error
        setError("Whoops! Something went wrong with Last.fm");
      }
    };

    fetchLastFmData();
  }, []); // Only run this effect once on component mount

  // Render the Last.fm data
  const renderLastFmData = () => {
    if (error) {
      return <p>{error}</p>;
    }

    if (!lfmData) {
      return <p>Loading...</p>; // Display loading while fetching data
    }

    // Destructure the necessary fields from the fetched track
    const { name: songName, artist = {}, image = [] } = lfmData;
    const artistName = artist["#text"] || "Unknown Artist"; // use this in case artist name is missing
    const trackImage = image.find((img) => img.size === "large")?.["#text"]; // Get large album art

    return (
      <div className="border-2 border-gray-950 h-[95%] lg:h-96 rounded-xl p-4 flex justify-between items-center">
        <div className="flex justify-stretch flex-col h-full">
          <h3 className="text-sm sm:text font-semibold lg:text-2xl">Currently listening to:</h3>
          <h3 className="text-xl font-bold text-wrap my-5 lg:text-4xl lg:mt-32 text-pink-500">
            {songName} by {artistName} {isPlaying && "(Now Playing)"}
          </h3>
        </div>
        {trackImage ? (
          <img
            src={trackImage}
            alt={`${songName} album art`}
            className="rounded-lg w-auto h-30 object-cover"
          />
        ) : (
          <p>No album art available</p>
        )}
      </div>
    );
  };

  return <div>{renderLastFmData()}</div>;
};
