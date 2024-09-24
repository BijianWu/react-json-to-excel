import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import jsonData from "./file.json";
export const ExportToExcel = ({fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (jsonData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(jsonData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  const onChange = async (event) => {
    if (event.target.files) {
      const parsedData = await readJsonFile(event.target.files[0])

      console.log(parsedData)
    }
  }

  const readJsonFile = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader()
  
      fileReader.onload = event => {
        if (event.target) {
          resolve(JSON.parse(event.target.result))
        }
      }
  
      fileReader.onerror = error => reject(error)
      fileReader.readAsText(file)
    })
  
  return (
    <input type="file" accept=".json,application/json" onChange={onChange} />
  );
};