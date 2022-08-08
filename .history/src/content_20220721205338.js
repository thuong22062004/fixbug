import {useState,useEffect,memo}from 'react'
function Content() {
  console.log('re-render')
    return (
      <div className="title">
        <h1>Hi em</h1>
      </div>
    );
  }
export default memo(Content);