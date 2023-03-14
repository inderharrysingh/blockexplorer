import './Table.scss';

import { useState, useEffect} from 'react';

function Table({object}){
    const [render, setrender] = useState(false);
  
    useEffect(() => {
      if (Object.keys(object).length > 0) {
        setrender(true);
      }
    }, [object]);
  
    return (
      <table className="container">
        <tbody>
          {render && Object.entries(object).map(([key, value]) => (
            <tr key={JSON.stringify(key)}>
              <td>{JSON.stringify(key)}</td>
              <td>{(Object.prototype.toString.call(value) === "[object Object]" && value.hex) ?parseInt(value.hex, 16) : JSON.stringify(value)}</td>
            </tr>
          ))}
       
        </tbody>
      </table>
    );
  }
  

export default Table;