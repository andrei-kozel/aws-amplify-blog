import Image from "next/image";
import React from "react";

// card design: https://codepen.io/majid-omri/pen/GRmMvOW

const BlogCard = () => {
  return (
    <div className="flex h-[450px] bg-white rounded overflow-hidden shadow-lg">
      <div className="w-full md:w-2/3 rounded-t relative">
        <Image
          src="https://source.unsplash.com/collection/494263/800x600"
          class="h-full w-full shadow"
          alt="blog post"
          layout="fill"
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
            GETTING STARTED
          </p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            👋 Welcome fellow Tailwind CSS and Ghost fan
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            This starter template is an attempt to replicate the default Ghost
            theme Casper using Tailwind CSS and vanilla Javascript.
          </p>
        </div>

        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full mr-4 avatar relative overflow-hidden">
              <Image
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
                layout="fill"
              />
            </div>
            <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
