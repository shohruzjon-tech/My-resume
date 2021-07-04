import React from 'react'
import './button.styles.scss'


export default function CustomButton({name, icon, link, classname}) {
    return (
        <div className={classname}>
            <button className="button__item">
              <a href={link}    target="_blank">{name}  <span>{icon}</span></a>
            </button>
        </div>
    )
}
