import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useEffect } from "react";
import Song from "./Song";

const SongsQueue = ({ songs, setActiveSong, activeSong, sound, setSound, isPlaying, setIsPlaying }) => {

  useEffect(()=>{
   console.log(activeSong)
  }, [ activeSong])

  return (
    <>
      <div className="song-home w-full h-full flex flex-col gap-4 ">
        <div className="que-top h-[8vh] flex justify-center items-center px-12 gap-5 text-center">
          <div className="flt-left grid grid-cols-4 w-1/2 ">
            <div>Music</div>
            <div>Podcast</div>
            <div>Live</div>
            <div>Radio</div>
          </div>
          <div className="flt-right w-1/2 bg-[#2C0000] flex justify-start rounded-full py-2">
            <input
              type="text"
              placeholder="Michael jackson"
              className="bg-[#2C0000] mx-1 px-2 focus:ring-0 text-[#F6F6F6] "
            />
          </div>
        </div>
        <div className="que-body h-[40vh] px-[12%] flex justify-center items-end relative">
          <div className="relative flex items-center banner rounded-3xl w-full h-[75%] ">
            <div className="flex flex-col ps-12">
              <div className="flex items-center text-sm font-medium gap-2">
                <img src="./Verified.png" width={30} height={30} alt="" />
                Verified artist
              </div>
              <div className="text-4xl pb-6">Michael Jackson</div>
              <div className="text-sm">27.852.501 monthly listeners</div>
            </div>
          </div>
          <img
            src="./Michael.png"
            className="absolute right-[20%] w-[400px] "
            alt=""
          />
        </div>
        <div className="que-bottom h-[40vh] w-full">
          <div className="px-[12%] flex justify-between items-center border-transparent border-l-[7px] py-6 font-semibold ">
            <div className="text-2xl">Popular</div>
            <div className="">See all</div>
          </div>
          <div>
            <div className="px-[12%] w-full flex gap-2 border-transparent border-l-[7px] py-[6px] font-semibold text-[#CFC5C5]">
              <div className="w-12 text-center">#</div>
              <div className="w-4/12 flex gap-4 items-center ">
                <div className="h-10 w-10 bg-transparent"></div>
                TITLE
              </div>
              <div className="w-2/12">PLAYING</div>
              <div className="w-2/12">TIME</div>
              <div className="w-3/12 text-right">ALBUM</div>
            </div>

            <DndContext collisionDetection={closestCorners}>
              <div className="w-full flex flex-col overflow-y-auto">
                <SortableContext
                  items={songs}
                  strategy={verticalListSortingStrategy}
                >
                  {songs?.map((song, index) => (
                    <Song
                      key={index}
                      index={index}
                      song={song}
                      activeSong={activeSong}
                      setActiveSong={setActiveSong}
                      sound={sound}
                      setSound={setSound}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                    />
                  ))}
                </SortableContext>
              </div>
            </DndContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongsQueue;
