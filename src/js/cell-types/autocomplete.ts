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

  function carRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any) {
    cellProperties.source = instance.getDataAtRowProp(row, 'colors').split(',');
    Handsontable.renderers.AutocompleteRenderer.apply(carRenderer, arguments);
  };

  hot.validateColumns([1, 3, 4], (valid: any) => {
    console.log(valid);

    if (valid) {
      // ... code for validated columns
    }
  })
});