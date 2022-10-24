import React from "react";
import "./clock.scss";

export const Clock = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) => {
  return (
    <div>
        <h1 className = "clockHeader" >COUNTDOWN FOR EVENT</h1>
      <div className="clockContainer">
        <section className="timerContainer">
          {/* <h1>Punch App</h1> */}
          <section className="timer">
            <div className="clock">
              <section>
                {timerDays < 10 ? <p> 0{timerDays} </p> : <p> {timerDays} </p>}
                {/* <p> {timerDays} </p> */}
                <small>Days</small>
              </section>
              <span>:</span>
              <section>
                {timerDays < 10 ? (
                  <p> 0{timerHours} </p>
                ) : (
                  <p> {timerHours} </p>
                )}

                <small>Hours</small>
              </section>
              <span>:</span>
              <section>
                {timerMinutes < 10 ? (
                  <p> 0{timerMinutes} </p>
                ) : (
                  <p> {timerMinutes} </p>
                )}
                <small>Minutes</small>
              </section>
              <span>:</span>
              <section>
                {timerSeconds < 10 ? (
                  <p> 0{timerSeconds} </p>
                ) : (
                  <p> {timerSeconds} </p>
                )}
                <small>Seconds</small>
              </section>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
