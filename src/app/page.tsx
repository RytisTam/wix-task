'use client'
import Image from 'next/image'
import styles from './page.module.css'
import CsvInput from '../../components/CsvInput'
import { useEffect, useState } from 'react'
import RenderCsv from '../../components/RenderCsv'

export default function Home() {
  const [csvData, setCsvData] = useState<string>(``)
  const [firstRowHeader, setFirstRowHeader] = useState<boolean>(false)

  useEffect(() => {setCsvData(`John,Doe,120 jefferson st.,Riverside, NJ, 08075
  Jack,McGinnis,220 hobo Av.,Phila, PA,09119
  "John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075
  Stephen,Tyler,"7452 Terrace ""At the Plaza"" road",SomeTown,SD, 91234
  ,Blankman,,SomeTown, SD, 00298
  "Joan ""the bone"", Anne",Jet,"9th, at Terrace plc",Desert City,CO,00123`)},[])

  return (
  <>
    <CsvInput csvData={csvData} setCsvData={setCsvData} setFirstRowHeader={setFirstRowHeader}/>
    {csvData && <RenderCsv csvData={csvData} firstRowHeader={firstRowHeader}/>}
  </>
  )
}
