import React from 'react'

export default function Film(props) {
  return (
    <div>{console.log(props.match.params)  }</div>
  )
}
