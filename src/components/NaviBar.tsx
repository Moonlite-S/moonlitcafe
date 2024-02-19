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

export default function NaviBar(){

  return (
    <Navbar shouldHideOnScroll className="bg-secondary-900">

      <NavbarBrand >
        <h1>Moonlit Cafe</h1>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 px-5" justify="center">
        <NavbarItem isActive>
          <Link href="/"><p>Home</p></Link>
        </NavbarItem>
        <Divider orientation="vertical"/>
        <NavbarItem>
          <Link href="#"><p>Products</p></Link>
        </NavbarItem>
        <Divider orientation="vertical"/>
        <NavbarItem>
          <Link href="#"><p>Our Mission</p></Link>
        </NavbarItem>
        <Divider orientation="vertical"/>
        <NavbarItem>
          <Link href="#"><p>Contact Us</p></Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="text">
        <p>Login / Sign Up</p>
      </NavbarContent>

  </Navbar>
  );
};