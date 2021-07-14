// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ActivityIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.036 2.281A3.354 3.354 0 0015 5.574v6.644c0 2.795-1.649 4.449-4.448 4.449H4.455C1.65 16.667 0 15.013 0 12.217V6.13c0-2.795 1.649-4.463 4.455-4.463h6.64c-.04.202-.06.408-.06.614zm-1.744 8.466l2.381-3.073v-.015a.629.629 0 00-.117-.87.609.609 0 00-.865.124L8.683 9.496l-2.286-1.8a.616.616 0 00-.872.117l-2.462 3.176a.6.6 0 00-.132.38.615.615 0 001.136.359l2.059-2.664 2.286 1.793a.616.616 0 00.88-.11z"
        }
        fill={"currentColor"}
      ></path>

      <circle
        opacity={".4"}
        cx={"14.583"}
        cy={"2.083"}
        fill={"currentColor"}
        r={"2.083"}
      ></circle>
    </svg>
  );
}

export default ActivityIcon;
/* prettier-ignore-end */
