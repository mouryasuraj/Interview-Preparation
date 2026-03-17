import React, { useState } from 'react'

interface Props {
    name:string
    age:number,
    success?:string
}

type keys = keyof Props


enum UserType {
    Admin="Admin",
    User="User"
}

type Role = 'admin' | 'user' | 'viewer'

interface Use {
    name:string;
    role: Role
}

let ude:string;

const n: string | null = null




const data: Props[] = [{name:"", age:0}]

const User: React.FC<Props> = ({name, age}) =>{

    const [user, setUser] = useState<string>("")

    const mykey: keys = "age"
    console.log(typeof mykey);
    

    return <>

    </>
}


User({name:"Suraj", age:0})