import React, { Component } from 'react';

const title = (props) => (
    <div class="jumbotron-fluid py-1">
    <div class="container">
        <div class="display-4"> {props.title} </div>
    </div>
    </div>
);

export default title;