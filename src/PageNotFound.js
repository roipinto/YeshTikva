import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect, Switch } from "react-router-dom";
import MyTitle from './Title';

const NotFoundPage = (props) => (
    <MyTitle title="דף לא קיים" ></MyTitle>
);


export default NotFoundPage;