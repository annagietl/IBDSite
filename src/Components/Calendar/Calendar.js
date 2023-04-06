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
      <h1>Calendar</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" required />
        <br />
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" required />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea name="description" />
        <br />
        <button type="submit">Add Date</button>
      </form>
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
