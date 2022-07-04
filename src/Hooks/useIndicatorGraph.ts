

import { useEffect, useState } from 'react'
import { IndicatorData } from './useApiConnect'

type dataGraph = {
  labels: string[]
  datasets: {
    data: number[]
    labels?: string[]
  }[]
}
const useIndicatorGraph = (values: IndicatorData[]) => {
  const [data, setData] = useState<dataGraph>({
    labels: [],
    datasets: []
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(values.length > 0){
      setData({
        labels: values.map(item => item['Fecha'].slice(2,item['Fecha'].length)),
        datasets: [{
          data: values.map(item => Number(item['Valor'].replace('.', '').replace(',', '.'))),
          labels: values.map(item => item['Valor'])
        }],
      })
      setIsLoading(false)
    }
  }, [values])
  
  
  
  return { isLoading, data }
}

export default useIndicatorGraph;