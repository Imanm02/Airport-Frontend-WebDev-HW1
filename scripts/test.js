//create a div with id ticketContainer

const container = document.getElementById('ticketContainer');


const data = []


/*
* <div class="grid-container" style="box-shadow: 0px 3px #69696985">
    <div class="grid-x grid-margin-x">
        <div class="cell large-3 small-6 center-content">
            <div class="typography center-content">
                <h4 class="text-secondary font-bold">
                    سمرقند
                    &nbsp;
                    ۸:۴۰
                </h4>
            </div>
        </div>
        <div class="cell large-3 small-6 center-content">
            <div class="typography center-content" style="direction: ltr">
                <h4 class="text-secondary font-bold">
                    تهران
                    &nbsp;
                    ۱۴:۱۵
                </h4>
            </div>
        </div>

        <div class="cell large-3 small-6">
            <div class="typography" style="text-align: center;">
                <h4 class="text-primary font-bold">
                    بیزینس
                </h4>
                <h5 class="text-secondary">
                    ۲۰۰۰۰۰۰۰ ریال
                </h5>
            </div>
        </div>

        <div class="cell large-3 small-6">
            <div class="typography" style="text-align: center;">
                <h4 class="text-primary font-bold">
                    اکونومی
                </h4>
                <h5 class="text-secondary">
                    ۲۰۰۰۰۰۰۰ ریال
                </h5>
            </div>
        </div>
    </div>
</div>
*
*
* */

// iterate through the data and create a div for each ticket

for (let i = 0; i < data.length; i++) {
    const ticket = data[i];
    const divContainer = document.createElement('div');
    divContainer.classList.add('grid-container');
    divContainer.style.boxShadow = '0px 3px #69696985';
    const divCell = document.createElement('div');
    divCell.classList.add('grid-x');
    divCell.classList.add('grid-margin-x');
    const divCell1 = document.createElement('div');
    divCell1.classList.add('cell');
    divCell1.classList.add('large-3');
    divCell1.classList.add('small-6');
    divCell1.classList.add('center-content');
    const divTypography = document.createElement('div');
    divTypography.classList.add('typography');
    divTypography.classList.add('center-content');
    const h4 = document.createElement('h4');
    h4.classList.add('text-secondary');
    h4.classList.add('font-bold');
    h4.innerText = ticket.from + ' ' + ticket.fromTime;
    const divCell2 = document.createElement('div');
    divCell2.classList.add('cell');
    divCell2.classList.add('large-3');
    divCell2.classList.add('small-6');
    divCell2.classList.add('center-content');
    const divTypography2 = document.createElement('div');
    divTypography2.classList.add('typography');
    divTypography2.classList.add('center-content');
    divTypography2.style.direction = 'ltr';
    const h42 = document.createElement('h4');
    h42.classList.add('text-secondary');
    h42.classList.add('font-bold');
    h42.innerText = ticket.to + ' ' + ticket.toTime;
    const divCell3 = document.createElement('div');
    divCell3.classList.add('cell');
    divCell3.classList.add('large-3');
    divCell3.classList.add('small-6');
    const divTypography3 = document.createElement('div');
    divTypography3.classList.add('typography');
    divTypography3.style.textAlign = 'center';
    const h43 = document.createElement('h4');
    h43.classList.add('text-primary');
    h43.classList.add('font-bold');
    h43.innerText = ticket.businessClass;
    const h44 = document.createElement('h5');
    h44.classList.add('text-secondary');
    h44.innerText = ticket.businessPrice;
    const divCell4 = document.createElement('div');
    divCell4.classList.add('cell');
    divCell4.classList.add('large-3');
    divCell4.classList.add('small-6');
    const divTypography4 = document.createElement('div');
    divTypography4.classList.add('typography');
    divTypography4.style.textAlign = 'center';
    const h45 = document.createElement('h4');
    h45.classList.add('text-primary');
    h45.classList.add('font-bold');
    h45.innerText = ticket.economyClass;
    const h46 = document.createElement('h5');
    h46.classList.add('text-secondary');
    h46.innerText = ticket.economyPrice;
    divTypography.appendChild(h4);
    divCell1.appendChild(divTypography);
    divTypography2.appendChild(h42);
    divCell2.appendChild(divTypography2);
    divTypography3.appendChild(h43);
    divTypography3.appendChild(h44);
    divCell3.appendChild(divTypography3);
    divTypography4.appendChild(h45);
    divTypography4.appendChild(h46);
    divCell4.appendChild(divTypography4);
    divCell.appendChild(divCell1);
    divCell.appendChild(divCell2);
    divCell.appendChild(divCell3);
    divCell.appendChild(divCell4);
    divContainer.appendChild(divCell);
    ticketsContainer.appendChild(divContainer);

}
