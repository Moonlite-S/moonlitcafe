'use client';

import * as React from 'react';
import logo from "/public/logo.png"
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google';
import { motion } from 'framer-motion';
import { HomeMainContainer, HomeMainPhotoContainer, HomeMainTextContainer, HomeMainTextHeader, HomeMainTextSubtext } from '@/components/NaviBar';

const DancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
    <header className="flex min-h-screen flex-col items-center justify-between p-24 primaryGlow">
      <motion.div 
        animate={{opacity: 1, scale: 1}}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5}}
        initial={{opacity: 0, scale: 0.5}}>
          <Image src={logo} alt="Moonlit Cafe Logo" className='relative top-40'/>
      </motion.div>

      <motion.div 
        animate={{opacity: 1, scale: 1}}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 1.5}}
        initial={{opacity: 0, scale: 0.5}}>
          <h1 className={DancingScript.className + ' text-9xl font-bold text-center relative bottom-20 '}>Moonlit Cafe</h1>
      </motion.div>

      <motion.div 
        animate={{opacity: 1, scale: 1}}
        transition={{ ease: "easeInOut", duration: 2, delay: 2}}
        initial={{opacity: 0, scale: 1.5}}>
        <p className="text-2xl text-center relative bottom-14 text-primary-200 tracking-widest">
          A cozy place to relax and enjoy a warm drink.
        </p>
      </motion.div>
    </header>
    <main>

    <HomeMainContainer>
      <HomeMainTextContainer>
        <HomeMainTextHeader>
          Become Invigorated with our Moon-Latte
        </HomeMainTextHeader>
        <HomeMainTextSubtext>
          {"Introducing our out-of-this-world Moon-Latte! Dive into a celestial experience with every sip of this rich and creamy blend. Crafted with the finest ingredients and a touch of magic, our Moon-Latte is guaranteed to transport your taste buds to the stars. Embrace the cosmic flavors and treat yourself to a celestial delight today!"}
        </HomeMainTextSubtext>
      </HomeMainTextContainer>
      <HomeMainPhotoContainer image={logo}/>
    </HomeMainContainer>

    <HomeMainContainer>
      <HomeMainPhotoContainer image={logo}/>
      <HomeMainTextContainer>
        <HomeMainTextHeader>
          Our Best Sellers
        </HomeMainTextHeader>
        <HomeMainTextSubtext>
          {"Indulge in a world of flavor with our stellar lineup of coffee creations! From the smooth and velvety Galaxy Mocha to the bold and robust Solar Espresso, our collection offers something for every coffee lover. Elevate your mornings with the ethereal Moon-Latte, or savor the aromatic notes of the Nebula Cappuccino. Each sip is a journey through the cosmos, handcrafted with care and passion. Explore our celestial menu and discover your new favorite brew today!"}
        </HomeMainTextSubtext>
      </HomeMainTextContainer>
    </HomeMainContainer>

    <HomeMainContainer>
      <HomeMainTextContainer>
        <HomeMainTextHeader>
          Our Mission
        </HomeMainTextHeader>
        <HomeMainTextSubtext>
        {"At LunarCo., we are on a mission to elevate your coffee experience to celestial heights. As a small but passionate team of coffee enthusiasts, we pour our heart and soul into crafting unique and flavorful lattes that are out of this world. Our goal is to bring a touch of magic to your daily routine, one sip at a time. Join us on this cosmic journey as we strive to create moments of joy, connection, and discovery through our handcrafted beverages. Welcome to a universe of exceptional coffee experiences - welcome to LunarCo.!"}
        </HomeMainTextSubtext>
      </HomeMainTextContainer>
      <HomeMainPhotoContainer image={logo}/>
    </HomeMainContainer>

    <HomeMainContainer>
      <HomeMainPhotoContainer image={logo}/>
      <HomeMainTextContainer>
        <HomeMainTextHeader>
          Contact Us
        </HomeMainTextHeader>
        <HomeMainTextSubtext>
          {"Have a question or feedback? We'd love to hear from you! Reach out to us via e-mail, phone, or social media, and our team will be happy to assist you. Whether you're looking to learn more about our products, share your experience, or simply say hello, we're here to help. Join our cosmic community and connect with us today!"}
          {"\nE-mail: LunarCo123@moonlatte.com" + "\n" + 
          "Twitter: @LunarCo / Instagram: @LunarCo" + "\n" +
          "Phone: 123-456-7890" + "\n" +
          "Address: 123 Moonlight Ave, Lunar City, LC 12345"}
        </HomeMainTextSubtext>
      </HomeMainTextContainer>
    </HomeMainContainer>
    </main>

    <footer className='container mx-auto flex flex-row items-center justify-center py-10'>
      <p>Credits go here</p>
    </footer>
    </>
  );
}
