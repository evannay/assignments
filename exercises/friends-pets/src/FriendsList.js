// import React from 'react'
// import Friend from './Friend'

// const FriendsList = () => {
//     const friends = [
//         {
//           name: "Ben",
//           age: 29,
//           pets: [
//             {
//               name: "spot",
//               breed: "tabby"
//             },{
//               name: "John Johnson",
//               breed: "husky"
//             },{
//               name: "Bear the bear",
//               breed: "Grizzly"
//             }
//           ]
//         },{
//           name: "Bob",
//           age: 31,
//           pets: [
//             {
//               name: "Sally",
//               breed: "Australian Shepard"
//             }
//           ]
//         },{
//           name: "Marcus",
//           age: 25,
//           pets: [
//             {
//               name: "Indy",
//               breed: "Akita"
//             },{
//               name: "Anna",
//               breed: "persian cat"
//             }
//           ]
//         },{
//           name: "Jacob",
//           age: 20,
//           pets: [
//             {
//               name: "fluffy",
//               breed: "sphynx cat"
//             },{
//               name: "patches",
//               breed: "sphynx cat"
//             },{
//               name: "tiger",
//               breed: "sphynx cat"
//             },{
//               name: "oscar",
//               breed: "sphynx cat"
//             }
//           ]
//         }
//       ]
//       const mappedFriends = friends.map((person, i) => <Friend name={person.name} pets={person.pets} age={person.age} key={i}/>)
//       console.log(mappedFriends)
//     return (
//         <div>
//             {mappedFriends}
//         </div>
//     )
// }


// export default FriendsList

import React from 'react'
import Friend from './Friend'


const FriendsList = () => {
    const friends = [
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "spot",
              breed: "tabby"
            },{
              name: "John Johnson",
              breed: "husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            },
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },
            {
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "sphynx cat"
            },{
              name: "patches",
              breed: "sphynx cat"
            },{
              name: "tiger",
              breed: "sphynx cat"
            },{
              name: "oscar",
              breed: "sphynx cat"
            }
          ]
        }
      ]
    const friendsMapped = friends.map((person, i) => 
    <Friend 
    key={i} 
    name={person.name} 
    pets={person.pets}
    />)
    return(
        <div className='flex-container'>
            {friendsMapped}
        </div>
    )
}

export default FriendsList 