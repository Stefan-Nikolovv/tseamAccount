var data = [];
var  result = [];
var reader = require('xlsx')
function automation(){
  {
    function compairFile() {
      // Requiring the module

      // Reading our test file
      let file = reader.readFile("./test1.xlsx");

      let sheets = file.SheetNames;

      for (let i = 0; i < sheets.length; i++) {
        data = reader.utils
          .sheet_to_json(file.Sheets[file.SheetNames[i]])
          .map((searchedEle) => searchedEle.GroupName);
      }

      // Printing data
      console.log(data);
    }
    compairFile();
  }

  // Requiring the module

  // Reading our test file
  let file = reader.readFile("./test.xlsx");

  let sheets = file.SheetNames;

  for (let i = 0; i < sheets.length; i++) {
    reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]).filter((x) => {
      for (let group of data) {
        if (x["Original Message"].includes(group)) {
          result.push(x);
        }
      }
    });
  }
  let filterTicketSubject = [
    "FW:",
    "RE:",
    "Fwd:",
    "Re:",
    "[Update]",
    "[Alert]",
    "[Webinar]",
    "PSC Alert",
    "[EXTERNAL]",
    "Amazon",
    "Password Reset",
    "Audit of users",
    "CDE:",
    "Term",
    "WFH kit",
    "DK-CDE.LOCAL",
    "[New Hire]",
    "New Employee",
    "Executive Account Changes",
    "[Postmaster]",
    "DAG AD Gropup Changes : AD Audit Alert",
    "ipad",
    "Mouse",
    "mouse",
    "monitor",
    "Monitor",
    "Replace",
    "Booking",
    "Reseting",
    "Softawre Request",
    'unable',
    "[Report]",
    "Canceled:",
    'Outlook',

  ];
  /*result = result.filter(element => !element["Ticket Subject"].includes("FW:") 
  && !element["Ticket Subject"].includes("RE:") 
  && !element["Ticket Subject"].includes("Fwd:") 
  && !element["Ticket Subject"].includes("Re:") 
  &&!element["Ticket Subject"].includes("[Update]") 
&& !element["Ticket Subject"].includes("[Alert]") 
&& !element["Ticket Subject"].includes("[Webinar]")  
&& !element["Ticket Subject"].includes("PSC Alert"));*/
  result = result.filter((element) => {
    var hasData = true;
    for (var d of filterTicketSubject) {
      if (element["Ticket Subject"].includes(d)) {
        hasData = false;
        break;
      }
    }
    return hasData;
  });
  // Printing data
  console.log(result);
  const ws = reader.utils.json_to_sheet(result);

  const wb = reader.utils.book_new();

  reader.utils.book_append_sheet(wb, ws, "Responses");

  reader.writeFile(wb, "sampleData3.export.xlsx");
}
automation();