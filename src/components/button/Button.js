import React from 'react'

export default function Button(props) {
  return (
    <button className={props.styleClassname}>{props.title}</button>
  )
}
