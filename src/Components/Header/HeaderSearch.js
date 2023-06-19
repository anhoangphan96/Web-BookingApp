import React, { useState } from "react";
import styles from "./HeaderSearch.module.css";
import "font-awesome/css/font-awesome.min.css";
import DateRageInput from "./DateRangeInput";
const HeaderSearch = (props) => {
  //Xây dựng các phần tử trong thanh search trên Header
  //2 giá trị State để biết người dùng có đang input hay không, nếu người dùng input thì icon và chữ sẽ màu đen, còn không thì sẽ xám đi
  const [inputWhere, setInputWhere] = useState(false);
  const [inputPerson, setInputPerson] = useState(false);
  //2 function xử lý việc input của người dùng
  const inputWhereHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInputWhere(true);
    } else {
      setInputWhere(false);
    }
  };
  const inputPersonHandler = (event) => {
    console.log(event.target.value.trim().length > 0);
    if (event.target.value.trim().length > 0) {
      setInputPerson(true);
    } else {
      setInputPerson(false);
    }
  };
  //Function khi người dùng click vào nút Search sẽ chuyển đến Search page
  const landingtoSearch = () => {
    window.location.replace("/search");
  };
  //JSX trả ra ở component này là 3 ô input gồm icon thẻ inbut và 1 button search
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputcontainer}>
        <i
          className={`fa-solid fa-bed ${inputWhere ? styles.iconActive : ""}`}
        ></i>
        <input
          type="text"
          placeholder="Where you are going?"
          onChange={inputWhereHandler}
        />
      </div>
      <DateRageInput
        isOpenSub={props.isOpenSub}
        finishPick={props.finishPick}
      />
      <div className={styles.inputcontainer}>
        <i
          className={`fa-solid fa-person ${
            inputPerson ? styles.iconActive : ""
          }`}
        ></i>
        <input
          type="text"
          placeholder="1 adult - 0 children - 1 room"
          onChange={inputPersonHandler}
        />
      </div>
      <button className={styles.btnSearch} onClick={landingtoSearch}>
        Search
      </button>
    </div>
  );
};
export default HeaderSearch;
