import React, { useState } from 'react'
import { ActivityIndicator, Dimensions } from 'react-native';
import {
  LineChart,
} from "react-native-chart-kit";
import useIndicatorGraph from '../../Hooks/useIndicatorGraph';
import { IndicatorData } from '../../Hooks/useApiConnect';
import { useTheme } from '@emotion/react';

type IndicatorDataProps = {
  data: IndicatorData[]
}

const IndicatorGraph: React.FC<IndicatorDataProps> = ({ data }) => {
  const theme = useTheme();
  const {isLoading, data: dataGraph} = useIndicatorGraph(data);
  const [ chartConfig ] = useState({
    backgroundGradientFrom: `${theme.background}`,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: `${theme.backgroundAlt}`,
    backgroundGradientToOpacity: 0.5,
    color: () => `${theme.primary}`,
    strokeWidth: 2,
    useShadowColorFromDataset: false
  })
  
  if (isLoading) return <ActivityIndicator color={theme.primary} />

  return (
    <React.Fragment>
      <LineChart
        data={dataGraph}
        width={Dimensions.get("window").width - 17}
        height={Dimensions.get("window").height / 1.5}
        verticalLabelRotation={45}
        chartConfig={chartConfig}
        segments={5}
        style={{
          marginTop: 25,
          borderRadius: 16
        }}
      />
    </React.Fragment>
  )
}

export default IndicatorGraph