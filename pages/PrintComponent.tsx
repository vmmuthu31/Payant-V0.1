
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
import React from 'react';
import ReactToPrint from 'react-to-print';
 
import DataComponent from './ComponentToPrint';
 
class PdfComponent extends React.Component {
     
    render() {
      return (
        <div>
          <DataComponent ref={(response) => (this.componentRef = response)} />
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn-grad3">Print to PDF!</button>}
          />
          
        </div>
      );
    }
 
}
 
export default PdfComponent;
