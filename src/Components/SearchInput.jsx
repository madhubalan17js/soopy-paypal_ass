import React from "react"
// import { BsSearch } from "react-icons/bs"
import { AiOutlineDownload } from "react-icons/ai"
import "../css/navbar.css"
const SearchInput = ({ Search }) => {
  return (
    <div className="d-flex align-items-center mx-5">
      <div className="input-group mt-3 px-5 d-flex flex-nowrap">
        <span className="searchlogo" id="basic-addon1">
          {Search}
        </span>
        <input
          type="text"
          className="search"
          placeholder="Search by name or email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <a href="#!">
        <AiOutlineDownload
          color="blue"
          fontSize="38px"
          style={{
            backgroundColor: "ced4da",
            padding: "5px",
            borderRadius: "50%",
            marginTop: "10px",
          }}
        />
      </a>
    </div>
  )
}

export default SearchInput
