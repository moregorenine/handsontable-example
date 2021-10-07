import 'handsontable/dist/handsontable.full.min.css'
// @ts-ignore
import Handsontable from 'handsontable'
import 'handsontable-6.2.2-celltype-key-value'

console.log('autocomplete-key-value.js');


const datao = [
  ['America', 'Tesla', 2017, 'black', 'black'],
  ['Korea', 'Hyundai', 2018, 'blue', 'blue'],
  ['Japan', 'Nissan', 2018, 'blue', 'blue'],
  ['America', 'Chrysler', 2019, 'yellow', 'black'],
  ['America', 'Volvo', 2020, 'white', 'gray']
];

document.querySelector('#btnLog')?.addEventListener("click", function () {
  console.log(datao);
  
})

const contries =
  [
    { id: '1', name: 'Korea' },
    { id: '2', name: 'America' },
    { id: '3', name: 'Germany' },
    { id: '4', name: 'Japan' },
  ];


const container = document.getElementById('example')

document.addEventListener("DOMContentLoaded", function () {
  const hot = new Handsontable(container, {
    data: datao,
    colHeaders: ['Country', 'Car<br>(allowInvalid true)', 'Year', 'Chassis color<br>(allowInvalid false)', 'Bumper color<br>(allowInvalid true)'],
    columns: [
      {
        type: 'key-value',
        source: contries,
        keyProperty: 'id', // The field containing the key value in your items
        valueProperty: 'name',
        // strict: true,
        // allowInvalid: false
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

});
