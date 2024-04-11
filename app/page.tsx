"use client"

import Image from "next/image";
import {
  border,
  borderRandiusChange,
  downloadSvg,
  shadow,
  iconResize,
  opacity,
  processSVG,
  rotate,
  setBgColor,
  sizeChange,
  setColor,
  controlList,
} from "@/lib/common"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RgbaColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Camera, AArrowDown, AArrowUp, ALargeSmall } from "lucide-react";
import * as icons from 'lucide-react';
import { Input } from "@/components/ui/input"



export default function Home() {

  const [svgdata, setSvgData] = useState({})
  const downloadableZoneRef = useRef()

  useEffect(() => {
    let svg = `
    <?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M264.3 282.6c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.9-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2s7.5-3 12.7-10.2c5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zM264.3 232.6c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.9-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2s7.5-3 12.7-10.2c5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8z" fill="#9A2D2F" /><path d="M353.3 103m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#FFEB4D" /><path d="M353.3 143c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z m0-64c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z" fill="#9A2D2F" /><path d="M393.3 360.3h-80V179.2c0-7.7 6.2-13.9 13.9-13.9h52.1c7.7 0 13.9 6.2 13.9 13.9v181.1z" fill="#FFACC2" /><path d="M455.3 950.7h-204c-18.1 0-33-14.8-33-33v-432c0-74.2 60.7-135 135-135 74.2 0 135 60.7 135 135v432c0 18.2-14.8 33-33 33z" fill="#FFACC2" /><path d="M272.3 516.7h162v300h-162z" fill="#DAE5FF" /><path d="M434.3 824.7h-162c-4.4 0-8-3.6-8-8v-300c0-4.4 3.6-8 8-8h162c4.4 0 8 3.6 8 8v300c0 4.5-3.6 8-8 8z m-154-16h146v-284h-146v284z" fill="#9A2D2F" /><path d="M397.3 236.8h-88c-3.3 0-6-2.7-6-6v-20c0-3.3 2.7-6 6-6h88c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6z" fill="#DAE5FF" /><path d="M576.7 640.5c-66.2 0-126.3-54-119.9-120 1.3-12.9 10-51 10-51h219.8s8.1 38.1 9.3 51c6 66-53 120-119.2 120z" fill="#FFFFFF" /><path d="M696.1 520.8H456.8v0.3c-6.4 66 53.7 120 120 120s125.3-54 119.3-120v-0.3z" fill="#FFACC2" /><path d="M576.8 632.5c32.1 0 64.1-14 85.5-37.5 0.4-0.4 0.7-0.9 1.1-1.3-19.7 17.5-26.6 15.3-40.3 19.8-26.7 8.8-34.7-7.5-48.7-10-14.8-2.6-33 16.2-63 0.5-12-6.3-26.2-18.3-33.5-25.9 3.4 5.7 7.4 11.1 12.1 16.2 21.8 23.9 54.2 38.2 86.8 38.2z" fill="#FFFFFF" /><path d="M746.7 640.5c-66.2 0-126.3-54-119.9-120 1.3-12.9 10-51 10-51h219.8s8.1 38.1 9.3 51c6 66-53 120-119.2 120z" fill="#FFFFFF" /><path d="M865.9 520h-239v0.3C620.4 586.1 680.5 640 746.7 640c66.2 0 125.2-53.9 119.2-119.7v-0.3z" fill="#FFACC2" /><path d="M746.7 632.5c32.1 0 64-14 85.5-37.5 0.4-0.4 0.7-0.9 1.1-1.3-19.7 17.5-26.6 15.3-40.3 19.8-26.6 8.7-34.6-7.5-48.6-10-14.8-2.6-33 16.2-62.9 0.5-12-6.3-26.1-18.3-33.5-25.9 3.4 5.7 7.4 11.1 12.1 16.2 21.6 23.9 54 38.2 86.6 38.2zM321.3 244.8v101.6c10.3-2.4 21-3.6 32-3.6 2.4 0 4.9 0.1 7.3 0.2-12-12.9-26.8-25.3-27.6-51.3-0.3-10.4-0.7-29.6 3.1-46.9h-14.8zM311.3 212.8v16h29.9c3.1-6.7 7.2-12.3 12.8-16h-42.7zM327.2 173.3c-3.3 0-5.9 2.7-5.9 5.9v17.6h50.5c4.4-6.9 7.5-15.1 9.7-23.1-0.7-0.3-1.4-0.4-2.1-0.4h-52.2z" fill="#FFFFFF" /><path d="M951.3 716.7c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2s-7.5-3-12.7-10.2c-5.1-7.2-12-17-25.7-17-1.5 0-2.8 0.4-4 1.1v-36.2c1.2 0.7 2.5 1.1 4 1.1 5 0 7.5 3 12.7 10.2 5.1 7.2 12 17 25.7 17s20.7-9.8 25.7-17c5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 13.8 0 20.7-9.8 25.7-17 5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.6-8-8-8c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2s-7.5-3-12.7-10.2c-2.5-3.6-5.5-7.8-9.5-11.1 26.1-5.8 50.1-19.5 68.4-39.5 20.1-22 30.7-49.2 30.4-77.4 0-3-0.2-5.9-0.4-8.9v-0.4c0-0.1 0-0.3-0.1-0.4-1.5-14-9-49.4-9.3-50.9-0.8-3.7-4-6.3-7.8-6.3H494.2c-8.8-51.3-45-93.3-92.9-110.5V244.2c5.8-1.7 10-7.1 10-13.4v-20c0-6.3-4.2-11.7-10-13.4v-18.2c0-12.1-9.8-21.9-21.9-21.9h-52.1c-12.1 0-21.9 9.8-21.9 21.9v18.2c-5.8 1.7-10 7.1-10 13.4v20c0 6.3 4.2 11.7 10 13.4V351c-55.3 19.8-95 72.7-95 134.7v432c0 9.5 3.3 18.3 8.7 25.2H99.3c-4.4 0-8 3.6-8 8s3.6 8 8 8h824c4.4 0 8-3.6 8-8s-3.6-8-8-8h-168V704.3c1.2 0.7 2.5 1.1 4 1.1 5 0 7.5 3 12.7 10.2 5.1 7.2 12 17 25.7 17s20.7-9.8 25.7-17c5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 13.8 0 20.7-9.8 25.7-17 5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.6-7.9-8-7.9zM643.2 477.5h206.9c1.7 8.4 4.8 23.6 6.6 34.5H636.1c1.9-11 5.2-26.1 7.1-34.5zM490 594.3c-16.2-17.8-25.1-39.4-25.7-61.7v-3.7h154v2.2c0.2 26.9 10.6 52.8 29.9 74 0.5 0.5 1 1.1 1.5 1.6-20.4 16.4-46.7 25.8-73 25.8-32.6 0-65-14.3-86.7-38.2z m-1.8 21.2c-0.1-0.1-0.2-0.1-0.2-0.2 0 0.1 0.1 0.1 0.2 0.2z m-3.9-3.5l-0.5-0.5c0.2 0.1 0.3 0.3 0.5 0.5z m142.5-134.5s0-0.1 0 0c-2.1 9.7-5.4 24.9-7 35.3H466c1.9-11 5.3-26.7 7.2-35.3h153.6zM321.3 179.2c0-3.3 2.7-5.9 5.9-5.9h52.1c3.3 0 5.9 2.7 5.9 5.9v17.6h-64v-17.6z m-10 33.6h84v16h-84v-16z m74 32v101.6c-10.3-2.4-21-3.6-32-3.6s-21.7 1.3-32 3.6V244.8h64z m-159 240.9c0-33.8 13.3-65.6 37.3-89.7 13.1-13.1 28.4-22.9 45.1-29.2 14.1-5.3 29.1-8.1 44.5-8.1s30.5 2.8 44.5 8.1c16.7 6.3 32.1 16.2 45.1 29.2 18.2 18.2 30.2 40.9 35 65.4h-11.2c-3.7 0-7 2.6-7.8 6.2-0.4 1.6-8.9 38.7-10.2 52-0.4 3.9-0.5 7.8-0.5 11.6 0.1 27 10.5 53 29.9 74.3 0.7 0.8 1.4 1.5 2.1 2.3v309.8c0 13.8-11.2 25-25 25h-204c-13.8 0-25-11.2-25-25V485.7z m270 432.1V622.1c21 15.7 46.7 25.3 73 26.8V943h-81.7c5.4-7 8.7-15.7 8.7-25.2z m89 25.2V648.9c28.3-1.8 55.2-12.7 76.7-30.8 21.7 17.7 49.2 28.5 77.3 30.2V943h-154z m161.4-311c-32.5 0-64.9-14.2-86.6-38.1-17.1-18.8-26.1-41.9-25.7-65.7v-0.3h223.9v4.6c-0.8 22.6-9.8 44.3-26.1 62.1-21.5 23.5-53.5 37.4-85.5 37.4z" fill="#9A2D2F" /><path d="M253.3 407.7c1.8 2 3.6 4.1 5.3 6.3 29.2 38.8 67.5 18.9 77 10.5 17.5-15.5 39.4-20.6 74.2-11.8 18.7 4.8 26.1-5.7 29.8-20-12.3-11.4-26.4-20.2-41.7-25.9-14.1-5.3-29.1-8.1-44.5-8.1s-30.5 2.8-44.5 8.1c-16.7 6.3-32.1 16.2-45.1 29.2-3.9 3.8-7.3 7.6-10.5 11.7z" fill="#FFFFFF" /></svg>
  `
    const __svg = <ArrowDownToLine />
    console.log(__svg, '__svg123')
    console.log(svg, 'svg123')
    const { _svg, data } = processSVG(svg)
    setSvgData({ _svg, data })
  }, [])

  // Set all initial value
  useEffect(() => {
    const element = document.getElementById('inner-svg');
    const width = element?.getAttribute("width");
    if (width) {
      element?.setAttribute('width', `100%`)
      element?.setAttribute('height', `100%`)
    }
    updateDimensions();
  }, [svgdata._svg])


  const updateDimensions = () => {
    if (downloadableZoneRef.current) {
      const { width } = downloadableZoneRef.current.getBoundingClientRect()
      const e1 = document.getElementById('wrapper-svg');
      e1?.setAttribute('width', `${width}px`)
      e1?.setAttribute('height', `${width}px`)
    }
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [])

  function controlComponent(item: any) {
    switch (item.type) {
      case 'color':
        return (
          <RgbaColorPicker className="my-4 w-full" color={{ r: 255, g: 255, b: 255, a: 0 }} onChange={item._onChange} />
        )
      case 'range':
        return (
          <input
            type={item.type}
            min={item.min}
            max={item.max}
            defaultValue={item.defaultValue}
            step={item.step}
            className="w-full slider dark:bg-accent bg-gray-200"
            onChange={item._onChange} />
        )

      default:
        return null
    }
  }

  const html = { __html: svgdata._svg };

  return (
    <main className="min-h-screen">


      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Tabs defaultValue="icon" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="icon">Icon</TabsTrigger>
              <TabsTrigger className="w-full" value="background">Background</TabsTrigger>
            </TabsList>
            <TabsContent value="icon">

              <div className="grid grid-cols-4 gap-4">
                {svgdata?.data?.map((item) => (
                  <div key={item.id} style={{ backgroundColor: item.color }} className="cursor rounded-md border-solid border-gray-500 border-2">
                    <p>{item.id}</p>
                    <p>{item.color}</p>
                    <input type="color" id={`_color_${item.id}`} value={item.color} onChange={(e) => setColor(item.id, e.target.value)}></input>
                  </div>
                ))}
              </div>

              {(controlList()?.icon || []).map((item, index) => (
                <div key={index}>
                  <p className="flex justify-between">
                    {item.label}
                    <span id={item.label_id}>
                      {item.default_label_value}
                    </span>
                  </p>
                  {controlComponent(item)}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="background">
              {(controlList()?.bg || []).map((item, index) => (
                <div key={index}>
                  <p className="flex justify-between">
                    {item.label}
                    <span id={item.label_id}>
                      {item.default_label_value}
                    </span>
                  </p>
                  {controlComponent(item)}
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="col-span-2">
          {false && <div className="w-full h-full flex justify-center items-center bg-gray-100 bg-[url('/grid.svg')]">
            {svgdata?._svg &&
              <div dangerouslySetInnerHTML={html} ref={downloadableZoneRef} className="flex justify-center items-center w-4/5 h-4/5" />
            }
          </div>}

          <div>
            <Input onCloseAutoFocus={(e) => e.preventDefault()} />
          </div>

          <div className="grid md:grid-cols-8 grid-cols-4 gap-3 mt-4">
            {Object.keys(icons).map((item) => {
              // const componentName = Object.keys(icons)[item - 1];
              // const Component = icons[componentName];
              console.log(icons[item]?.render, 'componentName123')
              return (
                <div key={item} className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg flex justify-center items-center">
                  {/* <Component strokeWidth={1} size={50} /> */}
                  1
                </div>
              )
            })}
          </div>

        </div>
        <div className="col-span-1">
          <Button onClick={downloadSvg} variant="outline">
            <ArrowDownToLine className="mr-2 h-4 w-4" /> Download SVG
          </Button>
        </div>
      </div>










    </main >
  );
}
