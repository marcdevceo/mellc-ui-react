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
  positionClass,
  insetClass,
  zIndexClass,
  displayClass,
  flexDirectionClass,
  alignItemsClass,
  gapClass,
  widthClass,
  textAlignClass,
  hoverClass,
  transitionClass,
} from "../../theme";
import { XIcon, MenuIcon } from "../icons";

const MobileNav: React.FC<MobileNavProps> = ({ links = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md-hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={clsx(textColorClass.primary, transitionClass.base)}
        aria-label="Toggle mobile navigation"
      >
        {open ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Slideout Menu */}
      {open && (
        <div
          className={clsx(
            positionClass.absolute,
            insetClass.top,
            insetClass.left,
            insetClass.right,
            zIndexClass.tooltip,
            displayClass.flex,
            flexDirectionClass.column,
            alignItemsClass.center,
            gapClass.md,
            "backdrop-blur-xl",
            paddingClass.md,
            bgColorClass.primary,
            borderColorClass.primary,
            "border-t",
            shadowClass.xl
          )}
        >
          {links.map((link) => (
            <UILink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={widthClass.full}
            >
              <Card
                className={clsx(
                  widthClass.full,
                  textAlignClass.center,
                  hoverClass.pointer,
                  transitionClass.base,
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
