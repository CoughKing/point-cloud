
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {PointCloudVisualiser} from 'point-cloud-visualiser'

function getPoints(numberOfPoints) {
  const points = Array(numberOfPoints)
  for(var i=0 ; i<numberOfPoints; i++) {
    const point = Array(3)
    if(i % 6 == 0) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = - 0.5
    } else if(i % 6 == 1) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = 2.5
        point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 2) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = 0.5
    } else if(i % 6 == 3) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = - 2.5
        point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 4) {
        point[0] =  6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 5) {
        point[0] = - 6.5
        point[1]= (Math.random() * 5) - 2.5
        point[2] = (Math.random() * 1) - 0.5
    }
    points[i]=point
  }
  return points
}

function App() {
  return (
    <div className="bg-black">
    <div className="flex flex-col min-h-screen items-center justify-center">
    <PointCloudVisualiser points={getPoints(100000)} />
    </div>
    </div>
    
  );
}

export default App;
