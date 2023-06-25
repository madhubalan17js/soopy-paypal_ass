import React from "react"
import Body from "../Components/Body"
import SearchInput from "../Components/SearchInput"
import Acitivitycontent from "../Components/Acitivitycontent"
import { BsSearch } from "react-icons/bs"
import { paylogo } from "../assests/assests"

const Activity = (props) => {
  //PaymentData
  var payMenrHistory = [
    {
      name: "Name.com Inc.",
      Image: paylogo,
      date: "2023-06-11",
      paymentMethod: "Automatic Payment ",
      amount: "-$9.89",
    },
    {
      name: "Name.com Inc.",
      Image: paylogo,
      date: "2023-05-18",
      paymentMethod: "Automatic Payment ",
      amount: "-$8.99",
    },
    {
      name: "Name.com Inc.",
      Image: paylogo,
      date: "2020-05-11",
      paymentMethod: "Automatic Payment ",
      amount: "-$9.99",
    },
    {
      name: "Name.com Inc.",
      Image: paylogo,
      date: "2020-03-11",
      paymentMethod: "Automatic Payment ",
      amount: "-$9.99",
    },
  ]
  //buttons
  const filterType = [" Date:Last 90 days", "Type", "Status"]
  return (
    <Body container={"container"}>
      <SearchInput Search={<BsSearch />} />
      <Acitivitycontent
        payMenrHistory={payMenrHistory}
        filterTypebtn={filterType}
      />
    </Body>
  )
}

export default Activity
