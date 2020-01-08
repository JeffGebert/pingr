import React from "react";
import "./ActiveRequestsItem.scss";

export default function ActiveRequestsItem(props) {
  return (
    <div className="request">
      <div className="request-item">
        <div className="request-item-header">
          <span className="request-item-category text">Barber Shop</span>
          <span className="request-item-service text">Beard trim</span>
        </div>
        <div className="request-status-container">
          <div className="card-header">
            <span className="request-availability text">BUSINESS DETAILS</span>
            <hr className="separator" />
          </div>
          <span className="request-status -confirmed text">
            <i className="far fa-check-circle icon-spacing"></i>CONFIRMED
          </span>
          <span className="request-confirmed-time text">
            Jan. 20, 2020, 2:20 p.m.
          </span>
        </div>
        <div className="request-availability-container">
          <div className="card-header">
            <span className="request-availability text">REQUEST DETAILS</span>
            <hr className="separator" />
          </div>
          <span className="request-date text">
            <i className="far fa-calendar icon-spacing"></i>Jan. 22, 2020
          </span>
          <span className="request-time-start text">
            <i className="far fa-clock icon-spacing"></i>12:00 p.m.
          </span>
          <span className="request-hyphen text">—</span>
          <span className="request-time-end text">5:00 p.m.</span>
          <span className="request-max-price text">
            <i className="fas fa-dollar-sign icon-spacing"></i> 30.00
          </span>
        </div>
        <div className="request-confirmed-tab">
          <div className="card-header">
            <span className="request-availability text">BUSINESS DETAILS</span>
            <hr className="separator" />
          </div>
          <div className="business-card">
            <span className="business-name text">Joe's Panini</span>
            <span className="business-service text">View map</span>
          </div>
          <span className="business-address text">
            <i className="fas fa-map-marker-alt icon-spacing"></i>5322 St
            Laurent Blvd, Montreal
          </span>
          <span className="business-address text">
            <i className="fas fa-dollar-sign icon-spacing"></i>25.00
          </span>
          <span className="business-address text">
            <i className="fas fa-mobile-alt icon-spacing"></i>514-775-1524
          </span>
        </div>
        <div className="request-cancel text">CANCEL</div>
      </div>
      <div className="request-item">
        <div className="request-item-header">
          <span className="request-item-category text">Barber Shop</span>
          <span className="request-item-service text">Beard trim</span>
        </div>
        <div className="request-status-container">
          <div className="card-header">
            <span className="request-availability text">BUSINESS DETAILS</span>
            <hr className="separator" />
          </div>
          <span className="request-status -canceled text">
            <i className="far fa-check-circle icon-spacing"></i>CONFIRMED
          </span>
          <span className="request-confirmed-time text">
            Jan. 20, 2020, 2:20 p.m.
          </span>
        </div>
        <div className="request-availability-container">
          <div className="card-header">
            <span className="request-availability text">REQUEST DETAILS</span>
            <hr className="separator" />
          </div>
          <span className="request-date text">
            <i className="far fa-calendar icon-spacing"></i>Jan. 22, 2020
          </span>
          <span className="request-time-start text">
            <i className="far fa-clock icon-spacing"></i>12:00 p.m.
          </span>
          <span className="request-hyphen text">—</span>
          <span className="request-time-end text">5:00 p.m.</span>
          <span className="request-max-price text">
            <i className="fas fa-dollar-sign icon-spacing"></i> 30.00
          </span>
        </div>
        <div className="request-confirmed-tab">
          <div className="card-header">
            <span className="request-availability text">BUSINESS DETAILS</span>
            <hr className="separator" />
          </div>
          <div className="business-card">
            <span className="business-name text">Joe's Panini</span>
            <span className="business-service text">View map</span>
          </div>
          <span className="business-address text">
            <i className="fas fa-map-marker-alt icon-spacing"></i>5322 St
            Laurent Blvd, Montreal
          </span>
          <span className="business-address text">
            <i className="fas fa-dollar-sign icon-spacing"></i>25.00
          </span>
          <span className="business-address text">
            <i className="fas fa-mobile-alt icon-spacing"></i>514-775-1524
          </span>
        </div>
        <div className="request-cancel text">CANCEL</div>
      </div>
    </div>
  );
}
