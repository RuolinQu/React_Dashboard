import React,{useRef,useEffect} from 'react';

import './home.scss';
import * as echarts from 'echarts';

import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import headerBg from '../images/header.png'
import { px } from '../shared/px'


export const Home = () => {
  
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}></header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2/>
        </section>
        <section className="bordered section2">
        </section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
