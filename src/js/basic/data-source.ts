import 'handsontable/dist/handsontable.full.min.css'
// @ts-ignore
import Handsontable from 'handsontable'

const nestedObjects = [
    { id: 1, name: { first: "Ted", last: "Right" }, address: "" },
    { id: 2, address: "" }, // HOT will create missing properties on demand
    { id: 3, name: { first: "Joan", last: "Well" }, address: "" }
  ],
  container = document.getElementById('example')

const hot = new Handsontable(container, {
  data: nestedObjects,
  colHeaders: true,
  columns: [
    { data: 'id' },
    { data: 'name.first' },
    { data: 'name.last' },
    { data: 'address' }
  ],
  minSpareRows: 1
});