"use client"
import React, { MutableRefObject, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../public/logoa3-1.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import students from "../public/test1.jpg"

export const links = [
  "ANASAYFA",
  "AMAÇLAR",
  "PROGRAMIMIZ",
  "SAATLER VE GRUPLAR",
];
type AppBarProps = {
  //refs: MutableRefObject<HTMLDivElement | null>[];
  ids: string[];
};

const AppBar = (props: AppBarProps) => {
  const router = useRouter();
  // const onClick = (ref: MutableRefObject<HTMLDivElement | null>) => {
  //   router.push('/#1')
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    console.log(router);
  }, [router]);

  const phoneNumber = "+905304928735";

  const handlePhoneClick = () => {
    const phoneLink = "tel:" + phoneNumber;
    window.location.href = phoneLink;
  };

  const handleInstaClick = () => {
    const link =
      "https://www.instagram.com/les_ptits_dimanches?igsh=cGgyOHpwcnpseDM=";
    window.open(link, "_blank");
  };

  return (
    <div>
      <div className="">
        <div className="relative">
          <div className="bg-lesptit-header h-1"></div>
          <div className="bg-white hidden md:flex gap-6 w-full py-5 px-10">
            <div>
              <Image src={logo} alt="logo" className="w-24 hover:cursor-pointer" onClick={() => router.push('/#hero')}/>
            </div>
            <div className="flex gap-10 items-center w-full justify-center">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:text-lesptit-header font-bold text-[#666] hover:scale-110 text-lg"
                  //onClick={() => onClick(props.refs[index])}
                >
                  <Link href={`/#${props.ids[index]}`}>{link}</Link>
                </div>
              ))}
            </div>
            <div className="md:flex gap-7 hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={30}
                onClick={handleInstaClick}
                className="cursor-pointer"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={30}
                onClick={handlePhoneClick}
                className="cursor-pointer"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              
            </div>
          </div>
          <div className="bottom-separator z-10 hidden md:block"></div>
        </div>
      </div>

      <div>
        <div className="relative">
        <div className=" p-3 flex flex-col md:hidden justify-center items-center w-full bg-white">
        <div>
              <Image src={logo} alt="logo" className="w-auto h-28"/>
            </div>
            <div className="mt-3 flex gap-6">
            <Menu as="div" className="relative inline-block z-20 text-center">
          <Menu.Button className="inline-flex w-full justify-center py-2 text-sm font-medium focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -left-10 mt-2 w-56 origin-top-right rounded-md bg-white focus:outline-none">
              {links.map((link, index) => (
                <Link href={`/#${props.ids[index]}`} key={index} className="py-1 px-1 cursor-pointer">
                  <Menu.Item key={index}><div className="">{link}</div></Menu.Item>
                </Link>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={27}
                onClick={handleInstaClick}
                className="cursor-pointer"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={27}
                onClick={handlePhoneClick}
                className="cursor-pointer"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
      </div>
      <div className="bottom-separator z-10 block md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;