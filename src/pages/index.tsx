import Image from 'next/image'
import NavBar from '../components/NavBar'
import UserProfile from '@/components/UserProfile'
import SkillProfile from '@/components/SkillProfile'
import axios from 'axios'
import { useState } from 'react'
import indexStyle from '../styles/index.module.css'


type home = {  
  proficiency: string[],
  master: string[],
  personName: string,
  personPicture: string,
  valueTwo: string|undefined;
}


const Home: React.FC<home> = ({proficiency, master, personName, personPicture, valueTwo}) => {
  const [value, getValue] = useState('')
  
  const searchFunction = (inputValue: string) => {
    getValue(inputValue)
  }
  return (
    <>
  {/*This is the container */}
  <div>
    <NavBar name = 'data' onSearch={searchFunction} />
    <UserProfile data={personName} image = {personPicture} />
    <SkillProfile name="Master/Influencer" header="Skills and Interest:"  />
    <div>
      {valueTwo}
    </div>
    <div >
      <div className={indexStyle.master}>
        {
          master.map((element: any) => (
            <div key={element.id}>
              <button className={indexStyle.button}>{element.name !== undefined ? element.name : "Username doesn't exist"}</button>
            </div>
          ))
        }
      </div>
    </div>
    <SkillProfile name="Proficiency" header=""  />
    <div >
      <div className={indexStyle.master}>
        {
          proficiency.map((element: any) => (
            <div key={element.id}>
              <button className={indexStyle.button}>{element.name !== undefined ? element.name : "Username doesn't exist"}</button>
            </div>
          ))
        }
      </div>
    </div>
    
    
  </div>
  {/*This is the end of the container */}
</>
  )
}

export async function getServerSideProps(context: { query: { input: string } }) {
  const inputValue = context.query.input || ''
  console.log(inputValue)
  let person: any
  let proficiency;
  let master;
  let personData: any
  let personName: any
  let personPicture;
  let valueTwo: string = '';
  try {
    if(inputValue === undefined){
      return {props :{proficiency: [],
        master: [],
        personName: "",
        personPicture: "",
        valueTwo: "",}}
    }else{
      const response = await axios.get(`https://torre.bio/api/bios/${inputValue}`);
      if(response === undefined){
        const data = {
          message: 'No value gotten', message1: 'Username Error', message3: 'Username does not exist'
        };
        person = Object.values(data)
        return {props :{proficiency: [],
          master: [],
          personName: "",
          personPicture: "",
          valueTwo: "",
          person,}}
      }else{
        const data = await response.data;
        person = Object.values(data)[2]
        personData = Object.values(data)[0]
        
        proficiency = person.filter((element: any) =>{
          return element.proficiency === 'proficient'
        } )
        master = person.filter((element: Record<string, unknown>) =>{
          return element.proficiency === 'expert'
        })
        personName = personData.name
        personPicture = personData.picture
        console.log(proficiency)
      }
      
    }
  }catch(err){
    if(err){
      return { props: { proficiency: [],
        master: [],
        personName: "",
        personPicture: "",
        valueTwo: "Username doesn't exist, try again",} };
    }
  }


  console.log(personName)
  return { props: { proficiency, master, personName, personPicture, valueTwo}};
  
}
export default Home;