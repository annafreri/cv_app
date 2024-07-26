import { useState } from 'react'
import './App.css'
import CvInput from './components/CvInput';

function App() {
  const [mode, setMode] = useState('edit');
  //basic info
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phonenum, setPhonenum] = useState("");
  //school info
  const [schoolYear, setSchoolYear] = useState("");
  const [school, setSchool] = useState("");
  const [schoolTitle, setSchoolTitle] = useState("");
  //work info
  const [workFrom, setworkFrom] = useState("");
  const [workTo, setworkTo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const changeMode = () => {
    mode === 'edit' ? setMode('save') : setMode('edit');
  }

  return (
    <>
    <form>
    <h1>General information</h1>

    {mode === 'edit' && (
        <section>
          <CvInput 
            label="Name"
            state={name}
            setState={setName}
            mode={mode}
          />
          <CvInput 
            label="Email"
            state={email}
            setState={setEmail}
            mode={mode}
          />
          <CvInput 
            label="Phone Number"
            state={phonenum}
            setState={setPhonenum}
            mode={mode}
          />
        </section>
      )}
  
  { mode === 'save' && (
      <>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone Number: {phonenum}</h3>
      </>
  )}




    <h1>Educational experience</h1>

    {mode === 'edit' && (
        <section>
          <CvInput 
            label="Year"
            state={schoolYear}
            setState={setSchoolYear}
            mode={mode}
          />
          <CvInput 
            label="School"
            state={school}
            setState={setSchool}
            mode={mode}
          />
          <CvInput 
            label="Title of study"
            state={schoolTitle}
            setState={setSchoolTitle}
            mode={mode}
          />
        </section>
      )}
  
  { mode === 'save' && (
      <>
      <h3>Year: {schoolYear}</h3>
      <h3>{school}</h3>
      <h3>{schoolTitle}</h3>
      </>
  )}




    <h1>Practical experience</h1>

    {mode === 'edit' && (
        <section>
          <CvInput 
            label="workFrom"
            state={workFrom}
            setState={setworkFrom}
            mode={mode}
          />
          <CvInput 
            label="workTo"
            state={workTo}
            setState={setworkTo}
            mode={mode}
          />
          <CvInput 
            label="companyName"
            state={companyName}
            setState={setCompanyName}
            mode={mode}
          />
           <CvInput 
            label="position"
            state={position}
            setState={setPosition}
            mode={mode}
          />
          <CvInput 
            label="responsibilities"
            state={responsibilities}
            setState={setResponsibilities}
            mode={mode}
          />
          
        </section>
      )}
  
  { mode === 'save' && (
      <>
      <h3>{workFrom} - {workTo}</h3>
      <h3>{companyName}</h3>
      <h3>{position}</h3>
      <h3>{responsibilities}</h3>
      </>
  )}
  </form>

    <div className='toolbar'>
      <button 
        onClick={changeMode} 
        style={{ position: "fixed", bottom:"32px"}}
      
      > { mode === "save" ? "Edit" : "Save"  }</button>
    </div>  
       
    </>
  )
}

export default App
