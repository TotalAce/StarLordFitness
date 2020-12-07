
// import React, { Component } from 'react';
// import { DayPilot, DayPilotCalendar } from "daypilot-pro-react";

// class Calendar extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       viewType: "Week"
//     };
//   }

//   render() {
//     const { ...config } = this.state;
//     return (
//       <div>
//         <DayPilotCalendar
//           {...config}
//         />
//       </div>
//     );
//   }
// }


// const dp = new DayPilot.Calendar("dp");


// //Delete Event
// dp.eventDeleteHandling = "Update";

// dp.onEventDelete = function (args) {
//   if (!confirm("Do you really want to delete this event?")) {
//     args.preventDefault();
//   }
// };

// //context menu
// dp.contextMenu = new DayPilot.Menu({
//   items: [
//     { text: "Delete", onclick: function () { var e = this.source; dp.events.remove(e); } }
//   ],
//   cssClassPrefix: "menu_default"
// });


// //active area
// dp.onBeforeEventRender = function (args) {
//   args.e.areas = [{ "action": "JavaScript", "js": "(function(e) { dp.events.remove(e); })", "bottom": 9, "w": 17, "v": "Hover", "css": "event_action_delete", "top": 3, "right": 2 }];
// };
// // ...
// dp.init();
// // ...
// dp.init();


// // event creating
// dp.onTimeRangeSelected = function (args) {
//   const name = prompt("New event name:", "Event");
//   dp.clearSelection();
//   if (!name) return;
//   const e = new DayPilot.Event({
//     start: args.start,
//     end: args.end,
//     id: DayPilot.guid(),
//     resource: args.resource,
//     text: name
//   });
//   dp.events.add(e);
//   dp.message("Created");
// };


// dp.onEventDeleted = function (args) {

//   // AJAX call to the server, this example uses jQuery
//   $.post("/event/delete/" + args.e.id(), function (result) {
//     dp.message("Event deleted: " + args.e.text());
//   });

// };
// // ...
// dp.init();

// //double-click function
// const dps = new DayPilot.Scheduler("dps");

// dps.eventDoubleClickHandling = "Enabled";
// dps.onEventDoubleClick = function (args) {
//   alert("Event with id " + args.e.id() + " was double-clicked");
// };



// dp.eventArrangement = "SideBySide";
// dp.init();

// const e = new DayPilot.Event({
//   start: "2019-09-01T12:00:00",
//   end: "2019-09-01T14:00:00",
//   id: DayPilot.guid(),
//   text: "New Event"
// });
// dpc.events.add(e);



// // componentDidMount() {

// //   // load event data
// //   this.setState({
// //     startDate: "",
// //     events: [
// //       {
// //         id: 1,
// //         text: "",
// //         start: "",
// //         end: ""

// //       },
// //       {
// //         id: 2,
// //         text: "",
// //         start: "",
// //         end: "",
// //         backColor: "#38761d"
// //       },
// //       {
// //         id: 2,
// //         text: "",
// //         start: "",
// //         end: "",
// //         backColor: "#cc4125"
// //       },
// //     ]
// //   });
// // }

// export default Calendar;


import React from "react";
import { Redirect } from "react-router-dom"
import { TrainerNavBar } from "../../components/Navbar"

function TrainerCalendar() {
  const { isLoggedIn, isTrainer } = JSON.parse(localStorage.getItem("user")) || ""


  return (
    <>
      {(isLoggedIn === false || !isLoggedIn ?
        <Redirect to="/login" /> :
        (isTrainer === false ? <Redirect to="/unauthorized" /> :

          <div className="container">
            <TrainerNavBar />
            <h1 className="row justify-content-center">Trainer Calendar</h1>


            <div className="row">
              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">12/4/2020</li>
                  <li class="list-group-item">Exercise 1</li>
                  <li class="list-group-item">Exercise 2</li>
                </ul>
              </div>

              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">12/5/2020</li>
                  <li class="list-group-item">Exercise 1</li>
                  <li class="list-group-item">Exercise 2</li>
                </ul>
              </div>

              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">12/6/2020</li>
                  <li class="list-group-item">Exercise 1</li>
                  <li class="list-group-item">Exercise 2</li>
                </ul>
              </div>

              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">12/7/2020</li>
                  <li class="list-group-item">Exercise 1</li>
                  <li class="list-group-item">Exercise 2</li>
                </ul>
              </div>
            </div>

            <br />
            <div className="row">
              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">12/8/2020</li>
                  <li class="list-group-item">Exercise 1</li>
                  <li class="list-group-item">Exercise 2</li>
                </ul>
              </div>

              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">12/9/2020</li>
                  <li class="list-group-item">Exercise 1</li>
                  <li class="list-group-item">Exercise 2</li>
                </ul>
              </div>

              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">12/10/2020</li>
                  <li class="list-group-item">Exercise 1</li>
                  <li class="list-group-item">Exercise 2</li>
                </ul>
              </div>
            </div>
          </div>

        )
      )}
    </>
  )
}


export default TrainerCalendar;
