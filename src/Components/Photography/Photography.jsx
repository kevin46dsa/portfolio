import React from 'react';
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: '100%',
  height: ['250px', '250px'],
  layout: [1, 4],
  photos: [
    { source: 'https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01197.JPG?alt=media&token=b87a97f3-9a1c-4458-9c54-0bc00b65ec42' },
    { source: 'https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01230.JPG?alt=media&token=52f564bd-b03c-49ad-93a6-878caa193f3d' },
    { source: 'https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01360.jpg?alt=media&token=e4c1b3f1-0818-42e7-9d23-a8e291cfb218' },
    { source: 'https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01367.jpg?alt=media&token=c7468f0e-53cd-42cb-a233-451e31f3b695' },
    
  ],
  showNumOfRemainingPhotos: true
};

function Photography() {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Here is a gallery of all my photos</h1>
        <br/>
        <h2 style={{textAlign:'center'}}>USA <span role='img' aria-label='United States Flag'>🇺🇸</span></h2>
    <ReactPhotoCollage {...setting} />
    
    </div>
  );
}

export default Photography;