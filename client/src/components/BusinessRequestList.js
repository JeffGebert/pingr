import React, { useState, useEffect } from "react";
import "./BusinessRequestList.scss";
import axios from "axios";
import BusinessRequestListItem from "./BusinessRequestListItem";
const webSocket = new WebSocket("ws://localhost:8001")

export default function BusinessRequestList(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/requests`, {
        params: { view: props.view, categoryID: 1 }
      })
      .then(response => {
        return setState(response.data);
      });



    webSocket.onopen = function (event) {
      webSocket.send("ping");
      console.log("open connection:", event.data)

    };

    webSocket.onmessage = function (event) {
      console.log("BAABABABABABAB", event.data)

      if (event.data === "fetchRequestList") {
        axios
          .get(`http://localhost:8001/api/requests`, {
            params: { view: props.view, categoryID: 1 }
          })
          .then(response => {
            return setState(response.data);
          });
      }

    }

  }, []);

  const list = state.filter((request) => !request.service_id).map(request => {
    return (
      <BusinessRequestListItem
        key={request.request_id}
        requestID={request.request_id}
        categoryID={request.category_id}
        categoryName={request.category_name}
        service={request.service_name}
        userName={request.user_name}
        availabilityStartTime={request.availability_start_time}
        availabilityEndTime={request.availability_end_time}
        maxPrice={request.request_max_price}
        businessID={2}
        appointmentStartTime={request.appointment_start_time}
        webSocket={webSocket}
      />
    );
  });
  return <div className="layout-padding">{list}</div>;
}