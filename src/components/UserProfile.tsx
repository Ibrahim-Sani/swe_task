import React from 'react'
import userStyle from '../styles/UserProfile.module.css'
import {FiHexagon} from 'react-icons/fi'
import Image from 'next/image';
import { userAgent } from 'next/server';

type profile = {
    data: string,
    image: string
}

const UserProfile: React.FC<profile> =({data, image}) => {
  return (
        <main>
            <div className={userStyle.container}>
                <FiHexagon className={userStyle.hexagon} />
                <img src={image !== undefined ? image : "User doesn't exist"} alt = "profile-pic" width={80} height={80} id={userStyle.img}/>
                <div>
                    <center>
                        <h1 className={userStyle.name}>{data}</h1>
                    </center>
                </div>
            </div>
        </main>
    )
}
export default UserProfile
