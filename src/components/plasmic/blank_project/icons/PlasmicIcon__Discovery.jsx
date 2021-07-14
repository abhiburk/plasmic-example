// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DiscoveryIcon(props) {
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
          "M0 10C0 4.48 4.47 0 10 0c5.52 0 10 4.48 10 10 0 5.53-4.48 10-10 10-5.53 0-10-4.47-10-10zm12.23 1.83l1.62-5.12a.45.45 0 00-.56-.57l-5.12 1.6c-.21.07-.38.23-.44.44l-1.6 5.13c-.11.34.22.67.56.56l5.1-1.6c.21-.06.38-.23.44-.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DiscoveryIcon;
/* prettier-ignore-end */
