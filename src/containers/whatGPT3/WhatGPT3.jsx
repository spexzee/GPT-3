import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';


const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3 ?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio, quibusdam officia cumque, numquam consectetur ullam. Ipsam doloribus perspiciatis dolorum aspernatur eligendi, expedita corrupti?" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibility are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio, quibusdam officia cumque, numquam consectetur ullam." />
        <Feature title="Knowladgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio, quibusdam officia cumque, numquam consectetur ullam." />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio, quibusdam officia cumque, numquam consectetur ullam." />
      </div>
    </div>
  )
}

export default WhatGPT3