import React from "react";
import styles from "./HotelDetail.module.css";
const HotelDetail = function () {
  const hotelDetail = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  // Trả ra JSX code hiển thị phần hotel Details
  return (
    <div className={styles.hotelDetail}>
      <div className={styles.detailandreservebtn}>
        <div className={styles.detail}>
          <h3>{hotelDetail.name}</h3>
          <span className={styles.location}>
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            {hotelDetail.address}
          </span>
          <span className={styles.distance}>{hotelDetail.distance}</span>
          <span className={styles.price}>{hotelDetail.price}</span>
        </div>
        <button>Reserve or Book Now!</button>
      </div>
      <div className={styles.pictures}>
        {hotelDetail.photos.map((image) => (
          <img src={image} />
        ))}
      </div>
      <div className={styles.descriptionanddeal}>
        <div className={styles.description}>
          <h3>{hotelDetail.title}</h3>
          <p>{hotelDetail.description}</p>
        </div>
        <div className={styles.deal}>
          <h4>Perfect for a 9-night stay!</h4>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <span className={styles.nine_night_price}>
            <span>${hotelDetail.nine_night_price} </span>
            (9 nights)
          </span>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};
export default HotelDetail;
