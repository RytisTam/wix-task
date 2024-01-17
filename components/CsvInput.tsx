import React, { Dispatch, SetStateAction } from 'react'

const CsvInput = ({csvData, setCsvData, setFirstRowHeader}:{csvData:string, setCsvData:Dispatch<SetStateAction<string>>, setFirstRowHeader:Dispatch<SetStateAction<boolean>>}) => {
  return (
   <>
   <div>Input your CSV data:</div>
    <textarea id="csvinput" name="csvinput" rows={10} cols={100} value={csvData} onChange={(e) => setCsvData(e.target.value)}/>
    <div>
    <label><input type='checkbox' onChange={(e) => setFirstRowHeader(e.target.checked)}/>Is first row header?</label>
    </div>
   </>
  )
}

export default CsvInput