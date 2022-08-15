import * as React from 'react';

function SvgMap(props) {
  return (
    <svg width={30} height={24} fill="none" viewBox="0 0 30 24" {...props}>
      <path d="M0 4.79479V22.8323C0 23.4219 0.595312 23.825 1.14271 23.6062L8.33333 20.3333V0.333328L1.04792 3.24739C0.738634 3.37109 0.473505 3.58462 0.286724 3.86043C0.099942 4.13624 7.40733e-05 4.46168 0 4.79479H0ZM10 20.3333L20 23.6667V3.66666L10 0.333328V20.3333ZM28.8573 0.393745L21.6667 3.66666V23.6667L28.9521 20.7526C29.2614 20.629 29.5266 20.4154 29.7134 20.1396C29.9002 19.8638 30 19.5383 30 19.2052V1.1677C30 0.57812 29.4047 0.174995 28.8573 0.393745Z" />
    </svg>
  );
}

export default SvgMap;
