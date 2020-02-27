import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import Event from './model/event';
import Month from './model/month';
import EventResponse from './interface/event-response';

export const useCalendar = () => {
  const [now, setNow] = useState(Month.now());
  const [datesOfMonth, setDatesOfMonth] = useState([]);
  const [events, setEvents] = useState([] as Event[]);

  useEffect(() => {
    const getEventsOfMonth = async () => {
      const response = await fetch(
        `http://localhost:4000/event?year=${now.year}&month=${now.month}`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );

      const {
        data,
      }: { count: number; data: EventResponse[] } = await response.json();

      setEvents(data.map(eventResponse => new Event(eventResponse)));
    };

    getEventsOfMonth();
  }, [now.toString()]);

  const handleIncreaseMonth = async () => {
    if (now.month === 12) {
      return setNow(new Month(now.year + 1, 1));
    }

    setNow(new Month(now.year, now.month + 1));
  };

  const handleDecreaseMonth = async () => {
    if (now.month === 1) {
      return setNow(new Month(now.year - 1, 12));
    }

    setNow(new Month(now.year, now.month - 1));
  };

  return { now, events, handleIncreaseMonth, handleDecreaseMonth };
};
