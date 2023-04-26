import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import UserProfile from '@/components/UserProfile'
import SkillProfile from '@/components/SkillProfile'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
  {/*This is the container */}
  <div>
    <NavBar />
    <UserProfile data="Name" />
    <SkillProfile />
  </div>
  {/*This is the end of the container */}
</>
  )
}

export async function getServerSideProps() {
  const username = 'dibrahimsani'
  const response = await axios.get(`https://torre.bio/api/bios/${username}`);
  const data = await response.data;
  const person = Object.values(data)[2]
  person.map((skill) => {
    console.log(skill.name)
  })

  return { props: { data } };
}