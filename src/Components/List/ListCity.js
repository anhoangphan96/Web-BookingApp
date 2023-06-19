import React from "react";
import styles from "./ListCity.module.css";
import CityItem from "./CityItem";
const ListCity = function (props) {
  const listCity = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  // Trả ra JSX code gồm các city được render bằng cách gọi phương thức map cho array
  return (
    <div className={styles.cityList}>
      {listCity.map((city) => {
        return (
          <CityItem
            key={city.name}
            name={city.name}
            subText={city.subText}
            image={city.image}
          />
        );
      })}
    </div>
  );
};
export default ListCity;
