import 'handsontable/dist/handsontable.full.min.css'
// @ts-ignore
import Handsontable from 'handsontable'

console.log('autocomplete.js');


function getCarData() {
  return [
    ['America', 'Tesla', 2017, 'black', 'black'],
    ['Korea', 'Hyundai', 2018, 'blue', 'blue'],
    ['Japan', 'Nissan', 2018, 'blue', 'blue'],
    ['America', 'Chrysler', 2019, 'yellow', 'black'],
    ['America', 'Volvo', 2020, 'white', 'gray']
  ];
}

const carData =
  [
    { country: 'America', car: 'Chrysler' },
    { country: 'America', car: 'Volvo' },
    { country: 'America', car: 'Tesla' },
    { country: 'Germany', car: 'BMW' },
    { country: 'Korea', car: 'KIA' },
    { country: 'Korea', car: 'Hyundai' },
    { country: 'Japan', car: 'Nissan' },
    { country: 'Japan', car: 'Suzuki' },
    { country: 'Japan', car: 'Toyota' },
  ];


let country: string[] = [];

carData.map(item => {
  country.push(item.country)
});

country = [...new Set(country)]

const asc = (a: any, b: any): number => {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();
  let result = 0;

  if (upperCaseA > upperCaseB) result = 1;
  if (upperCaseA < upperCaseB) result = -1;
  if (upperCaseA === upperCaseB) result = 0;

  return result
}

const desc = (a: any, b: any): number => {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();
  let result = 0;

  if (upperCaseA < upperCaseB) result = 1;
  if (upperCaseA > upperCaseB) result = -1;
  if (upperCaseA === upperCaseB) result = 0;

  return result
}

const container = document.getElementById('example')

document.addEventListener("DOMContentLoaded", function () {
  const hot = new Handsontable(container, {
    data: getCarData(),
    colHeaders: ['Country', 'Car<br>(allowInvalid true)', 'Year', 'Chassis color<br>(allowInvalid false)', 'Bumper color<br>(allowInvalid true)'],
    columns: [
      {
        type: 'autocomplete',
        source: country.sort(asc),
        strict: true,
        allowInvalid: false
        // allowInvalid: true // true is default
      },
      {
        type: 'autocomplete',
        source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],
        strict: true
        // allowInvalid: true // true is default
      },
      {},
      {
        type: 'autocomplete',
        source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white', 'purple', 'lime', 'olive', 'cyan'],
        strict: true,
        allowInvalid: false
      },
      {
        type: 'autocomplete',
        source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white', 'purple', 'lime', 'olive', 'cyan'],
        strict: true,
        allowInvalid: true //true is default
      }
    ]
  });

  hot.validateColumns([1, 3, 4], (valid: any) => {
    console.log(valid);

    if (valid) {
      // ... code for validated columns
    }
  })

  function getCarData1() {
    return [{
      car: "Mercedes A 160",
      colors: 'black,yellow,blue,grey,green',
      color: 'black',
      available: false
    }, {
      car: "Citroen C4 Coupe",
      colors: 'black,orange,blue,grey,purple',
      color: 'black',
      available: false
    }, {
      car: "Audi A4 Avant",
      colors: 'black,yellow,red,orange',
      color: 'yellow',
      available: false
    }, {
      car: "Opel Astra",
      colors: 'black,yellow,blue,grey,green',
      color: 'black',
      available: true
    }, {
      car: "BMW 320i Coupe",
      colors: 'white,green,yellow',
      color: 'green',
      available: false
    }, {
      car: "Skoda Octavia",
      colors: 'blue,grey',
      color: 'grey',
      available: false
    }, {
      car: "BMW Z3",
      colors: 'blue,grey, red, black',
      color: 'blue',
      available: true
    }, {
      car: "Hyundai Coupe",
      colors: 'red, black, grey, blue, yellow',
      color: 'yellow',
      available: true
    }];
  }

  const example1 = document.getElementById('example1')

  const hot1 = new Handsontable(example1, {
    className: 'root-table',
    data: getCarData1(),
    colHeaders: ['Car Model', 'Colors', 'Color', 'Available'],
    stretchH: 'all',
    fillHandle: false,
    columns: [{
      data: 'car'
    }, {
      data: 'colors',
    }, {
      data: 'color',
      type: 'dropdown',
      source: [],
      renderer: autRenderer,
      className: 'color'
    }, {
      data: 'available',
      type: 'checkbox',
      readOnly: true,
    }]
  });

  function autRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any) {
    cellProperties.source = instance.getDataAtRowProp(row, 'colors').split(',');
    Handsontable.renderers.AutocompleteRenderer.apply(autRenderer, arguments);
  };
});
