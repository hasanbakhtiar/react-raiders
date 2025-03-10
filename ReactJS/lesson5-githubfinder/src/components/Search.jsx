import React, { useEffect, useState } from "react";

const Search = ({ comingData,checkData }) => {
  const [keyword, setKeyword] = useState("");
  const [btnValue, setBtnValue] = useState("Search");
  const [active, setActive] = useState(true);
  const formSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
        alert("please fill input")
    }else{
        comingData(keyword);
    setKeyword("");
    setActive(false);
    }

  };
  useEffect(()=>{
    if (checkData.length===0) {
        setBtnValue('Loading...')
    }else{
        setBtnValue("Search")
    }
  },[checkData])

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-4">
        <form onSubmit={formSubmit} className="input-group mb-3">
          <input
            value={keyword}
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn btn-dark" type="submit">
          {active?"Search":btnValue}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
