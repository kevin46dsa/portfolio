import React from "react";
import GoodreadsBookshelf from "react-goodreads-shelf";

export default function Bookshelf2() {
  return (
    <div className='bookshelf-page'>
    <h1>Welcome to my Bookshelf</h1>    
    <h2>Currently Reading</h2>
    <GoodreadsBookshelf   shelf="currently-reading"   userId="164565714"  displayOptions="" subtitle={undefined}/>
    <h2>Finished</h2>
    <GoodreadsBookshelf   shelf="read"   userId="164565714"  />
    <h2>To Read</h2>
    <GoodreadsBookshelf   shelf="to-read"   userId="164565714" />
    </div>
  );
}