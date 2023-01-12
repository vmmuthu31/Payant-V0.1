import React from 'react';
 
const thStyle = {
    fontFamily: "Anton",
    fontWeight: "normal",
    fontStyle: "normal"
};
   
class DataComponent extends React.Component {
    render() {
      return (
        <table style={thStyle} className="table">
          <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Product A</th>
                <th>Product B</th>
                <th>Product C</th>
                <th>Product D</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td>Company A</td>
                <td>5</td>
                <td>6</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Company B</td>
                <td>1</td>
                <td>5</td>
                <td>2</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Company C</td>
                <td>1</td>
                <td>6</td>
                <td>8</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Company D</td>
                <td>1</td>
                <td>2</td>
                <td>0</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Company E</td>
                <td>3</td>
                <td>0</td>
                <td>3</td>
                <td>0</td>
              </tr>
              <tr>
                <td><strong>Gross Total</strong></td>
                <td>11</td>
                <td>19</td>
                <td>14</td>
                <td>12</td>
              </tr>
          </tbody>
          <caption>Previously sold products</caption>
        </table>       
      );
    }
  }
 
  export default DataComponent;