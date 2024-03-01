/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Daniela Souza Freire.
*/
const data = [
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    extension: "4804",
    start_date: "2012/12/02",
    salary: 372000,
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extension: "9608",
    start_date: "2012/08/06",
    salary: 137500,
  },
  {
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    extension: "6200",
    start_date: "2010/10/14",
    salary: 327900,
  },
  {
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    extension: "2360",
    start_date: "2009/09/15",
    salary: 205500,
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    extension: "1667",
    start_date: "2008/12/13",
    salary: 103600,
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extension: "3814",
    start_date: "2008/12/19",
    salary: 90560,
  },
  {
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    extension: "9497",
    start_date: "2013/03/03",
    salary: 342000,
  },
  {
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    extension: "5421",
    start_date: "2011/04/25",
    salary: 320800,
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    extension: "8422",
    start_date: "2011/07/25",
    salary: 170750,
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    extension: "1562",
    start_date: "2009/01/12",
    salary: 86000,
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extension: "6224",
    start_date: "2012/03/29",
    salary: 433060,
  },
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    extension: "5407",
    start_date: "2008/11/28",
    salary: 162700,
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extension: "6741",
    start_date: "2008/10/16",
    salary: 470600,
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extension: "3597",
    start_date: "2012/12/18",
    salary: 313500,
  },
  {
    name: "Tatyana Fitzpatrick",
    position: "Regional Director",
    office: "London",
    extension: "1965",
    start_date: "2010/03/17",
    salary: 385750,
  },
  {
    name: "Michael Silva",
    position: "Marketing Designer",
    office: "London",
    extension: "1581",
    start_date: "2012/11/27",
    salary: 198500,
  },
  {
    name: "Paul Byrd",
    position: "Chief Financial Officer (CFO)",
    office: "New York",
    extension: "3059",
    start_date: "2010/06/09",
    salary: 725000,
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extension: "1721",
    start_date: "2009/04/10",
    salary: 237500,
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    extension: "2558",
    start_date: "2012/10/13",
    salary: 132000,
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    extension: "2290",
    start_date: "2012/09/26",
    salary: 217500,
  },
  {
    name: "Jenette Caldwell",
    position: "Development Lead",
    office: "New York",
    extension: "1937",
    start_date: "2011/09/03",
    salary: 345000,
  },
  {
    name: "Yuri Berry",
    position: "Chief Marketing Officer (CMO)",
    office: "New York",
    extension: "6154",
    start_date: "2009/06/25",
    salary: 675000,
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extension: "8330",
    start_date: "2011/12/12",
    salary: 106450,
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    extension: "3023",
    start_date: "2010/09/20",
    salary: 85600,
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    extension: "5797",
    start_date: "2009/10/09",
    salary: 1200000,
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    extension: "8822",
    start_date: "2010/12/22",
    salary: 92575,
  },
  {
    name: "Jennifer Chang",
    position: "Regional Director",
    office: "Singapore",
    extension: "9239",
    start_date: "2010/11/14",
    salary: 357650,
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    extension: "1314",
    start_date: "2011/06/07",
    salary: 206850,
  },
  {
    name: "Fiona Green",
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    extension: "2947",
    start_date: "2010/03/11",
    salary: 850000,
  },
  {
    name: "Shou Itou",
    position: "Regional Marketing",
    office: "Tokyo",
    extension: "8899",
    start_date: "2011/08/14",
    salary: 163000,
  },
  {
    name: "Michelle House",
    position: "Integration Specialist",
    office: "Sidney",
    extension: "2769",
    start_date: "2011/06/02",
    salary: 95400,
  },
  {
    name: "Suki Burks",
    position: "Developer",
    office: "London",
    extension: "6832",
    start_date: "2009/10/22",
    salary: 114500,
  },
  {
    name: "Prescott Bartlett",
    position: "Technical Author",
    office: "London",
    extension: "3606",
    start_date: "2011/05/07",
    salary: 145000,
  },
  {
    name: "Gavin Cortez",
    position: "Team Leader",
    office: "San Francisco",
    extension: "2860",
    start_date: "2008/10/26",
    salary: 235500,
  },
  {
    name: "Martena Mccray",
    position: "Post-Sales support",
    office: "Edinburgh",
    extension: "8240",
    start_date: "2011/03/09",
    salary: 324050,
  },
  {
    name: "Unity Butler",
    position: "Marketing Designer",
    office: "San Francisco",
    extension: "5384",
    start_date: "2009/12/09",
    salary: 85675,
  },
];

//funtion receive datas and print
function printdata(dataToPrint) {
  const tableData = document.getElementsByClassName("tableData")[0];
  tableData.innerHTML = "";

  for (let contador = 0; contador < dataToPrint.length; contador++) {
    tableData.innerHTML += ` <tr>
        <td> ${dataToPrint[contador].name} </td>
        <td> ${dataToPrint[contador].position} </td>
        <td> ${dataToPrint[contador].office} </td>
        <td> ${dataToPrint[contador].extension} </td>
        <td> ${dataToPrint[contador].start_date} </td>
        <td> ${new Intl.NumberFormat("en-US", { 
            style:"currency", currency:"USD", maximumFractionDigits:0
        }).format(dataToPrint[contador].salary)} </td>
        </tr>`;
  }
}

let lastSortingParam;

// funtion order the datas
function orderData(sortParam) {
  let direction = "asc";
  if (lastSortingParam == sortParam) {
    direction = "desc";
  }

  lastSortingParam = sortParam;

  const sortedData = data.sort((a, b) => {
    if (a[sortParam] < b[sortParam]) {
      return -1;
    }
    if (a[sortParam] > b[sortParam]) {
      return 1;
    }

    return 0;
  });

  if (direction == "desc") {
    printdata(sortedData.reverse());
    return;
  }
  printdata(sortedData);
}

printdata(data);
