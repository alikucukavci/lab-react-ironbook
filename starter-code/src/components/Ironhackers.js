import React from 'react';
import img from "../linkedin.png"

const Ironhackers = props => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Campus</th>
                    <th>Role</th>
                    <th>Links</th>
                </tr>

                {props.data.filter(x => {
                    if (x.firstName.includes(props.dataSearch) || x.lastName.includes(props.dataSearch) ) return true
                }).filter(x => {
                    if (props.studentCheck === true) { return x.role.includes("student") }
                   else if (props.teacherCheck === true) { return x.role.includes("teacher") }
                    else return true
                }).filter(x => {
                    if (x.campus.includes(props.campusName)) return true
                }).map(x => {
                    //   `user` is the element in the array
                    return (
                        <tr key={x.id}>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.campus}</td>
                            <td>{x.role}</td>
                            <td><a href={x.linkedin}>{x.linkedin && <img className="limg" src={img} alt="Noooo" />}</a>
                                </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Ironhackers;
