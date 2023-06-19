import React from "react";
import styles from "./ListHotel.module.css";
import HotelItem from "./HotelItem";
const ListHotel = function (props) {
  const listHotel = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];
  // Trả ra JSX code gồm list các Hotel được render bằng cách gọi phương thức map cho array

  return (
    <div className={styles.container}>
      <h2>Homes guests love</h2>
      <div className={styles.hotelList}>
        {listHotel.map((hotel) => {
          return (
            <HotelItem
              key={hotel.name}
              name={hotel.name}
              city={hotel.city}
              price={hotel.price}
              rate={hotel.rate}
              type={hotel.type}
              image={hotel.image_url}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ListHotel;
