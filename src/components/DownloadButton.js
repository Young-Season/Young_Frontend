import React, { useRef } from 'react'
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

const DownloadButton = () => {
  const imageRef = useRef();

  const downloadImage = async () => {
    const canvas = await html2canvas(imageRef.current);
    canvas.toBlob((blob) => {
      saveAs(blob, 'me.png');
    });
  };

  return (
    <div>
      <div ref={imageRef}>
          <img src="https://example.com/image.jpg" alt="example"/>
          <p>이미지 설명</p>
      </div>
      <button onClick={downloadImage}>다운로드</button>
    </div>
  )
}

export default DownloadButton