import React from "react";

import BorderButton from "./BorderButton";

import img1 from "../assets/newsletter-1.jpg"
import img2 from "../assets/newsletter-2.jpg"
import img3 from "../assets/newsletter-3.jpg"
import avatar1 from "../assets/avatar-1.jpg"


const Newsletter = () => {
  let posts = [
    {
      url : img1,
      userName: "Beshteya",
      userAvatar: avatar1,
      title: "The Ultimate Guide to Traveling When You Have...",
      paragraph: "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…"
    },
    {
      url : img2,
      userName: "Beshteya",
      userAvatar: avatar1,
      title: "The Best Travel Insurance Companies for Seniors",
      paragraph: "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…"
    },
    {
      url : img3,
      userName: "Beshteya",
      userAvatar: avatar1,
      title: "18 Easy Steps for Planning Your Next Trip",
      paragraph: "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…"
    },
  ]
  return (
    <div className="bg-lightBlackClr">
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-white pb-5">
            Our Newsletter
          </div>
          <div className="text-left text-fontClrGrey font-semibold mb-10 w-full lg:w-3/4">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem.
          </div>
        </div>
        <BorderButton text="all publications" link="/" />
      </div>
      <div className="px-5">
        {posts.map(post=>(
          <div>
            <div>{post.url}</div>
            <div>
              <div>{post.userAvatar}</div>
              <div>{post.userName}</div>
            </div>
            <div>{post.title}</div>
            <div>{post.paragraph}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
