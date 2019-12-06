import React from 'react';
import moment from 'moment';
import Month from './Month.jsx';
import Year from './Year.jsx';
import { ajax } from 'jQuery';
import './Calendar.css';

class Calendar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: moment(),
            today: moment(),
            showMonthPopUp: false,
            showYearPopUp: false,
            months: moment.months(),
            id: 1,
            reservedArray: []
        }
        this.firstDay = this.firstDay.bind(this);
        this.currentDay = this.currentDay.bind(this);
        this.daysInMonth = this.daysInMonth.bind(this);
        this.weekday = this.weekday.bind(this);
        this.year = this.year.bind(this);
        this.month = this.month.bind(this);
        this.renderEmpty = this.renderEmpty.bind(this);
        this.renderNotEmpty = this.renderNotEmpty.bind(this);
        this.totalDays = this.totalDays.bind(this);
        this.getDates = this.getDates.bind(this);
        this.setNewReservations = this.setNewReservations.bind(this);
    }

    componentDidMount() {
        ajax({
            type: "GET",
            url: `/dates/${this.state.id}`,
            success: (data) => {
                let allReservations = [];
                data.forEach(e => {
                    let test = this.getDates(e.reservation_start, e.reservation_end);
                    allReservations = allReservations.concat(test);
                })
                this.setState({reservedArray: allReservations});
            }
        })
    }

    setNewReservations(reservations) {
       let filtered = reservations.filter(e => {
            let test = moment(e, 'YYYY/MM/DD');
            let year= test.format('Y');
            let month= test.format('MMMM');
            if (month === this.month() && year === this.year()) {
                return e;
            }
        })
        return filtered.map(e => {
            let elementArray = e.split('-');
            return elementArray[elementArray.length - 1];
        })
    }

     getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }

    firstDay() {
        let date = this.state.date;
        let firstDay = moment(date).startOf('month').format('d');
        return firstDay;
    }

    currentDay() {
        return this.state.date.format("D");
    }

    year() {
        return this.state.date.format("Y");
    }

    month() {
        return this.state.date.format("MMMM");
    }

    currentDate() {
        return this.state.date.get("date");
    }

    daysInMonth() {
        return this.state.date.daysInMonth();
    }

    nextMonth() {
        let date = Object.assign({}, this.state.date);
        date = moment(date).add(1, 'month');
        this.setState({ date: date})
    }

    previousMounth() {
        let date = Object.assign({}, this.state.date);
        date = moment(date).subtract(1, 'month');
        this.setState({ date: date})
    }

    weekday() {
        const weekdayshort = moment.weekdaysShort();
        return weekdayshort.map(day => {
            return (
              <th key={day} className="week-day">
               {day}
              </th>
            );
         });
    }
    renderEmpty() {
        let empty = [];

        for (let i = 0; i < this.firstDay(); i ++) {
            
            empty.push(<td key={i*100} className="emptySlot">
                {''}
            </td>)
        }
        return empty;
    }
    onDayClick(e, day) {

        this.props.onDayClick && this.props.onDayClick(e, day);
    }

    renderNotEmpty() {
        let days = [];
        var filtered = this.setNewReservations(this.state.reservedArray);

        for (let d = 1; d <= this.daysInMonth(); d++) {
            if (d < 10) {
                d = '0' + d.toString();
                var className = (filtered.includes(d) ?
                "reserved" : "day");
            } else {
                var className = (filtered.includes(d.toString()) ?
                "reserved" : "day");
            }  
            days.push(
                <td key={d} className={className}>
                <span onClick={(e) => {this.onDayClick(e, d)}}>{d}</span>
                </td>
            )
        }
        return days;
    }

    totalDays() {
        let total = [...(this.renderEmpty)(), ...(this.renderNotEmpty)()];
        let rows = [];
        let cells = [];

        total.forEach((row, index) => {
            if(index % 7 !== 0) {
                cells.push(row)
            } else {
                let insertNewRow = cells.slice();
                rows.push(insertNewRow);
                cells = [];
                cells.push(row);
            }
            if (index === total.length - 1) {
                let insertNewRow = cells.slice();
                rows.push(insertNewRow);
            }
        });
            return rows.map((d, i) => {
                return (
                    <tr key={i * 1000}>
                        {d}
                    </tr>
                );
            });
    }

    render() {
      return (
        <div className="calendar-container">
            <table className="calendar">
                <thead>
                    <tr className="calendar-header">
                        <td colSpan="5">
                        <button onClick={e => {this.previousMounth()}}>{"<"}</button>
                            <Month month={this.month} months={this.state.months}/>
                            {' '}
                            <Year year={this.year}/>
                            <button onClick={e => {this.nextMonth()}}>{">"}</button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                {(this.weekday)()}
                    </tr>
                    {(this.totalDays)()}
                </tbody>
            </table>
        </div>
      );
    }
  }

export default Calendar;