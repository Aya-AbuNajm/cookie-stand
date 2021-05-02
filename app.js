// "use strict";

function getRndInteger(max) {
    return Math.floor(Math.random() * max);
  }

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const continar = document.getElementById('seal');
const tableData = document.createElement('table');
continar.appendChild(tableData);

Location.prototype.getRndInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function Location(name, min, max, avgPerCustSales) {

    this.name = name,
        this.min = min,
        this.max = max,
        this.avg = [],
        this.avgPerCustSales = Math.ceil(avgPerCustSales),
        this.salesPerHour = [],
        this.totalSeals = 0,

        this.calc();
}


Location.prototype.calc = function() {

    // for (let i = 0; i < 14; i++) {

    //     this.avg.push(getRndInteger(this.min, this.max));
    // }
    for (let j = 0; j < hours.length; j++) {
        // this.salesPerHour.push(Math.ceil(this.avgPerCustSales * this.avg[j]));
        this.salesPerHour[j] = this.getRndInteger(this.min, this.max) * this.avgPerCustSales
        this.totalSeals += this.salesPerHour[j];

    }
    return this.totalSeals

};



// lab 06
const seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: [],
    avgPerCustSales: 6.3,
    salesPerHour: [],
    totalSeals: 0,
    calc: function() {
        for (let i = 0; i < 14; i++) {

            this.avg.push(getRndInteger(this.min, this.max));
        }
        for (let j = 0; j < 14; j++) {
            this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
            this.totalSeals += this.salesPerHour[j];



        }
    },




    render: function() {
        const sealDiv = document.getElementById('seal');

        const name = document.createElement('h2');
        name.textContent = 'Seattle';
        sealDiv.append(name);

        const list = document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            // creat li 
            const item = document.createElement('li');

            // inject hours:sales
            item.textContent = hours[i] + ':' + this.salesPerHour[i];


            // append  li to the ul
            list.append(item);

        }
        const totalItem = document.createElement('li');
        totalItem.textContent = 'Total: ' + this.totalSeals;
        list.append(totalItem);

        sealDiv.append(list);

        console.log('container');

        /*
        <main>
         <h1> Shope Location</h1>
         <ul>
          <li> 6am: 16 cookies</li>
          <li> 7pm: 30 cookies</li>
          <li> total : 875 cookies </li>
          </ul>
        <main>  
        */


    },
}

seattle.calc()
 console.log(seattle.avg) 
//  seattle.render()




// Tokyo 

const tokyo = {
        name: 'Tokyo',
        min: 3,
        max: 24,
        avg: [],
        avgPerCustSales: 1.2,
        salesPerHour: [],
        totalSeals: 0,
        calc: function() {
            for (let i = 0; i < 14; i++) {

                this.avg.push(getRndInteger(this.min, this.max));
            }
            for (let j = 0; j < 14; j++) {
                this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
                this.totalSeals += this.salesPerHour[j];



            }
        },

   


        render: function() {
            const sealDiv = document.getElementById('seal');

            const name = document.createElement('h2');
            name.textContent = 'Tokyo';
            sealDiv.append(name);

            const list = document.createElement('ul');
            for (let i = 0; i < hours.length; i++) {
                // creat li 
                const item = document.createElement('li');

                // inject hours:sales
                item.textContent = hours[i] + ':' + this.salesPerHour[i];


                // append  li to the ul
                list.append(item);

            }
            const totalItem = document.createElement('li');
            totalItem.textContent = 'Total: ' + this.totalSeals;
            list.append(totalItem);

            sealDiv.append(list);

            console.log('container');

            /*
            <main>
             <h1> Shope Location</h1>
             <ul>
              <li> 6am: 16 cookies</li>
              <li> 7pm: 30 cookies</li>
              <li> total : 875 cookies </li>
              </ul>
            <main>  
            */


            // },
            // }

            // seattle.calc() console.log(tokyo.avg) this.seattle.render()


        }
      
    } 
// Dubai 



            const dubai = {
                name: 'Dubai',
                min: 11,
                max: 38,
                avg: [],
                avgPerCustSales: 3.7,
                salesPerHour: [],
                totalSeals: 0,
                calc: function() {
                    for (let i = 0; i < 14; i++) {

                        this.avg.push(getRndInteger(this.min, this.max));
                    }
                    for (let j = 0; j < 14; j++) {
                        this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
                        this.totalSeals += this.salesPerHour[j];



                    }
                },




                render: function() {
                    const sealDiv = document.getElementById('seal');

                    const name = document.createElement('h2');
                    name.textContent = 'Dubai';
                    sealDiv.append(name);

                    const list = document.createElement('ul');
                    for (let i = 0; i < hours.length; i++) {
                        // creat li 
                        const item = document.createElement('li');

                        // inject hours:sales
                        item.textContent = hours[i] + ':' + this.salesPerHour[i];


                        // append  li to the ul
                        list.append(item);

                    }
                    const totalItem = document.createElement('li');
                    totalItem.textContent = 'Total: ' + this.totalSeals;
                    list.append(totalItem);

                    sealDiv.append(list);

                    console.log('container');

                    /*
                    <main>
                     <h1> Shope Location</h1>
                     <ul>
                      <li> 6am: 16 cookies</li>
                      <li> 7pm: 30 cookies</li>
                      <li> total : 875 cookies </li>
                      </ul>
                    <main>  
                    */


                },
            }
            dubai.calc()
            console.log(dubai.avg)
            //  dubai.render()

            // paris

            const paris = {
                name: 'Paris',
                min: 20,
                max: 38,
                avg: [],
                avgPerCustSales: 2.3,
                salesPerHour: [],
                totalSeals: 0,
                calc: function() {
                    for (let i = 0; i < 14; i++) {

                        this.avg.push(getRndInteger(this.min, this.max));
                    }
                    for (let j = 0; j < 14; j++) {
                        this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
                        this.totalSeals += this.salesPerHour[j];



                    }
                },




                render: function() {
                    const sealDiv = document.getElementById('seal');

                    const name = document.createElement('h2');
                    name.textContent = 'Paris';
                    sealDiv.append(name);

                    const list = document.createElement('ul');
                    for (let i = 0; i < hours.length; i++) {
                        // creat li 
                        const item = document.createElement('li');

                        // inject hours:sales
                        item.textContent = hours[i] + ':' + this.salesPerHour[i];


                        // append  li to the ul
                        list.append(item);

                    }
                    const totalItem = document.createElement('li');
                    totalItem.textContent = 'Total: ' + this.totalSeals;
                    list.append(totalItem);

                    sealDiv.append(list);

                    console.log('container');

                    /*
                    <main>
                     <h1> Shope Location</h1>
                     <ul>
                      <li> 6am: 16 cookies</li>
                      <li> 7pm: 30 cookies</li>
                      <li> total : 875 cookies </li>
                      </ul>
                    <main>  
                    */


                },
            }

            paris.calc()
             console.log(paris.avg)
            //  paris.render()

            // Lima


            const lima = {
                name: 'Lima',
                min: 20,
                max: 38,
                avg: [],
                avgPerCustSales: 2.3,
                salesPerHour: [],
                totalSeals: 0,
                calc: function() {
                    for (let i = 0; i < 14; i++) {

                        this.avg.push(getRndInteger(this.min, this.max));
                    }
                    for (let j = 0; j < 14; j++) {
                        this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
                        this.totalSeals += this.salesPerHour[j];



                    }
                },




                render: function() {
                    const sealDiv = document.getElementById('seal');

                    const name = document.createElement('h2');
                    name.textContent = 'Lima';
                    sealDiv.append(name);

                    const list = document.createElement('ul');
                    for (let i = 0; i < hours.length; i++) {
                        // creat li 
                        const item = document.createElement('li');

                        // inject hours:sales
                        item.textContent = hours[i] + ':' + this.salesPerHour[i];


                        // append  li to the ul
                        list.append(item);

                    }
                    const totalItem = document.createElement('li');
                    totalItem.textContent = 'Total: ' + this.totalSeals;
                    list.append(totalItem);

                    sealDiv.append(list);

                    console.log('container');

                    /*
                    <main>
                     <h1> Shope Location</h1>
                     <ul>
                      <li> 6am: 16 cookies</li>
                      <li> 7pm: 30 cookies</li>
                      <li> total : 875 cookies </li>
                      </ul>
                    <main>  
                    */


                },
            }

        //     lima.calc() console.log(lima.avg) lima.render() ima.avg)
        // lima.render()() console.log(lima.avg) lima.render() ima.avg)
        // lima.render()() console.log(lima.avg) lima.render() ima.avg)
        // lima.render()() console.log(lima.avg) lima.render() ima.avg)
        // lima.render();

       


// // data part 
// Location.prototype.render = function() {




//     let trData = document.createElement('tr');
//     tableData.appendChild(trData);
//     let tdColom = document.createElement('td');
//     trData.appendChild(tdColom);
//     tdColom.textContent = this.name

//     for (let i = 0; i < hours.length; i++) {
//         tdColom = document.createElement('td');
//         trData.appendChild(tdColom);
//         tdColom.textContent = this.salesPerHour[i];
//     }

//     tdColom = document.createElement('td');
//     trData.appendChild(tdColom);
//     tdColom.textContent = this.totalSeals;
// };


// // footer total 
// let footerTotal = function() {
//     let footerRow = document.createElement('tr');
//     // delet 
//     tableData.appendChild(footerRow);
//     let tdColom = document.createElement('td');
//     footerRow.appendChild(tdColom);
//     tdColom.textContent = 'total'

//     let totalOoTotal = 0
//     for (let i = 0; i < hours.length - 1; i++) {
//         let tdColom = document.createElement('td');
//         footerRow.appendChild(tdColom);
//         let totalColom = 0

//         for (let indx = 0; indx > city.length; indx++) {
//             totalColom = totalColom + city[indx].salesPerHour[i];
//             console.log(city[indx].salesPerHour[i]);


//         }
//         tdColom.textContent = totalColom;
//         totalOoTotal = totalOoTotal + totalColom
//     }
//     let finalTotal = document.createElement('td');
//     footerRow.appendChild(finalTotal);
//     finalTotal.textContent = totalOoTotal
// }



// // header for table 
// function renderHeader() {
//     const tableRow = document.createElement('tr');
//     tableData.appendChild(tableRow);

//     const tableHeadingEl = document.createElement('th');
//     tableRow.appendChild(tableHeadingEl);
//     tableHeadingEl.textContent = 'Location';

//     for (let i = 0; i < hours.length; i++) {
//         const tableHeadingEl = document.createElement('th');
//         tableRow.appendChild(tableHeadingEl);
//         tableHeadingEl.textContent = hours[i];
//     }

//     const lastTableHeadingEl = document.createElement('th');
//     tableRow.appendChild(lastTableHeadingEl);
//     lastTableHeadingEl.textContent = 'Daily Location Total';
// }


// const seattle = new Location('seattle', 23, 65, 6.3);
// const tokyo = new Location('Tokyo', 3, 24, 1.2);
// const dubai = new Location('Dubai', 11, 38, 3.7);
// const paris = new Location('Paris', 20, 38, 2.3);
// const lima = new Location('Lima', 2, 16, 4.6);

// function call
let city = [seattle, tokyo, dubai, paris, lima];


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

