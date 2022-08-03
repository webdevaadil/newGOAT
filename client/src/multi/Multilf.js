import React, { useState } from 'react'
import{useForm,useStep}from"react-hooks-helper"
import { Names } from './Stepform/Names'
export const Multilf = () => {
    const [defaultData, setdefaultData] = useState({
        firstname:"",
        lastname:"",
        nickname:"",
    })
    const steps=[
        {id:'names'},
        {id:'email'},
        {id:'password'},
        {id:'dob'},
        {id:'names'}
    ]
    const{formData,setForm}= useForm(defaultData)
    const {step,navigation}=useStep({
        steps,
        initialStep:0
    })
    switch (step.id) {
        case 'names': return <Names/>
    }
  return (
    <div>Multilf</div>
  )
}
