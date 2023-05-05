import Image from 'next/image'
import NavBar from '../components/NavBar'
import UserProfile from '@/components/UserProfile'
import SkillProfile from '@/components/SkillProfile'
import axios from 'axios'
import { useState } from 'react'
import indexStyle from '../styles/index.module.css'
import * as Tooltip from '@radix-ui/react-tooltip';
import { contains } from 'jquery'
import { element } from 'prop-types'
import {IoIosArrowDown} from 'react-icons/io'
import {MdVerified} from 'react-icons/md'




type home = {  
  proficiency: string[],
  master: string[],
  personName: string,
  personPicture: string,
  valueTwo: string|undefined;
  job_names: string[], 
  org_name: any, 
  job_responsibilities: any, 
  job_orgs: any
  pictureThumbnail: string
  summaryBio: string,
  profession: string,
  location: string


}


const Home: React.FC<home> = ({proficiency,
   master, personName, personPicture, 
   valueTwo, job_names, org_name, job_responsibilities, pictureThumbnail, summaryBio, profession, location
  }) => {
  const [value, getValue] = useState('')
  const [popAction, setPopAction] = useState(null)
  const [showItem, setShowItem] = useState('5.5rem')
  const [isVisible, setIsVisible] = useState(true)
  const lengthOfWords = summaryBio.length
  const halfOfWords = Math.ceil(lengthOfWords/2)
  const urlRegex = /\bhttps?:\/\/\S+/gi;
  const cleanStr = summaryBio.replace(/&#x27;/g, "'");
  
 
  
  const searchFunction = (inputValue: string) => {
    getValue(inputValue)
  }
  const showAll = (e: any) => {
    const val = e.target.value
    setShowItem('')
    setIsVisible(false)
  }
  
  
  return (
      <>
        <NavBar name = 'data' onSearch={searchFunction} />

        <div className={indexStyle.body}>
      
          {/* This is the beginning of container 0 */}
          <div className={indexStyle.container0} style={{
            backgroundImage: `url(${pictureThumbnail !== undefined ? personPicture : "User doesn't exist"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
      
          </div>
          {/* This is the end of container 0 */}

          {/*This is beginning of container 1 */}
          <div className={indexStyle.container1}>
            
            <UserProfile data={personName} image = {personPicture} profession= {profession} location= {location} />

            <div className={indexStyle.sum} 
            style={{ 
              height: `${showItem}`,
              
            }}
            
            >
              <h6>
                <p 
                  className={indexStyle.summary}
                  
                >
                  {cleanStr}
                </p>
              </h6>
              
            </div>
            {isVisible && 
              <button className={indexStyle.sumbutton} style={{
                width: '21rem',
                height: `2rem`,
                backgroundColor: '#232121',
                opacity: '0.9',
                marginTop: "-1rem",
                
              }}
              onClick={showAll}
              >
                <IoIosArrowDown style={{
                position: 'relative',
                width: '3rem',
                height: '2rem',
                marginLeft: '10rem'
              }}
                
                />
              </button>
            
            }
            
           
            
            <SkillProfile name="Expert" header="Skills and interest:"  />
            <div>
              {valueTwo}
            </div>
            <div >

              <div className={indexStyle.master1}>
                {
                  master.map((element: any, id: number) => (
                    <div key={element.id}>
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button className={indexStyle.button} id={`${id}`}>{element.name !== undefined ? element.name : "Username doesn't exist"} </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content className="TooltipContent" sideOffset={5}>
                                
                                 
                                <div className={indexStyle.popUp}>
                                  <h3>{`${personName.split(" ")[0]} is skilled in ${element.name}` }</h3>
                                  <h3>{`${element.recommendations} recommendations for this skill` }</h3>
                                  
                                </div>
                                  
                                
                              <Tooltip.Arrow className="TooltipArrow" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </Tooltip.Provider>

                    </div>
                    
                  ))
                }
                
              </div>
              


            </div>
            
            <div >
              <SkillProfile name="Proficiency" header=""  />
              <div className={indexStyle.master2}>
                
                {
                  proficiency.map((element: any, id: number) => (
                    <div key={element.id}>
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button className={indexStyle.button} id={`${id}`}>{element.name !== undefined ? element.name : "Username doesn't exist"} </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content className="TooltipContent" sideOffset={5}>
                                
                                
                                <div className={indexStyle.popUp}>
                                  <h3>{`${personName.split(" ")[0]} is skilled in ${element.name}` }</h3>
                                  
                                  
                                </div>
                                  
                                
                              <Tooltip.Arrow className="TooltipArrow" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </Tooltip.Provider>

                    </div>
                  ))
                }
              </div>
            </div>
            
            
          </div>
          {/*This is the end of the container 1*/}

          {/* This is the beginning of container 2 */}
          <div className={indexStyle.container2}>
            <div className={indexStyle.header}>
              <h1 className={indexStyle.head}>Résumé</h1>
              <hr className={indexStyle.breaker}/>
            </div>
            <div className={indexStyle.information}>
              <div>
                <p className={indexStyle.parag}> <span className={indexStyle.span}>Jobs</span> <span className={indexStyle.span1}> 88% verified</span>   <MdVerified id={indexStyle.parag}/></p> 
              </div>
              {
                job_names.map((element, id) => (
                  <div key={ job_names.indexOf(element)} id={indexStyle.index1}>
                    {element}
                    <div id={indexStyle.index2}>
                      {org_name[id]}
                    </div>
                    <div id={indexStyle.index3}>
                      {
                      job_responsibilities[id].map((element: any, id: number)=> (
                        <ul key={job_responsibilities[id]} id={indexStyle.index4}>
                          <li id={indexStyle.index5}>{element}</li>
                        </ul>

                      ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          
          </div>
          {/* This is the end of container 2*/}
        </div>
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
  let experience;
  let jobs: any;
  let language;
  let project;
  let education;
  let publications;
  let job_names;
  let job_responsibilities;
  let job_orgs;
  let org_name;
  let pictureThumbnail;
  let summaryBio;
  let profession;
  let location;
 
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
        experience = Object.values(data)[4]
        project = Object.values(data)[7]
        jobs = Object.values(data)[6]
        education= Object.values(data)[9]
        publications = Object.values(data)[8]
        language = Object.values(data)[11]

        
        //console.log(person_profile)
        //console.log(jobs)
        job_names = jobs.map((element: any) => {
          return element.name
        })
        job_responsibilities = jobs.map((element: any) => {
          return element.responsibilities
        })
        job_orgs = jobs.map((element: any) => {
          return element.organizations
        })
        // console.log(job_responsibilities)
        
        
        org_name = job_orgs.map((element: any) => {
          return element[0].name
        })
        
        proficiency = person.filter((element: any) =>{
          return element.proficiency === 'proficient'
        } )
        master = person.filter((element: Record<string, unknown>) =>{
          return element.proficiency === 'expert'
        })
        personName = personData.name
        personPicture = personData.picture
        summaryBio = personData.summaryOfBio
        profession = personData.professionalHeadline
        location = personData.location.name
        pictureThumbnail = personData.pictureThumbnail
        //console.log(jobs)

        const len = jobs.map((element: any) => {
          return element.name
        }).length
        //console.log(personData)

      }
      let input = 'renanpeixotox'
      const resp = await axios.get(`https://torre.bio/api/bios/${input}`)
      if(resp === undefined){
        return {
          props: { proficiency: [],
            master: [],
            personName: "",
            personPicture: "",
            valueTwo: "Username doesn't exist, try again"
          }

        }
      }else{
        const data = await resp.data
        const keyWords = Object.keys(data)
        const valWords = Object.values(data)
        const person_profile = valWords[0]
        const interest = valWords[3]
        
      
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
  
  return { props: { proficiency,
     master, personName, 
     personPicture, valueTwo, job_names, org_name, 
     job_responsibilities, job_orgs, pictureThumbnail, summaryBio, location, profession
    }};
  
}
export default Home;