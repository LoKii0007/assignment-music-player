import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React , {useState, useEffect}from 'react'
import {Howl} from 'howler';

const Song = ({song, setActiveSong, activeSong, index, sound, setSound, isPlaying, setIsPlaying}) => {

  const {attributes, listeners, transform, setNodeRef, transition} = useSortable({id :index})

  const style = {
    transition, 
    transform : CSS.Transform.toString(transform)
  }

  function handleSong(song){
    if (sound) sound.stop() // Stop previous sound
    setActiveSong(song)

    const newSound = new Howl({
        src: [song.audio],
        html5: true, // Ensure playback works on all devices
    });
    newSound.play();
    setSound(newSound);
  }

  useEffect(() => {
    return () => {
        if(sound){
            sound.stop();
        }
    };
  }, [activeSong]);

  useEffect(()=>{}, [sound])

  return (
    <>
      {/* <div ref={setNodeRef} {...attributes} {...listeners} style={style}> */}
        <div onClick={(e)=>{
            e.stopPropagation()
            handleSong(song)
        }}
         className={`px-[12%] w-full flex items-center capitalize gap-2 hover:bg-[#520000b1] hover:border-[#ca0000cc] py-[6px] border-l-[7px] ${activeSong.title === song.title ? 'bg-[#520000] border-[#CA0000] ' : 'border-transparent'} `}>
          <div className="w-12 flex justify-center">{ activeSong.title === song.title ? <img src="./Playing.png" height={25} width={25} alt="" /> : index+1}</div>
          <div className="w-4/12 text-left flex items-center gap-4">
            <img src={song.thumbnail} width={40} alt="" />
             {song.title}
          </div>
          <div className="w-2/12 text-left ">{song.plays}</div>
          <div className="w-2/12 text-left ">{song.playing_time}</div>
          <div className="w-3/12 text-left overflow-x-hidden whitespace-nowrap ">{song.album}</div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Song