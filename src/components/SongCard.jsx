import React, { useState, useEffect } from "react";
import { Howl } from "howler";

const SongCard = ({ setSound, sound, activeSong, setActiveSong, songs, isPlaying, setIsPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0); // New state for current time

  // Handle Play/Pause Toggle
  const handlePlayPauseToggle = () => {
    if (isPlaying) {
      sound?.pause();
      setIsPlaying(false);
    } else {
      if (!sound) {
        const newSound = new Howl({
          src: [activeSong.audio],
          html5: true,
          onplay: () => setIsPlaying(true),
          onend: () => handleNext()
        });
        newSound.play();
        setSound(newSound);
      } else {
        sound.play();
      }
      setIsPlaying(true);
    }
  };

  // Update slider and time display as song progresses
  useEffect(() => {
    if (isPlaying && sound) {
      const interval = setInterval(() => {
        const seekTime = sound.seek();
        const duration = sound.duration();
        setCurrentTime(seekTime); // Update the current time display
        setProgress((seekTime / duration) * 100); // Update slider progress
      }, 1000);

      // return () => clearInterval(interval);
    }
  }, [isPlaying, sound, activeSong]);

  // Seek to position when slider is moved
  const handleSliderChange = (e) => {
    const newPosition = (e.target.value / 100) * sound.duration();
    sound.seek(newPosition);
    setProgress(e.target.value);
    setCurrentTime(newPosition);
  };

  // Handle Next Song
  const handleNext = () => {
    const currentIndex = songs.findIndex((s) => s.title === activeSong.title);
    const nextIndex = (currentIndex + 1) % songs.length;
    setActiveSong(songs[nextIndex]);
    if (sound) sound.stop();
    const newSound = new Howl({
      src: [songs[nextIndex].audio],
      html5: true,
    });
    newSound.play();
    setSound(newSound);
    setIsPlaying(true);
  };

  // Handle Previous Song
  const handlePrev = () => {
    const currentIndex = songs.findIndex((s) => s.title === activeSong.title);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setActiveSong(songs[prevIndex]);
    if (sound) sound.stop();
    const newSound = new Howl({
      src: [songs[prevIndex].audio],
      html5: true,
    });
    newSound.play();
    setSound(newSound);
    setIsPlaying(true);
  };

  useEffect(()=>{

  }, [currentTime, sound])

  return (
    <>
      <div className="card flex bg-[#6B0000] flex-col gap-4 w-full px-5 py-4 mt-2 rounded-2xl">
        <div className="card-head text-center text-sm">Now playing</div>
        <div className="song-img h-[125px] overflow-hidden rounded-xl">
          <img height={125} src={activeSong.img} className="rounded-xl" alt="" />
        </div>
        <div className="song-name flex flex-col w-full text-center">
          <div className="text-[18px] font-semibold">{activeSong.title}</div>
          <div className="text-xs">{activeSong.author}</div>
        </div>
        <div className="player flex gap-2 justify-between items-center">
          <div className="cur-time">
            {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, "0")}
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSliderChange}
            className="live-player h-[2px] w-full"
          />
          <div className="end-time">{activeSong.playing_time}</div>
        </div>
        <div className="controls flex justify-between w-full gap-5 px-2 items-center pt-3 ">
          <div>
            <img src="./Repeat.png" alt="" />
          </div>
          <div className="w-2/3 flex justify-between gap-3 px-2">
            <button onClick={handlePrev}><img src="./Back.png" className="h-9 w-9" alt="" /></button>
            <button onClick={handlePlayPauseToggle}>
              <img src={isPlaying ? "./Pause.png" : "./Play.png"} className="h-9 w-9 bg-red-800 p-1 rounded-md " alt="" />
            </button>
            <button onClick={handleNext}><img src="./Next.png" className="h-9 w-9" alt="" /></button>
          </div>
          <div>
            <img src="./Random.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SongCard;
