import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import UserProfile from '@/components/UserProfile'
import SkillProfile from '@/components/SkillProfile'
import axios from 'axios'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Home({proficiency, master, personName, personPicture}) {
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
    <SkillProfile  />
    
  </div>
  {/*This is the end of the container */}
</>
  )
}

export async function getServerSideProps(context: { query: { input: string } }) {
  const username = 'dibrahimsani'
  let person
  let proficiency;
  let master;
  let personData;
  let personName;
  let personPicture;
  const inputValue = context.query.input || ''
  console.log(inputValue)
  if(inputValue === undefined){
    return
  }else{
    const response = await axios.get(`https://torre.bio/api/bios/${inputValue}`);
    const data = await response.data;
    person = Object.values(data)[2]
    personData = Object.values(data)[0]
    
    proficiency = person.filter(element =>{
      return element.proficiency === 'proficient'
    } )
    master = person.filter(element =>{
      return element.proficiency === 'expert'
    })
    personName = personData.name
    personPicture = personData.picture
    //console.log(proficiency)
    //console.log(master)
    //console.log(personData.name)
    //console.log(personData.picture)


  }
  return { props: { proficiency, master, personName, personPicture } };
  
  

  
}