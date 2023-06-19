import React from "react";
import styles from "./ListHotelType.module.css";
import HotelTypeItem from "./HotelTypeItem";
const ListHotelType = function (props) {
  const listHotelType = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  // Trả ra JSX code gồm List các Hotel type được render bằng cách gọi phương thức map cho array

  return (
    <div className={styles.container}>
      <h2>Browse by property type</h2>
      <div className={styles.hotelTypeList}>
        {listHotelType.map((hotel) => {
          return (
            <HotelTypeItem
              key={hotel.name}
              name={hotel.name}
              count={hotel.count}
              image={hotel.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ListHotelType;
