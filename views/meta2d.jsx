/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2021-10-11 16:56:45
 * @LastEditTime: 2021-10-12 11:46:58
 */
import React, { useEffect } from 'react';
import { Meta2d } from '@meta2d/core';

export function triangle(pen, ctx) {
  const path = !ctx ? new Path2D() : ctx;
  const { x, y, width, height } = pen.calculative.worldRect;
  path.moveTo(x, y);
  path.lineTo(x+width, y);
  path.lineTo(x, y+height);
  path.lineTo(x + width, y + height);

  path.closePath();
  if (path instanceof Path2D) return path;
}


export function triangleAnchors(pen) {
  const anchors = [];
  anchors.push({
    id: '0',
    penId: pen.id,
    x: 0.5,
    y: 0,
  });

  anchors.push({
    id: '1',
    penId: pen.id,
    x: 1,
    y: 1,
  });

  anchors.push({
    id: '2',
    penId: pen.id,
    x: 0,
    y: 1,
  });
  pen.anchors = anchors;
}

const Meta2dContainer = () => {
  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    // window.meta2d.resize(200, 200); 调节整个画布的大小

    // 1. 编写图形绘画函数
// 其中，calculative.worldRect为canvas的世界坐标。更多信息，参考 “架构” - “概要” 和 Pen 相关文档
// 形参 ctx 仅仅在 downloadSvg 时有值
// 2. 如果需要，编写锚点函数。通常，可以使用默认锚点，然后通过快捷键动态添加锚点
// 注意，锚点左边为相对宽高的百分比小数（0-1之间的小数）

// 3. 注册图形
// 参数 {key: fn}。key为图形唯一name，否则覆盖原来图形，fn为相关函数
meta2d.register({ triangle });
meta2d.registerAnchors({ triangle: triangleAnchors });

// 4. 开始使用
const pen = {
  name: 'triangle',
  text: '输入名称',
  x: 100,
  y: 100,
  width: 50,
  height: 100,
};
meta2d.addPen(pen);
meta2d.inactive();
  }, []);

  return (
    <div className='main' >
      <div className="meta2d" id="meta2d"></div>
    </div>
  );
};

export default Meta2dContainer;