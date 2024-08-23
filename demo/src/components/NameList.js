import React from 'react'
import Person from './Person'

function NameList() {
    // const names=['sandeep','dhanni','sam','rohit']
    // const nameList=names.map(name=><h2>{name}</h2>)
    const persons=[
        {
            id:1,
            name:'sandeep',
            age:23,
            skill:'java'
        },
        {
            is:2,
            name:'chethan',
            age:25,
            skill:'devops'
        },
        {
            id:3,
            name:'rohit',
            age:24,
            skill:'data anaylist'
        },
        {
            id:4,
            name:'ravi',
            age:24,
            skill:'java,react'
        }
    ]

    const personList=persons.map(person=>
        <Person key={person.id} person={person} />
    )

    
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2> */}

        {/* {<div>{nameList}</div>} */}

         {personList}

    </div>
  )
}

export default NameList