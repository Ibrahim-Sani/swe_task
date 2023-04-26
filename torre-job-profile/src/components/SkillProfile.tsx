import React from 'react'
import skillcard from '../styles/SkillProfile.module.css'
import { BiCycling } from 'react-icons/bi'

function SkillProfile({name, header}) {
    return (
        <main>
            <div>
                <h3 className={skillcard.skill}>{header}</h3>
            </div>
            <div className={skillcard.influence}>
                <h3 id={skillcard.influence}>
                    <BiCycling id={skillcard.bike}/> {name}:
                </h3>
            </div>
        </main>
    )
}

export default SkillProfile

