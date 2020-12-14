import React, { Fragment } from 'react';
import { Chart } from 'react-charts';

const Dashboard = () => {
    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[0,1], [1,2], [2,1], [3,1], [4,0]],
            type: 'bar'
          },
          {
            label: 'Series 2',
            data: [[0,10], [1,15], [2,5], [3,20], [4,2]],
            type: 'bar'
          }
        ],
        []
    )
    
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { type: 'ordinal', position: 'left' }
        ],
        []
    )

    return ( 
        <Fragment>
            <div
                style={{
                    width: '400px',
                    height: '300px'
                }}
            >
                <Chart data={data} axes={axes} />
            </div>
        </Fragment>

    );
}
 
export default Dashboard;