/*
 * @Description:
 * @Autor: Pony
 * @Date: 2021-09-12 14:02:29
 * @LastEditors: Pony
 * @LastEditTime: 2021-09-12 22:04:35
 */
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import imageClip from './image-clip.jpg'
import "./App.css";

export default () => {
  const clipAreaWrap = useRef(null) // 截图区域dom
  // const { init, cut, cancelCut, clipImgData } = clip()
  return (
    <>
      <div className="clip-area-warp">
        <img className="clip-area-example" src={imageClip} alt="" />
      </div>
      <div className="clip-img-area">
        {/* <img src={clipImgData} alt="" id="img" /> */}
      </div>
      <div className="operation">
        <button
          // onClick={() => {
          //   init(clipAreaWrap.current);
          //   cut(
          //     "https://cdn-tos.baohuaxia.com/obj/static-assets/433ed21f7f4a27a5bde94a8119d618c5.png"
          //   );
          // }}
        >
          截图
        </button>
        <button
          // onClick={() => {
          //   cancelCut();
          // }}
        >
          取消
        </button>
      </div>
    </>
  );
};
