/*
 * @Description:
 * 左侧区域，矩形、圆形...
 */
import React, { useCallback } from 'react';
import { icons } from '../utils/data';

const Icons = () => {
  const onDragStart = useCallback((e, data) => {
    e.dataTransfer.setData('Meta2d', JSON.stringify(data));
  }, []);

  return (
    <div>
    <div className="left_aside" >
      <div className="icon-list" >
        { icons.map((icon) => {
          const { key, title, data } = icon;
          return (
            <div
              key = { key }
            >
              <i
                draggable
                className = { `iconfont icon-${ key }` }
                title = { title }
                onDragStart = { (e) => onDragStart(e, data) }
              ></i>
            </div>
          );
        }) }
      </div>

      <div className="icon-list" >
        { icons.map((icon) => {
          const { key, title, data } = icon;
          return (
            <div
              key = { key }
            >
              <i
                draggable
                className = { `iconfont icon-${ key }` }
                title = { title }
                onDragStart = { (e) => onDragStart(e, data) }
              ></i>
            </div>
          );
        }) }
      </div>



      <div className="link" >
        <a href = "http://2ds.le5le.com/">去官网</a>
      </div>
    </div>



    <div className="right_aside" >
      <div className="icon-list" >
        { icons.map((icon) => {
          const { key, title, data } = icon;
          return (
            <div
              key = { key }
            >
              <i
                draggable
                className = { `iconfont icon-${ key }` }
                title = { title }
                onDragStart = { (e) => onDragStart(e, data) }
              ></i>
            </div>
          );
        }) }
      </div>

      <div className="icon-list" >
        { icons.map((icon) => {
          const { key, title, data } = icon;
          return (
            <div
              key = { key }
            >
              <i
                draggable
                className = { `iconfont icon-${ key }` }
                title = { title }
                onDragStart = { (e) => onDragStart(e, data) }
              ></i>
            </div>
          );
        }) }
      </div>



      <div className="link" >
        <a href = "http://2ds.le5le.com/">去官网</a>
      </div>
    </div>
    </div>
  );
};

export default Icons;
