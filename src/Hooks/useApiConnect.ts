

import { useCallback, useEffect, useState } from 'react'
import { getYear, getYearMonth, urlDays, urlMonth } from '../utils/dateHelpers';
import apiConnect from '../utils/apiConnect';


export type IndicatorData = {
  Fecha: string
  Valor: string
}

const useApiConnect = (type='',time:string|number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IndicatorData[]>([])
  const [request, setRequest] = useState<string | undefined>(undefined)

  const handleFetchData = useCallback(() => {
      if (!request) return;
      setIsLoading(true);
      apiConnect(request).then( res => {
        const allData = res.data[(Object.keys(res.data)[0])]
        setData(typeof time === 'number' ? allData.reverse().splice(0, time).reverse() : allData)
        setIsLoading(false);
      }).catch(err => console.error(err))
    },
    [request],
  )

  useEffect(() => {
    if(type !== '' && time && typeof time === 'number')
      switch(type){
        case 'dolar':
        case 'euro':
        case 'uf':
          setRequest(`${type.toLocaleLowerCase()}/posteriores/${urlDays(time)}`)
          break;
          case 'ipc':
          setRequest(`${type.toLocaleLowerCase()}/periodo/${urlMonth(time)}`)
          break;
          case 'utm':
          setRequest(`${type.toLocaleLowerCase()}/posteriores/${getYearMonth(time)}`)
          break;
        default: return;
      }else if((type === 'ipc' || type === 'utm') && time === 'year' )
        setRequest(`${type.toLocaleLowerCase()}/${getYear()}`)
  }, [type, time])
  

  useEffect(() => {
    handleFetchData()
  }, [handleFetchData])
  
  
  
  return { isLoading, data }
}

export default useApiConnect;