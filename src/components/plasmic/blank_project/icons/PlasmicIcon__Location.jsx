// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LocationIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 10"}
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
          "M1.766.468a3.445 3.445 0 013.517.03A3.665 3.665 0 017 3.63c-.025 1.27-.723 2.464-1.596 3.387a9.363 9.363 0 01-1.68 1.41.587.587 0 01-.203.072.41.41 0 01-.196-.06A9.258 9.258 0 01.906 6.168 4.64 4.64 0 010 3.567 3.58 3.58 0 011.766.468zm.631 3.63a1.19 1.19 0 001.099.748 1.17 1.17 0 00.841-.35c.224-.227.349-.536.348-.857a1.212 1.212 0 00-.731-1.122 1.173 1.173 0 00-1.297.26 1.227 1.227 0 00-.26 1.32z"
        }
        fill={"currentColor"}
      ></path>

      <ellipse
        opacity={".4"}
        cx={"3.5"}
        cy={"9.5"}
        rx={"2.5"}
        ry={".5"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default LocationIcon;
/* prettier-ignore-end */
