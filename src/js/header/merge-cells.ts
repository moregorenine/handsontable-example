import 'handsontable/dist/handsontable.full.min.css'
// @ts-ignore
import Handsontable from 'handsontable'

const data = [
  ["", "Ford", "Tesla", "Toyota", "Honda"],
  ["2017", 10, 11, 12, 13],
  ["2018", 20, 11, 14, 13],
  ["2019", 30, 15, 12, 13]
];

document.addEventListener("DOMContentLoaded", function (event) {
  const container = document.getElementById('example') as HTMLDivElement;
  drawHandsontable(container);
});

const drawHandsontable = (container: HTMLDivElement) => {
  new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    filters: true,
    dropdownMenu: true
  })
}
