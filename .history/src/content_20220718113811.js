import {useState,useEffect}from 'react'
function Content() {
  const [avatar,setAvatar] = useState();
  useEffect(()=>{
    return ()=>{
     avatar &&  URL.revokeObjectURL(avatar.links)// luc dau avatar la undefind
    }
  },[avatar])
  const handlPreview = (e)=>{
      const file = e.target.files[0]
      file.links = URL.createObjectURL(file)
      setAvatar(file)
  }
    return (
      <div className="title">
      <input 
        type='file'
        onChange={handlPreview}
      />
      {avatar && <img 
        src={avatar.links}
        style = {{width:'80%'}}
      /> }
      </div>
    );
  }
export default Content;