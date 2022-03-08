const xlsxFile = require("read-excel-file/node");
const date = require("date-utils");

var newDate = new Date();
var time = newDate.toFormat("YYYY-MM-DD");
var type_list = [];

xlsxFile(`./${time}.xlsx`).then((rows) => {
  rows.forEach((element) => {
    type_list.push(element[1]);
  });
  type_list.pop(0);
  console.log(type_list);
});

export default type_list;
