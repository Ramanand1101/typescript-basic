interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,  //we use ? for optional
    // startTrail:()=>string
    startTrail():string,  //both working same
    getCoupan(coupaname:string,value:number):number
}

//RE-OPEN of interface
/* If I made one interface earlier and i want to acquire all property of previous interface whose name is same and also want to
give some other property then that is possible according that what i do next and that is called re-opening of interface */ 


/* here we use the User interface which is define earlier and we can acquire all property and give some more 
property to them  */
interface User{
    githubToken:string
}

/* 3-Interface Inheritence */
/* One more thing also happening in interface that is called the interface inheritence  */
/* Here we can extends the property we use the all property of User in Admin and give one more property that is Role */
interface Admin extends User{
    role:"Admin" | "ta" | "learner"
}





const ramanand:Admin={dbId:22,email:"r@gmail.com",userId:222,
githubToken:"ramanand@1233",
startTrail:()=>{
    return "trail started"
},
role:"Admin",
getCoupan:(name:"Ramanand10",Off:10)=>{
    return 10
}
}
ramanand.email="rn@gmail.com" 
console.log(ramanand)

