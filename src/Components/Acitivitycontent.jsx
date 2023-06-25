import React, { useState } from "react"
import moment from "moment"

const Acitivitycontent = ({ payMenrHistory, filterTypebtn }) => {
  const [data, SetData] = useState(payMenrHistory)

  //Date filter usage

  const currentDate = new Date()
  const currentDateTime = currentDate.getTime()
  const last90DaysDate = new Date(
    currentDate.setDate(currentDate.getDate() - 90)
  )
  const last90DaysDateTime = last90DaysDate.getTime()

  //Filterby Value function

  const FunctionFilter = (value, Payment) => {
    if (value === "Type") {
      let payMenrHistory = Payment.filter((item) => item.name)
      SetData(payMenrHistory)
    }
    if (value === "Date:Last 90 days") {
      let payMenrHistory = Payment.filter((item) => {
        const elementDateTime = new Date(item.date).getTime()
        if (
          elementDateTime <= currentDateTime &&
          elementDateTime > last90DaysDateTime
        ) {
          return true
        }
        return false
      }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })

      SetData(payMenrHistory)
    }
    if (value === "Status") {
      payMenrHistory = Payment.filter(
        (item) => item.paymentMethod === "Automatic Payment "
      )
      SetData(payMenrHistory)
    }
  }
  //date show formate

  const dateformat = (date) => {
    const func = moment(date).format("LL")
    return func
  }

  return (
    <div>
      <div className="mt-3 px-5 mx-5">
        <h6 className="fw-bold">Filter by</h6>
        <div className="d-flex flex-nowrap">
          {filterTypebtn.map((btnname, ind) => (
            <button
              key={ind}
              type="button"
              className="btn btn-outline-info rounded-pill  px-3  mx-2 fw-bold "
              onClick={(e) =>
                FunctionFilter(e.target.innerText, payMenrHistory)
              }
            >
              {btnname}
            </button>
          ))}
        </div>
        {/*    list */}
        <div className="mt-3">
          <h6 className="fw-bold mb-2">Completed</h6>
          <small className="text-muted">This week</small>
          {data.map((list, ind) => (
            <div
              className="card mb-3 mt-2 d-flex flex-row align-items-center justify-content-between"
              key={ind}
            >
              <div className="d-flex  p-2">
                <img
                  src={list.Image}
                  className="rounded-circle"
                  width={"50px"}
                  height={"50px"}
                  alt="im"
                />
                <div className="mx-3 ">
                  <h4>{list.name}</h4>
                  <div>
                    <small>{`${dateformat(list.date)} . ${
                      list.paymentMethod
                    }`}</small>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <h4>{list.amount}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Acitivitycontent
