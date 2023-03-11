import React from "react";
import "./Featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
export default function Featured() {
  const percentage = 77;
  return (
    <div className="featured">
      <div className="top">
        <h3>Total Revenue</h3>
        <MoreVertOutlinedIcon className="dots" />
      </div>
      <div className="bottom">
        <div className="featured-bar">
          <CircularProgressbar
            strokeWidth={4}
            value={percentage}
            text={`${percentage}%`}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$400</p>
        <p className="desc">Transaction processing...</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="13" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="13" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <ExpandMoreOutlinedIcon fontSize="13" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
