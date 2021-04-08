import React from 'react'
import { Chart } from 'react-charts'
 
function LineGraph(props) {
  
    const data = React.useMemo(
        () => [
          {
            label: 'Batman II',
            data: [ [1, 88], [2, 11], [3, 33], [4, 28],[5, 36],[6, 100]]
          },
          {
            label: 'Iron Man',
            data: [ [1, 100], [2, 85], [3, 58],[4, 85],[5, 100],[6, 64]]
          },
          {
            label: 'Captain America',
            data: [ [1, 69], [2, 19], [3, 38], [4, 55],[5, 60],[6, 100]]
          },
          {
            label: 'Black Widow II',
            data: [ [1, 0], [2, 48], [3, 0], [4, 0],[5, 0],[6, 0]]
          },
          {
            label: 'Super Girl',
            data: [ [1, 94], [2, 100], [3, 100], [4, 100],[5, 100],[6, 75]]
          }
        ],
        []
      )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return(
    <div
    style={{
        width: "45vw",
        height: "40vh"
      }}
    >
    {/* replace with props.data */}
      <Chart data={data} axes={axes} />
    </div>
  )
}
export default LineGraph