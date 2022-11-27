import data from './tickets.json' assert { type: 'json' }

let tickets = data.tickets

function putTickets() {
    // const tbl = document.createElement('table')
    // const tblBody = document.createElement("tbody");
    //
    // for (let i = 0; i < tickets.length; i++) {
    //     console.log(tickets[i])
    //     const row = document.createElement("tr");
    //     for (const key of Object.keys(tickets[i])) {
    //         const rowElement = tickets[i][key]
    //         console.log(rowElement)


    const container = document.createElement('div')
    // const tblBody = document.createElement("tbody");

    for (let i = 0; i < tickets.length; i++) {
        console.log(tickets[i])
        const row = document.createElement("tr");
        for (const key of Object.keys(tickets[i])) {
            const rowElement = tickets[i][key]
            console.log(rowElement)


















            const cell = document.createElement("td");
            const cellText = document.createTextNode(`${rowElement}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}

putTickets()