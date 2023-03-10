import { useState, useEffect } from 'react'
import style from './styles.module.scss'
import { Dots } from '../dots'
import { Image } from '../../types/ICard'

export const ImageSlider = ({ slides }: {slides: any}) => {
    const [ currIndex, setCurrIndex ] = useState(0)
    const goToSlide = (ind: any) => {
      setCurrIndex(ind)
    }
    const n = 3
  return (
    <div>
      <div className={style.hoverCont}>
        <div onMouseEnter={() => goToSlide(0)}></div>
        <div onMouseEnter={() => goToSlide(1)}></div>
        <div onMouseEnter={() => goToSlide(2)}></div>
      </div>
      <Dots slides={slides} currIndex={currIndex} goToSlide={goToSlide} n={n} />
    </div>
  );
};
