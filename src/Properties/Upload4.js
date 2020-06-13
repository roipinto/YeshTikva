//const React = require('react')
//import React, { Component } from 'react';
import React, { useState } from "react";
//import firebase from '../Firebase/Firebase';
//import storage from '../Firebase/Firebase';
import axios from '../EditEventsPage/axios-events';
import firebase, { storage } from '../Firebase/Firebase';
import database from '../Firebase/Firebase';


const ReactFirebaseFileUpload4 = () => {

    var storageRef = storage.ref("images/");
    storageRef.listAll().then(function (result) {
        result.items.forEach(function (imageRef) {
            // And finally display them
            displayImage1(imageRef);
        });
    }).catch(function (error) {
        // Handle any errors
    });

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);



    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };




    const handleUpload = () => {

        if (image == null) {
            alert("ראשית יש לבחור תמונה")
            return;
        }

        const uploadTask = storage.ref(`images/4.JPG`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
                window.location.reload();
            }
        );
    };
    const handleClick1 = () => {
        var storageRef = storage.ref("images/");
        storageRef.listAll().then(function (result) {
            result.items.forEach(function (imageRef) {
                // And finally display them
                displayImage1(imageRef);
            });
        }).catch(function (error) {
            // Handle any errors
        });
    };
    function displayImage1(imageRef) {
        imageRef.getDownloadURL().then(function (url) {
            console.log(imageRef.name);
            storage
                .ref("images")
                .child("4.JPG")
                .getDownloadURL()
                .then(url => {
                    setUrl(url);
                });

        })
    }

    function handleDelete() {
        console.log("delete")
        var storageRef = storage.ref("images/");
        var desertRef = storageRef.child('3.JPG');
        desertRef.delete().then(function () {
            window.location.reload();
        }).catch(function (error) {
            // Uh-oh, an error occurred!
        });

    }






    return (
        <div>

            <div class="alert alert-warning">
                <strong> ערוך תמונה רביעית שמופיעה בדף הבית</strong>
            </div>

            <progress value={progress} max="100" />
            <br />
            <br />
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload} className="btn btn btn-info btn-sm center-block agreeBut" >תעלה תמונה חדשה</button>
            <br />

            <br />
            <button onClick={handleDelete} className="btn btn btn-info btn-sm center-block agreeBut">מחק תמונה נוכחית</button>
            <br />

            <br />
            <img id="1" width="320" height="240" src={url || "http://via.placeholder.com/300"} alt="firebase-image" />


        </div>
    );
};



export default ReactFirebaseFileUpload4;