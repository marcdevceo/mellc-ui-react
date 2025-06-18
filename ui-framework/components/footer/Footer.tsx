import React from "react";
import clsx from "clsx";
import { BaseFooterProps } from "./types-footer";
import {
  bgColorClass,
  paddingClass,
  marginClass,
  textAlignClass,
  fontWeightClass,
  fontSizeClass,
  maxWidthClass,
  marginTopClass,
  paddingXClass,
  paddingYClass,
} from "../../theme";

import { FlexContainer } from "../containers";
import BodyText from "../typography/BodyText";
import CaptionText from "../typography/CaptionText";
import UIImage from "../images/UIImage";

const Footer: React.FC<BaseFooterProps> = ({
  children,
  bg = "accent",
  margin,
  mt,
  padding,
  px,
  py,
  companyName = "",
  logo = "",
  textAlign = "center",
  fontWeight = "bold",
  fontSize = "xs",
  maxWidth,
  ...rest
}) => {
  return (

    <footer
      className={clsx(
        bgColorClass[bg],
        mt && marginTopClass[mt],
        padding && paddingClass[padding],
        px && paddingXClass[px],
        py && paddingYClass[py],
        "flex justify-center",
        
      )}
      {...rest}
      >
      <FlexContainer
        flexDirection="column"
        gap="none"
        alignItems="center"
        padding="sm"
        className={clsx(
          "container",
          maxWidth && maxWidthClass[maxWidth],
          textAlignClass[textAlign],
          fontWeightClass[fontWeight]
        )}
      >
        <BodyText
          className={clsx(fontSizeClass[fontSize], textAlignClass[textAlign])}
        >
          &copy; {new Date().getFullYear()} {companyName}{" "}
          {logo ? (
            <UIImage
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="h-8 w-auto inline-block"
            />
          ) : null}{" "}
          All rights reserved.
        </BodyText>

        <CaptionText
          className={clsx(
            fontSizeClass.xs,
            (margin && marginClass[margin]) || "mt-2"
          )}
        >
          Built with ❤️ using Next.js and Custom UI-Framework/Tailwind CSS.
        </CaptionText>
      </FlexContainer>
      {children}
    </footer>
  );
}

export default Footer;