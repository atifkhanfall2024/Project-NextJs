const UserProfile = async({params})=>{
    const {users} = await  params 
    //console.log(users);
    return(
        <div>Profile of {users}</div>
    )
}

export default UserProfile