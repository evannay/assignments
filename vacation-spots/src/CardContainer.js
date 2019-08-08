// import React from 'react'
// import Card from './Card'

// const CardContainer = () => {
//     let vacationSpots = [
//         {
//           place: "Meridian, Idaho",
//           price: 40,
//           timeToGo: "Spring"
//         },{
//           place: "Cancun",
//           price: 900,
//           timeToGo: "Winter"
//         },{
//           place: "China",
//           price: 1200,
//           timeToGo: "Fall"
//         },{
//           place: "Russia",
//           price: 1100,
//           timeToGo: "Summer"
//         },{
//           place: "Lebanon",
//           price: 400,
//           timeToGo: "Spring"
//         }
//       ]

//     const mappedCards = vacationSpots.map((spot, i) => <Card place={spot.place} price={spot.price} timeToGo={spot.timeToGo} key={i}/>)
//     return (
//         <div>
//             {mappedCards}
//         </div>
//     )
// }

// export default CardContainer

// import React from 'react'
// import Card from './Card'

// const CardContainer = () => {
//     let vacationSpots = [
//         {
//           place: "Meridian, Idaho",
//           price: 40,
//           timeToGo: "Spring"
//         },{
//           place: "Cancun",
//           price: 900,
//           timeToGo: "Winter"
//         },{
//           place: "China",
//           price: 1200,
//           timeToGo: "Fall"
//         },{
//           place: "Russia",
//           price: 1100,
//           timeToGo: "Summer"
//         },{
//           place: "Lebanon",
//           price: 400,
//           timeToGo: "Spring"
//         }
//       ]
//     const mappedVacationSpots = vacationSpots.map(card => <Card place={card.place} price={card.price} timeToGo={card.timeToGo}/>)      
//     return (
//         <div>
//             {mappedVacationSpots}
//         </div>
//     )
// }

// export default CardContainer


import React from 'react'
import Card from './Card'

const CardContainer = () => {
  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]
  const spotsMapped=vacationSpots.map((trip, i) => <Card key={i} place={trip.place} price={trip.price} timeToGo={trip.timeToGo} />)
  return(
    <div>
        {spotsMapped}
    </div>
    
  )
}

export default CardContainer