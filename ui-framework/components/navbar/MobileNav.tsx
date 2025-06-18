"use client";

import React from "react";
import { useState } from "react";
import clsx from "clsx";
import { MobileNavProps } from "./types-nav";
import { FlexContainer } from "../containers";
import Card from "../card/Card";
import UILink from "../links/UILink"; // ← framework-agnostic
import {
  bgColorClass,
  textColorClass,
  fontWeightClass,
  paddingClass,
  shadowClass,
  borderColorClass,
  colorVariantClass,
} from "../../theme";
import { XIcon, MenuIcon } from "../icons";

const MobileNav: React.FC<MobileNavProps> = ({ links = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={clsx(textColorClass.primary, "transition")}
        aria-label="Toggle mobile navigation"
      >
        {open ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Slideout Menu */}
      {open && (
        <div
          className={clsx(
            "absolute top-16 left-0 right-0 z-50 flex flex-col items-center gap-4 backdrop-blur-xl shadow-xl",
            paddingClass.md,
            bgColorClass.primary,
            borderColorClass.primary,
            "border-t",
            shadowClass.lg
          )}
        >
          {links.map((link) => (
            <UILink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="w-full"
            >
              <Card
                className={clsx(
                  "w-full text-center cursor-pointer transition-colors",
                  link.isActive
                    ? clsx(textColorClass.accent, fontWeightClass.semibold)
                    : clsx(colorVariantClass.accent)
                )}
                padding="sm"
                rounded
              >
                {link.label}
              </Card>
            </UILink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav; 
