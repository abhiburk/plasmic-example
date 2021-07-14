// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UnlockIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 14"}
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
          "M3.15 4.474h5.337c1.572 0 2.846 1.246 2.846 2.784v3.292c0 1.537-1.274 2.783-2.846 2.783H2.845C1.275 13.333 0 12.087 0 10.55V7.258c0-1.265.867-2.32 2.047-2.66l-.074.01V3.59C1.987 1.611 3.633 0 5.653 0 7.23 0 8.625.975 9.14 2.419a.563.563 0 01-.028.444.604.604 0 01-1.097-.066C7.67 1.816 6.723 1.16 5.666 1.16c-1.383 0-2.5 1.087-2.507 2.418v.895l-.008.001zm2.513 5.745a.586.586 0 00.596-.583V8.165a.585.585 0 00-.596-.577.583.583 0 00-.59.577v1.47c0 .326.265.584.59.584z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnlockIcon;
/* prettier-ignore-end */
