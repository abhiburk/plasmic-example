// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HeartIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 11"}
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
        d={
          "M8.728.161a3.246 3.246 0 00-1.034-.16 3.48 3.48 0 00-2.138.72C5.506.684 5.444.65 5.389.618 5.333.583 5.233.5 5.15.456L4.939.36a1.959 1.959 0 00-.35-.145.194.194 0 00-.05-.033h-.033A3.465 3.465 0 003.49 0h-.061c-.156 0-.31.01-.467.033h-.067a2.51 2.51 0 00-.493.117C.328.828-.411 3.078.217 5.045A7.185 7.185 0 001.889 7.71a21.163 21.163 0 003.539 2.755l.144.09.14-.084a21.367 21.367 0 003.516-2.756 7.07 7.07 0 001.672-2.67C11.517 3.078 10.778.828 8.728.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartIcon;
/* prettier-ignore-end */
