import 'handsontable/dist/handsontable.full.min.css'
// @ts-ignore
import Handsontable from 'handsontable'
import 'handsontable-6.2.2-celltype-key-value'

console.log('autocomplete-key-value.js');


const datas = [
    ['1', 'Hyundai', 2018, 'blue', 'blue'],
    ['1', 'KIA', 2018, 'blue', 'blue'],
    ['2', 'Tesla', 2017, 'black', 'black'],
    ['4', 'BMW', 2018, 'blue', 'blue'],
    ['2', 'Chrysler', 2019, 'yellow', 'black'],
    ['2', 'Volvo', 2020, 'white', 'gray']
];

document.querySelector('#btnLog')?.addEventListener("click", function () {
    console.log(datas);
})

const contries =
    [
        {id: '1', name: 'Korea'},
        {id: '2', name: 'America'},
        {id: '3', name: 'Germany'},
        {id: '4', name: 'Japan'},
    ];

const cars =
    [
        {id: '1', name: 'Korea', carId: '1', carName: 'Hyundai'},
        {id: '1', name: 'Korea', carId: '2', carName: 'KIA'},
        {id: '2', name: 'America', carId: '3', carName: 'Tesla'},
        {id: '2', name: 'America', carId: '4', carName: 'Chrysler'},
        {id: '2', name: 'America', carId: '5', carName: 'Volvo'},
        {id: '3', name: 'Germany', carId: '6', carName: 'BMW'},
        {id: '4', name: 'Japan', carId: '7', carName: 'Nissan'},
        {id: '4', name: 'Japan', carId: '8', carName: 'Suzuki'},
        {id: '4', name: 'Japan', carId: '9', carName: 'Toyota'},
    ]


const container = document.getElementById('example') as HTMLDivElement

document.addEventListener("DOMContentLoaded", function () {
    const hot = new Handsontable(container, {
        data: datas,
        colHeaders: ['Country', 'Car<br>(allowInvalid true)', 'Year', 'Chassis color<br>(allowInvalid false)', 'Bumper color<br>(allowInvalid true)'],
        columns: [
            {
                type: 'key-value',
                source: contries,
                keyProperty: 'id', // The field containing the key value in your items
                valueProperty: 'name',
                strict: false,
                // allowInvalid: false
                // allowInvalid: true // true is default
            },
            {
                type: 'key-value',
                // source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],
                renderer: createCars,
                strict: true,
                keyProperty: 'carId', // The field containing the key value in your items
                valueProperty: 'carName'
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

    function createCars(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any) {
        // cellProperties.source = instance.getDataAtRowProp(row, 'colors').split(',');
        // console.log(`${col}, ${prop}, ${instance.getDataAtCell(row, 0)}`)
        const contry = instance.getDataAtCell(row, 0)
        const carsSel = cars.filter(car=>car.id==contry)
        // console.log(carsSel)
        cellProperties.source = carsSel
        Handsontable.renderers.AutocompleteRenderer.apply(createCars, arguments);
        return td
    };

    // js version
    // function autRenderer(instance, td, row, col, prop, value, cellProperties) {
    //     cellProperties.source = instance.getDataAtRowProp(row, 'colors').split(',');
    //     Handsontable.renderers.AutocompleteRenderer.apply(this, arguments);
    // };

    hot.validateColumns([0, 1, 3, 4], (valid: any) => {
        console.log(valid);

        if (valid) {
            // ... code for validated columns
        }
    })

});
