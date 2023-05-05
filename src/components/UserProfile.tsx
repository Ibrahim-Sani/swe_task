import React from 'react'
import userStyle from '../styles/userprofile.module.css'
import {FiHexagon} from 'react-icons/fi'
import Image from 'next/image';
import { userAgent } from 'next/server';

type profile = {
    data: string,
    image: string
    profession: string
    location: string
}
const imageWidth = 100
const imageHeight = 100

const UserProfile: React.FC<profile> =({data, image, profession, location}) => {
  return (
        <main>
            <div className={userStyle.container}>
                
                <div >
                    <svg height="100" width="350" className={userStyle.hex}>
                        <defs>
                            <pattern
                            id="imageFill"
                            patternUnits="userSpaceOnUse"
                            width={imageWidth}
                            height={imageHeight}
                            >
                            <image
                                href={image !== undefined ? image : "User doesn't exist"}
                                x="0"
                                y="0"
                                width={imageWidth}
                                height={imageHeight}
                            />
                            </pattern>
                        </defs>
                        <polygon points="50 3, 97 25, 97 75, 50 97, 3 75, 3 25"
                        stroke="rgb(148, 142, 142)" 
                        fill="url(#imageFill)" stroke-width="5"  />
                    </svg>
                    {/* <img src={image !== undefined ? image : "User doesn't exist"} alt = "" width={80} height={80} id={userStyle.img}/> */}

                </div>
                
                <div>
                   
                    <h1 className={userStyle.name}>{data}</h1>
                    <h6 className={userStyle.profession}>{profession}</h6>
                    <h6 className={userStyle.location}>{location}</h6>
                    
                </div>
            </div>
        </main>
    )
}
export default UserProfile
