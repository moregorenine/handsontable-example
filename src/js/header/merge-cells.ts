import 'handsontable/dist/handsontable.full.min.css'
// @ts-ignore
import Handsontable from 'handsontable'

const data = [
  ["2017", 10, 11, 12, 13],
  ["2018", 20, 11, 14, 13],
  ["2019", 30, 15, 12, 13],
  ["2020", 40, 15, 12, 13],
  ["2021", 50, 15, 12, 13]
];

document.addEventListener("DOMContentLoaded", function (event) {
  const container = document.getElementById('example') as HTMLDivElement;
  drawHandsontable(container);
  updateHeader();
});

const drawHandsontable = (container: HTMLDivElement) => {
  new Handsontable(container, {
    data: data,
    // colHeaders: ["Year", "Ford", "Tesla", "Toyota", "Honda"]
    colHeaders: ["Year", "Ford", "Tesla", "Japan", "JapanDelete"]
  })
}

const updateHeader = () => {
  let Thead = document.querySelector("#example .ht_clone_top.handsontable table.htCore thead") as HTMLElement
  let Tr = document.createElement("tr") as HTMLElement;

  let Div = document.createElement('div')
  Div.className = 'relative'
  let Span = document.createElement('span')
  Span.className = 'colHeader';
  Span.innerText = 'Col'
  Div.append(Span)
  
  let Div1 = document.createElement('div')
  Div1.className = 'relative'
  let Span1 = document.createElement('span')
  Span1.className = 'colHeader';
  Span1.innerText = 'Col'
  Div1.append(Span1)

  let ThToyota = document.createElement("th")
  ThToyota.append(Div)
  let ThHonda = document.createElement("th")
  ThHonda.append(Div1)

  Tr.append(ThToyota, ThHonda)
  Thead.append(Tr)

  document.querySelector("#example .ht_clone_top.handsontable table.htCore thead tr:nth-child(1) th:nth-child(1)")?.setAttribute('rowSpan', '2');
  document.querySelector("#example .ht_clone_top.handsontable table.htCore thead tr:nth-child(1) th:nth-child(2)")?.setAttribute('rowSpan', '2');
  document.querySelector("#example .ht_clone_top.handsontable table.htCore thead tr:nth-child(1) th:nth-child(3)")?.setAttribute('rowSpan', '2');
  document.querySelector("#example .ht_clone_top.handsontable table.htCore thead tr:nth-child(1) th:nth-child(4)")?.setAttribute('colSpan', '2');
  // document.querySelector("#example .ht_clone_top.handsontable table.htCore thead tr:nth-child(1) th:nth-child(5)")?.remove();

}
