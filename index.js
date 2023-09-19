const axios = require('axios');
const fs = require('fs');

//starting id 1215110001
const getInterHallTicket = () => {
    for(let i = 1215163000; i < 1215167000; i++) {
        getTicketApis(i);
    }    
}

const getTicketApis = (id) => {
    const url = `http://www.results.manabadi.co.in/i1MBGen2012.aspx?htno=${id}`;
    axios.get(url).then((response) => {
        fs.appendFile('hallTicket.txt', id + " :: " + response.data + "\n", (err) => {
            if(err){
                console.error(err);
            }
        });
    }).catch((err) => {
        fs.appendFile('failedHallTicket.txt', id + "\n", (err) => {
            if(err){
                console.error(err);
            }
        });
        console.error(id);
    });
}

getInterHallTicket();

