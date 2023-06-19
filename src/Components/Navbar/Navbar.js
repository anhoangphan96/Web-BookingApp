import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  const [navbarArr, setnavbarArr] = useState([
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ]);
  //Xây dựng function điều chỉnh giá trị active khi nhấn vào các page trên navbar
  //lọc và tìm page đang active chuyển về false, chuyển thành true cho đối tượng mới được click vào
  const pageActiveHandler = function (type) {
    const typeOfNewPage = type;
    const navbarArrChange = structuredClone(navbarArr);
    //find index của phần tử đang có active là true chuyển nó thành false
    const curActiveIndex = navbarArr.findIndex((arr) => arr.active === true);
    navbarArrChange[curActiveIndex].active = false;
    // nhận state truyền lên là type của phần tử được click vào tìm ra index của phần tử trong array và chuyển active thành true
    const newActiveIndex = navbarArr.findIndex(
      (arr) => arr.type === typeOfNewPage
    );
    navbarArrChange[newActiveIndex].active = true;
    // gọi hàm set State cho arr vừa được thay đổi
    setnavbarArr(navbarArrChange);
  };
  //Trả ra JSX theo giao diện của bài yêu cầu, render các phần tử navBar bằng phương thức map của array.
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar__intro}>
          <div>Booking Website</div>
          <div className={styles.navbar__button}>
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
        <div className={styles.navbar__pages}>
          <ul>
            {navbarArr.map((navbarItem) => {
              return (
                <NavbarItem
                  key={navbarItem.type + navbarItem.active}
                  typeNav={navbarItem.type}
                  iconNav={navbarItem.icon}
                  activeNav={navbarItem.active}
                  onChangePageActive={pageActiveHandler}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
