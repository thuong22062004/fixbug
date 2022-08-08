import {useState,useEffect}from 'react'
const lessons = [
  {
    id: 1,
    name: "HTML, CSS cơ bản"
  },
  {
    id: 2,
    name: "Javascript cơ bản"
  },
  {
    id: 3,
    name: "React JS"
  }
];
function Content() {
  

    return (
      <div className="title">
     <ul>
     {lessons.map(lesson =>{
       return <li
        key={lesson.id}
        >{lesson.name}</li>
      })}
     </ul>
      </div>
    );
  }
export default Content;