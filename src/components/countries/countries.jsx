import React, {useState} from "react";
import TableHead from "../commons/tableHead/tableHead";
import {DateLocale, format, add} from "../utils/utils";
import _ from "lodash";

import {columns} from "./columns"

const Countries =({countries, general}) => {
  const [sortColumn, setSortColumn] = useState({path: 'TotalConfirmed', order: 'desc'});
  
  const handleSort = path => {
    setSortColumn({path: path, order: 'asc'});
    if(sortColumn.path === path && sortColumn.order === "asc") {
      setSortColumn({path: path, order: 'desc'});
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
  };
  
  //console.log('countries', countries)
  
  const  sorted = _.orderBy(countries, [sortColumn.path], [sortColumn.order]);
  return (
    <div className="countries">
      <div  className="table">
        <TableHead columns={columns} onSort={handleSort} />
        <ul className="list">
          {countries && sorted.map(item =>
            (
              <li className="row" key={item.CountryCode}>
                <span className="value">{DateLocale(item.Date)}</span>
                <span className="value country desktop">{item.Country}</span>
                <span className="value">{format(item.NewConfirmed)}</span>
                <span className="value">{format(item.NewDeaths)}</span>
                <span className="value">{format(item.NewRecovered)}</span>
                <span className="value">{format(item.TotalConfirmed)}</span>
                <span className="value">{format(item.TotalDeaths)}</span>
                <span className="value">{format(item.TotalRecovered)}</span>
              </li>
            )
          )}
        </ul>
        <ul className="total">
          <li className="row" >
            <span className="value">{general.NewConfirmed.toLocaleString()}</span>
            <span className="value">{general.NewDeaths.toLocaleString()}</span>
            <span className="value">{general.NewRecovered.toLocaleString()}</span>
            <span className="value">{general.TotalConfirmed.toLocaleString()}</span>
            <span className="value">{general.TotalDeaths.toLocaleString()}</span>
            <span className="value">{general.TotalRecovered.toLocaleString()}</span>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Countries;