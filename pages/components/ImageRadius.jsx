import React from 'react';
import Image from 'next/image';
import style from '@/styles/Image.module.css';

const ImageRadius = ({src, alt, width, height}) => {
    return (
        <Image className={style.img}
        src = {src}
        alt = {alt}
        width = {width}
        height = {height}
        />
    );
};

export default ImageRadius;