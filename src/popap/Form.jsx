import React  from "react";
import { useFormik } from 'formik';
import {
    pastDay,
    sameTime,
    littleTime,
    sixHours,
    toDay
  } from "../main/functionFilter";
import "./popap.scss";

function Form({ ...props }) {

    const validate = values => {
        const errors = {}
        if (pastDay(values.timeStart)) {
            errors.dateStart = false;
            alert("Your time is over :)")
        }
        if (sameTime(props.tasks,formik.values)) {
            errors.sameTime = false
            alert("it is impossible that time intersects")
        }
        if (littleTime(formik.values)) {
            errors.littleTime = false
            alert("task won't be less one hour")
        }
        if (sixHours(formik.values)) {
            errors.sixHours = false
            alert("the task cannot be more than six hours")
        }
        if (toDay(formik.values)) {
            errors.toDay = false
            alert("task can not more than one day")
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            description: "",
            title: "",
            timeStart: props.timeStart,
            timeEnd: props.timeEnd,
            start: props.start,
            end: props.end,
        },
        validate,
        onSubmit: values => {
            if (Object.keys(formik.errors).length == 0) {
                props.creacteTask({
                    timeStart: formik.values.timeStart,
                    timeEnd: formik.values.timeEnd,
                    start: formik.values.start,
                    end: formik.values.end,
                    title: formik.values.title === '' ? 'not task' : formik.values.title,
                    description: formik.values.description,
                }, props.tasks)
            }
        },
    });
    console.log(pastDay(formik.values.timeStart))
    return (
        <>
            <div className="black" onClick={props.closePopap}></div>
            <form className="popup event" onSubmit={formik.handleSubmit}>
                <span
                    className="popup__btn-close"
                    onClick={props.closePopap}
                >
                    <img
                        className="close"
                        src="https://img.icons8.com/color/48/000000/close-window.png"
                    ></img>
                </span>
                <input
                    className="event__name"
                    name="title"
                    type="text"
                    required
                    placeholder="Add title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                ></input>
                <div className="popup__picker">
                    <img
                        className="clock"
                        src="https://img.icons8.com/pastel-glyph/64/000000/time.png"
                    ></img>
                    <input
                        className="event__date-start"
                        name="timeStart"
                        required
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.timeStart}
                    ></input>
                    <input
                        className="event__time-start select"
                        name="start"
                        required
                        type="time"
                        step="900"
                        onChange={formik.handleChange}
                        value={formik.values.start}
                    ></input>
                    <span className="line"></span>
                    <input
                        className="event__time-end select"
                        name="end"
                        required
                        type="time"
                        step="900"
                        onChange={formik.handleChange}
                        value={formik.values.end}
                    ></input>
                    <input
                        className="event__date-end"
                        name="timeEnd"
                        required
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.timeEnd}
                    ></input>
                </div>
                <img
                    className="multilineText"
                    src="https://img.icons8.com/windows/32/000000/multiline-text.png"
                ></img>
                <textarea
                    className="event__description"
                    name="description"
                    cols="15"
                    rows="5"
                    placeholder="Add description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                ></textarea>
                <div className="footer-popup">
                    {props.delete ? (
                        <span
                            className="event__btn-delete"
                            onClick={e => props.deleteTask(props.id, props.timeEnd, props.end)}>
                            <img
                                className="bascket"
                                src="https://img.icons8.com/windows/32/000000/trash.png"
                            ></img>
                        </span>
                    ) : (
                            ""
                        )}</div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Form