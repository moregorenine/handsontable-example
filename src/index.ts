import 'handsontable/dist/handsontable.full.min.css'
// @ts-ignore
import Handsontable from 'handsontable'

const data = [
  ["", "Ford", "Tesla", "Toyota", "Honda"],
  ["2017", 10, 11, 12, 13],
  ["2018", 20, 11, 14, 13],
  ["2019", 30, 15, 12, 13]
];

const container = document.getElementById('example');
const hot = new Handsontable(container, {
  data: data,
  rowHeaders: true,
  colHeaders: true,
  filters: true,
  dropdownMenu: true
});

// import { formData } from './forms';
//
// const form = document.querySelector('form')!;
//
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const data = formData(form);
//   console.log(data);
// });