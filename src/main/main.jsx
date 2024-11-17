import React from 'react';
import '../app.css';
import './main.css';
import { useMemo } from 'react';
import { format, eachDayOfInterval, parseISO } from 'date-fns';

const CalendarGrid = ({ startDate, endDate }) => {
    const dateColumns = useMemo(() => {
      const start = parseISO(startDate);
      const end = parseISO(endDate);
      
      return eachDayOfInterval({ start, end }).map(date => ({
        fullDate: format(date, 'yyyy-MM-dd'),
        dayOfWeek: format(date, 'EEE'),
        dayOfMonth: format(date, 'dd')
      }));
    }, [startDate, endDate]);
  
    return (
      <div className="calendar-grid">
        {dateColumns.map(({ fullDate, dayOfWeek, dayOfMonth }) => (
          <div key={fullDate} className="calendar-column">
            <div className="column-header">
              <span className="day-of-week">{dayOfWeek}</span>
              <span className="day-of-month">{dayOfMonth}</span>
            </div>
            <div className="column-content">
              {/* Add your events or scheduling content here */}
            </div>
          </div>
        ))}
      </div>
    );
  };

function Main() {
    return (
    <>
        <section className="box">
            <h3>Share</h3>
            <label htmlFor="shareCalendar">Calendar:</label>
            <select id="shareCalendar" name="shareCalendar">
                <option value="personal">Personal</option>
                <option value="exams">Exam and Quizes</option>
                <option value="events">Events</option>
                <option value="team">Team Events</option>
                <option value="bob">Bob's Availability Schedule</option>
            </select>
            
            <br/>
            
            <input 
                type="text" 
                id="shareUsername" 
                name="shareUsername" 
                placeholder="username" 
                required 
            />
            
            <button type="button">Share</button>
        </section>
      
        <br/>
      
        <section className="box">
            <h3>New Event</h3>
            <div>
                <input 
                    type="date" 
                    id="startDate" 
                    name="startDate" 
                    placeholder="Start Date (Optional)" 
                />
                <input 
                    type="date" 
                    id="endDate" 
                    name="endDate" 
                    placeholder="End Date" 
                    required 
                />
                <br/>
                <input 
                    type="time" 
                    id="startTime" 
                    name="startTime" 
                    placeholder="Start Time (Optional)" 
                />
                <input 
                    type="time" 
                    id="endTime" 
                    name="endTime" 
                    placeholder="End Time (Optional)" 
                />
                <br/>
                <input 
                    type="number" 
                    id="hoursToCompletion" 
                    name="hoursToCompletion" 
                    placeholder="Hours to Completion" 
                    required 
                />
                <br/>
                <label htmlFor="eventType">Type:</label>
                <select id="eventType" name="eventType">
                    <option value="project">Project</option>
                    <option value="exam">Exam</option>
                    <option value="quiz">Quiz</option>
                    <option value="hw">HW</option>
                </select>
                
                <label htmlFor="addTo">Add To:</label>
                <select id="addTo" name="addTo">
                    <option value="personal">Personal</option>
                    <option value="exams">Exam and Quizes</option>
                    <option value="events">Events</option>
                    <option value="team">Team Events</option>
                    <option value="bob">Bob's Availability Schedule</option>
                </select>
            </div>
            <br/>
            <button type="button">Create Event</button>
        </section>
      
        <br/>
      
        <section className="box">
            <h3>New Calendar</h3>
            <input 
                type="text" 
                id="newCalendarName" 
                name="newCalendarName" 
                placeholder="Calendar Name" 
                required 
            />  
            <button type="button">Create Calendar</button>
        </section>

        <section>
            <h3>Calendar</h3>
            <div>
                <fieldset>
                    <legend>Private Calendars</legend>
                    <label htmlFor="personal">Personal</label>
                    <input type="checkbox" id="personal" name="personal" defaultChecked />
                    
                    <label htmlFor="exams">Exams and Quizes</label>
                    <input type="checkbox" id="exams" name="exams" />
                    
                    <label htmlFor="events">Events</label>
                    <input type="checkbox" id="events" name="events" />
                </fieldset>
                
                <fieldset>
                    <legend>Shared Calendars</legend>
                    <label htmlFor="teamEvents">Team Events</label>
                    <input type="checkbox" id="teamEvents" name="teamEvents" defaultChecked />
                    
                    <label htmlFor="bobSchedule">Bob's Availability Schedule</label>
                    <input type="checkbox" id="bobSchedule" name="bobSchedule" />
                    
                    <label htmlFor="birthday">birthday[ical]</label>
                    <input type="checkbox" id="birthday" name="birthday" />
                </fieldset>
            </div>
            <div>
                <CalendarGrid 
                    startDate="2024-06-05" 
                    endDate="2024-06-12" 
                />
            </div>
        </section>
    </>
    );
}

export default Main;