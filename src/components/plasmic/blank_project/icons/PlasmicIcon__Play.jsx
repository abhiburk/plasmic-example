// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PlayIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M0 6.67C0 2.99 2.992 0 6.667 0c3.674 0 6.666 2.99 6.666 6.67 0 3.672-2.992 6.663-6.666 6.663C2.992 13.333 0 10.343 0 6.671zm9.112.675c.07-.07.16-.18.18-.206a.812.812 0 00-.013-.971 2.382 2.382 0 01-.05-.053c-.042-.046-.103-.113-.162-.172-.528-.566-1.905-1.492-2.626-1.775-.109-.045-.386-.142-.534-.148a.895.895 0 00-.405.096.834.834 0 00-.36.4 4.302 4.302 0 00-.116.469c-.071.38-.11.997-.11 1.678 0 .65.039 1.242.097 1.628a.76.76 0 01.016.072c.026.13.08.402.138.513a.81.81 0 00.715.437h.025c.193-.006.599-.173.599-.18.682-.283 2.027-1.164 2.567-1.75l.039-.038z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayIcon;
/* prettier-ignore-end */
