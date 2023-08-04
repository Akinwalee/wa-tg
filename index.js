//import express from 'express';
//import pkg from 'body-parser'
const express = require('express');

const app = express();
//const { urlencoded } = pkg;

//app.use((urlencoded(extend: true)));

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
