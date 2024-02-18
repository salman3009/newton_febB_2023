import { useMemo } from 'react';

function UsersList({ users, startingLetter }) {
  
  const filterUser = useMemo(()=>{
    console.log("UsersList");
return users.filter((obj)=>obj.name.toLowerCase().startsWith(startingLetter.toLowerCase()))},
[users,startingLetter])

  return (
    <ul>
    {filterUser.map((obj)=>{
        return (
             <li key={obj.id}>{obj.name}</li>
        )
    })}
     
    </ul>
  );
}

export default UsersList;
