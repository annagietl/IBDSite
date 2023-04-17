import React, { useState } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import Nav from "../Nav/Nav";

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [dates, setDates] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newDate = {
      start: moment(formData.get('date')).toDate(),
      end: moment(formData.get('date')).add(1, 'hours').toDate(),
      title: formData.get('title'),
      desc: formData.get('description')
    };
    setDates([...dates, newDate]);
  };

  return (
    <div>
      <Nav />

      <h1 id='calendarh1'>Calendar</h1>
      <h3 id='calendarh3'>Use this calendar to keep track of important medication and appointment dates</h3>
      <hr/>

      {/* form for users to enter new events */}
      <form onSubmit={handleSubmit} id='calendarform'>
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" required />
        <br />
        <br />
        <br />
        <br />

        <label htmlFor="title">Title: </label>
        <input type="text" name="title" required />
        <br />
        <br />
        <br />
        <br />

        <label htmlFor="description">Description: </label>
        <textarea name="description" />
        <br />
        <br />

        <br />
        <br />

        <button type="submit">Add Date</button>
      </form>

      <hr />

      {/* react calendar tool initialize and define */}
      <Calendar
        localizer={localizer}
        events={dates}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarPage;
