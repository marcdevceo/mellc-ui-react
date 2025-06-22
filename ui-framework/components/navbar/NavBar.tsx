"use client";

import React from "react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavBarProps } from "./types-nav";

import {
  bgColorClass,
  paddingClass,
  marginClass,
  textColorClass,
  fontSizeClass,
  fontWeightClass,
  hoverClass,
  positionClass,
  insetClass,
  zIndexClass,
  heightClass,
  widthClass,
  displayClass,
  transitionClass,
} from "../../theme";

import { FlexContainer } from "../containers";
import { UILink } from "../links";
import UIImage from "../images/UIImage";
import MobileNav from "./MobileNav";

const NavBar: React.FC<NavBarProps> = ({
  children,
  bg = "accent",
  padding = "md",
  margin = "none",
  title = "",
  logo = "",
  titleHref = "/",
  logoHref = "#",
  links = [],
  ...rest
}) => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);


  return (
    <nav
      className={clsx(
        bgColorClass[bg],
        paddingClass[padding],
        marginClass[margin],
        positionClass.sticky,
        insetClass.top,
        insetClass.left,
        insetClass.right,
        zIndexClass.tooltip
      )}
      {...rest}
    >
      <FlexContainer alignItems="center" justify="between">
        {/* Logo or Title */}
        <FlexContainer
          className={clsx(
            fontSizeClass.xl,
            fontWeightClass.bold,
            textColorClass.primary
          )}
        >
          {logo ? (
            <UILink href={logoHref}>
              <UIImage
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className={clsx(heightClass.xl, widthClass.auto)}
              />
            </UILink>
          ) : title ? (
            <UILink
              href={titleHref}
              className={clsx(textColorClass.primary, hoverClass.textAccent)}
            >
              {title}
            </UILink>
          ) : null}
        </FlexContainer>

        {/* Desktop Navigation */}
        <FlexContainer
          justify="center"
          gap="md"
          className={clsx(displayClass.hidden, "md-flex")}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <UILink
                key={link.href}
                href={link.href}
                className={clsx(
                  transitionClass.base,
                  fontSizeClass.sm,
                  fontWeightClass.medium,
                  isActive
                    ? textColorClass.primary
                    : clsx(textColorClass.accent, hoverClass.textPrimary)
                )}
              >
                {link.label}
              </UILink>
            );
          })}
        </FlexContainer>

        {/* Mobile Navigation */}
        <MobileNav links={links} />
      </FlexContainer>

      {children}
    </nav>
  );
}

export default NavBar;
