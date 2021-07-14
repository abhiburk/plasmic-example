// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Activity2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M13.243 2.738a4.024 4.024 0 004.027 4.021c.245-.001.49-.025.73-.07v7.973C18 18.015 16.021 20 12.662 20H5.346C1.98 20 0 18.016 0 14.662V7.356C0 4.002 1.979 2 5.346 2h7.967c-.047.243-.07.49-.07.738zM11.15 12.897l2.858-3.688V9.19a.754.754 0 00-.14-1.045.73.73 0 00-1.039.15l-2.409 3.1-2.743-2.16a.74.74 0 00-1.047.14l-2.954 3.81a.72.72 0 00-.159.457.738.738 0 001.363.43l2.471-3.196 2.744 2.151a.74.74 0 001.055-.131z"
        }
        fill={"currentColor"}
      ></path>

      <circle
        opacity={".4"}
        cx={"17.5"}
        cy={"2.5"}
        r={"2.5"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Activity2Icon;
/* prettier-ignore-end */
