import React from 'react';
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react'; // Ensure you're using the right library
import { RxCross2 } from 'react-icons/rx';

const VideoModal = ({ open, handleOpen, videoId }) => {
  return (
    <Dialog open={open} size={"md"} handler={handleOpen}>
      <DialogHeader className="py-2">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-semibold">Videos</h1>
          <span
            onClick={handleOpen}
            className="p-2 font-bold rounded-full bg-orange-100 text-lg cursor-pointer"
          >
            <RxCross2 />
          </span>
        </div>
      </DialogHeader>
      <DialogBody className="h-[28rem] py-1 px-2 ">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </DialogBody>
    </Dialog>
  );
};

export default VideoModal;
