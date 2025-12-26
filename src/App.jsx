import React from 'react'
import Card from './Card'
const App = () => {
  const trips = [
  {
    id: 1,
    country: "PERU",
    days: 5,
    price: 4570,
    bgImage: "https://i.pinimg.com/1200x/d9/f1/42/d9f142a97fc946b53b27a8bbfc607453.jpg"
  },
  {
    id: 2,
    country:"PARAGUAY",
    days: 4,
    price: 5160,
    bgImage: "https://i.pinimg.com/1200x/aa/a7/d0/aaa7d090e102f64cf8041c6c740344c9.jpg"
  },
  {
    id: 3,
    country: "SYDNEY",
    days: 5,
    price: 4570,
    bgImage: "https://i.pinimg.com/1200x/f6/76/ff/f676ff7ec7f01ced5b469b95a1f02e89.jpg"
  },
  {
    id: 4,
    country: "ROME",
    days: 4,
    price: 5160,
    bgImage: "https://i.pinimg.com/1200x/b1/0f/71/b10f712f6821c5519d196afae090de9c.jpg"
  },
  {
    id: 5,
    country: "ARGENTINA",
    days: 3,
    price: 6570,
    bgImage: "https://i.pinimg.com/1200x/03/d2/46/03d246b4ba0d848d0d079db60e1065ef.jpg"
  },
  {
    id: 6,
    country: "BOLIVIA",
    days: 3,
    price: 7200,
    bgImage: "https://i.pinimg.com/1200x/e3/b5/ef/e3b5ef753d46016b19c7f5e85f5e4ce6.jpg"
  },
  {
    id: 7,
    country: "LONDON",
    days: 3,
    price: 6570,
    bgImage: "https://i.pinimg.com/1200x/f4/80/93/f4809343e8c9e4ee4653a092e8e371af.jpg"
  },
  {
    id: 8,
    country:"NEW YORK",
    days: 3,
    price: 7200,
    bgImage: "https://i.pinimg.com/1200x/a7/b0/62/a7b062fc2e7a62077646cc88afa1bcae.jpg"
  },
  {
    id: 9,
    country: "JAPAN",
    days: 6,
    price: 8300,
    bgImage: "https://i.pinimg.com/1200x/5e/99/36/5e99361c4073f4ba36f03fafb3f57a55.jpg"
  },
  {
    id: 10,
    country: "SWITZERLAND",
    days: 5,
    price: 9100,
    bgImage: "https://i.pinimg.com/1200x/e9/f6/53/e9f6539c1454087057c3508568f67520.jpg"
  }
];
 console.log(trips);

  return (
    
    <div className='parent'>
       {trips.map((elem,id)=>{
        return(
         <div key={elem.id}>
          <Card 
          country={elem.country}
           days={elem.days} 
           price={elem.price} 
           img= {elem.bgImage}
           />
        
         </div>
        );
})}

    </div>
);
};
export default App;