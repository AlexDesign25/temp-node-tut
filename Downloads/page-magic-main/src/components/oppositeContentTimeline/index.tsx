'use client'
import React, { useState } from 'react';

import { Timeline, Bookmark } from '../vertical-progess-timeline';
import '../vertical-progess-timeline/style.css';
import '../../style.css';

const bigTitleStyle = "linearTitle text-4xl font-semibold";



export default function App() {
  const [stateClick, setStateClick] = useState(0);
  return (
    <div className="App" onClick={() => setStateClick(stateClick + 1)}>
      {/* {stateClick} */}
      <div className="container-timeline mt-[15%] ">
        <Timeline className="my-vertical-progress ">
          <Bookmark >
            <div className='flex  h-full justify-between p-5'>
              <div className='flex flex-col mt-10  space-y-2' >
                <h2 className={bigTitleStyle}>Idea</h2>
                <p>Turning an idea into <br />
                  actionable steps</p>
              </div>
              <div className='flex justify-end h-100 items-end'>
                <span className='numberStyle'>1</span>
              </div>
            </div>
          </Bookmark>
          <Bookmark>
            <div className='flex flex-row-reverse h-full justify-between p-5'>
              <div className='flex flex-col mt-10  space-y-2' >
                <h2 className={bigTitleStyle}>Project specs</h2>
                <p>Turning an idea into <br/>
                  actionable steps</p>
              </div>
              <div className='flex justify-end h-100 items-end'>
                <span className='numberStyle'>2</span>
              </div>
            </div>
          </Bookmark>
          <Bookmark>
            <div className='flex  h-full justify-between p-5'>
              <div className='flex flex-col mt-10  space-y-2' >
                <h2 className={bigTitleStyle}>Design</h2>
                <p>Turning an idea into <br />
                  actionable steps</p>
              </div>
              <div className='flex justify-end h-100 items-end'>
                <span className='numberStyle'>3</span>
              </div>
            </div>
          </Bookmark>
          <Bookmark>
            <div className='flex  h-full justify-between p-5'>
              <div className='flex flex-col mt-10  space-y-2' >
                <h2 className={bigTitleStyle}>Development</h2>
                <p>Turning an idea into <br />
                  actionable steps</p>
              </div>
              <div className='flex justify-end h-100 items-end'>
                <span className='numberStyle'>4</span>
              </div>
            </div>
          </Bookmark>
          <Bookmark>  <div className='flex  h-full justify-between p-5'>
            <div className='flex flex-col mt-10  space-y-2' >
              <h2 className={bigTitleStyle}>Project Launch</h2>
              <p>Turning an idea into <br />
                actionable steps</p>
            </div>
            <div className='flex justify-end h-100 items-end'>
              <span className='numberStyle'>5</span>
            </div>
          </div></Bookmark>
          <Bookmark>
            <div className='flex  h-full justify-between p-5'>
              <div className='flex flex-col mt-10  space-y-2' >
                <h2 className={bigTitleStyle}>SEO</h2>
                <p>Turning an idea into <br />
                  actionable steps</p>
              </div>
              <div className='flex justify-end h-100 items-end'>
                <span className='numberStyle'>6</span>
              </div>
            </div>          </Bookmark>
          <Bookmark>
            <div className='flex  h-full justify-between p-5'>
              <div className='flex flex-col mt-10  space-y-2' >
                <h2 className={bigTitleStyle}>Maintenance</h2>
                <p>Turning an idea into <br />
                  actionable steps</p>
              </div>
              <div className='flex justify-end h-100 items-end'>
                <span className='numberStyle'>7</span>
              </div>
            </div>
          </Bookmark>
        </Timeline>
      </div>
    </div>
  );
}
