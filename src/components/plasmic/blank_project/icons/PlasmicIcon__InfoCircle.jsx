// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InfoCircleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M0 5a4.999 4.999 0 1110 0c0 2.76-2.235 5-5 5-2.76 0-5-2.24-5-5zm4.56-1.895c0-.24.2-.44.44-.44s.435.2.435.44v2.21c0 .24-.195.435-.435.435a.44.44 0 01-.44-.435v-2.21zm.445 4.236a.44.44 0 01-.44-.44.437.437 0 01.875 0 .44.44 0 01-.435.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoCircleIcon;
/* prettier-ignore-end */
