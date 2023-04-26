import React from 'react'
import skillcard from '../styles/SkillProfile.module.css'
import { BiCycling } from 'react-icons/bi'

function SkillProfile() {
    return (
        <main>
            <div>
                <h3 className={skillcard.skill}>Skills and Interests:</h3>
            </div>
            <div>
                <h3 id={skillcard.influence}>
                    <BiCycling />
                    Master/ Influencer:
                </h3>
            </div>
        </main>
    )
}

export default SkillProfile

