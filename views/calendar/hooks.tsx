import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import Day from './model/day';
import Event from './model/event';
import Month from './model/month';
import EventResponse from './interface/event-response';

export const useCalendar = () => {
  const [now, setNow] = useState(Month.now());
  const [events, setEvents] = useState([] as Event[]);

  const days = now.getAllDayOfTheMonth();

  const matchedDays = days.map((day: Day) => {
    day.events = events.reduce((acc, event) => {
      if (
        (day.day < event.startAt && event.startAt < day.lastMoment) ||
        (event.startAt < day.day && day.lastMoment < event.endAt) ||
        (day.day < event.endAt && event.endAt < day.lastMoment)
      ) {
        acc.push(event);
      }
      return acc;
    }, []);

    return day;
  });

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

      if (!data) {
        return;
      }

      setEvents(data.map(eventResponse => new Event(eventResponse)));
    };

    getEventsOfMonth();
  }, [now.toString()]);

  const handleIncreaseMonth = async () => {
    setEvents([]);

    if (now.month === 12) {
      return setNow(new Month(now.year + 1, 1));
    }

    setNow(new Month(now.year, now.month + 1));
  };

  const handleDecreaseMonth = async () => {
    setEvents([]);

    if (now.month === 1) {
      return setNow(new Month(now.year - 1, 12));
    }
    setNow(new Month(now.year, now.month - 1));
  };

  return { now, events, matchedDays, handleIncreaseMonth, handleDecreaseMonth };
};
