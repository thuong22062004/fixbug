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
  const[lessonAc,setLessonAc] = useState(1)
  useEffect(()=>{
    const handlecmt = ({detail})=>{
      console.log(detail)
    }
     window.addEventListener(`lesson-${lessonAc}`,handlecmt)
     return ()=>{
      window.addEventListener(`lesson-${lessonAc}`,handlecmt)

     }
  },[lessonAc])
    return (
      <div className="title">
     <ul>
     {lessons.map(lesson =>{
       return <li
        key={lesson.id}
        style = {{
         color : lessonAc == lesson.id ? 'red' : 'black'
        }}
        onClick = {()=>setLessonAc(lesson.id)}
        >{lesson.name}</li>
      })}
     </ul>
      </div>
    );
  }
export default Content;