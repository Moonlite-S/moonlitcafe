'use client'

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { Divider } from "@nextui-org/divider";
import Link from 'next/link';
import React from 'react';
import burgerMenu from "/public/burgermenu.svg";
import Image, { StaticImageData } from 'next/image';
import { easeIn, motion } from "framer-motion";
import { MoonDivider } from '@/components/MiscComponents';

export default function NaviBar(){

  return (
    <Navbar shouldHideOnScroll className="navBarBG">

      <NavbarContent>
        <Image src={burgerMenu} alt="Moonlit Cafe" width={40} height={40}/>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 px-5" justify="center">
        <NavbarItem >
          <Link href="/#home"><p className="text-xl">Home</p></Link>
        </NavbarItem>
        <Divider orientation="vertical"/>
        <NavbarItem>
          <Link href="/products"><p className="text-xl">Products</p></Link>
        </NavbarItem>
        <Divider orientation="vertical"/>
        <NavbarItem>
         <Link href="/#mission"><p className="text-xl">Our Mission</p></Link>
        </NavbarItem>
        <Divider orientation="vertical"/>
        <NavbarItem>
          <Link href="/#contact"><p className="text-xl">Contact Us</p></Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="text">
        <Link href="/signUp"><p>Login / Sign Up</p></Link>
      </NavbarContent>

  </Navbar>
  );
};

// Home Main Section Components

/**
 * Main container for the Home page.
 * 
 * It must contain a HomeMainTextContainer and a HomeMainPhotoContainer to work correctly.
 * 
 * @param children
 * 
 */
export function HomeMainContainer({children}: {children:React.ReactNode}){
  return(
    <motion.div 
    whileInView={{opacity: 1, scale: 1}}
    transition={{ ease: "easeInOut", duration: 0.5}}
    initial={{opacity: 0, scale: 0.5}}
    viewport={{once: true}}>
      <div className="container mx-auto flex flex-row items-center justify-center my-5">
        {children}
      </div>
    </motion.div>
  )
}

/**
 * The text container for HomeMainContainer.
 * 
 * It must contain a HomeMainTextHeader and a HomeMainTextSubtext to work correctly.
 * 
 * @param children 
 */
export function HomeMainTextContainer({children}: {children:React.ReactNode}){
  return(
    <div className='basis-3/4 bg-secondary-700 text-center rounded-2xl py-16 pb-24'>
      {children}
    </div>
  )
}


/**
 * The header text for HomeMainTextContainer.
 * @param children
 */
export function HomeMainTextHeader({children}: {children:React.ReactNode}){
  return(
    <>
    <h1 className='homeH1'>{children}</h1>
    <MoonDivider />
    </>
  )
}

/**
 * The subtext for HomeMainTextContainer.
 * @param children
 */
export function HomeMainTextSubtext({children}: {children:React.ReactNode}){
  return(
    <p className='homep'>{children}</p>
  )
}

type HomeMainPhotoProps = {
  image: StaticImageData;
};

/**
 * The photo container for HomeMainContainer.
 * @param StaticImageData
 */
export function HomeMainPhotoContainer({image}: HomeMainPhotoProps){
  return(
    <div className='basis-1/4 flex items-center'>
      <Image src={image} alt="Picture of our Moon-Latte"/>
    </div>
  )
}