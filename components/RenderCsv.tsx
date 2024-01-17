import React from "react";

const RenderCsv = ({ csvData, firstRowHeader}: { csvData: string; firstRowHeader: boolean;}) => {
    const rows = csvData.split(/\r?\n(?=(?:[^"]*"[^"]*")*[^"]*$)/).filter(row => row.trim() !== '') // Split by line breaks and filter out last line break
    const rowValues = rows.map((row) => {
    return row
      .split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/) // Split into array of values by commas that are not inside quotes.
      .map((value) => value.trim().replace(/^"(.*)"$/, "$1"));  // Remove only surrounding quote pair.
  });

  return (
    <>
    <table style={{ marginTop: "100px" }}>
      {firstRowHeader && (
        <thead>
          <tr>
            {rowValues[0].map((dataValue, dataIndex) => (
              <th key={dataIndex}>{dataValue}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rowValues.slice(firstRowHeader ? 1 : 0).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((dataValue, dataIndex) => (
              <td key={dataIndex}>{dataValue}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
  );
};

export default RenderCsv;
