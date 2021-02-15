import React from "react";
import { SideBySide } from "../styles";

function Item({item}) {
return <li>{item}</li>
}

export default function ProCons({ pros, cons }) {
  function renderPro(item, index) {
    return <Item item={item} key={index}/>
  }

  function renderCon(item, index) {
    return <Item item={item} key={index}/>
  }


  return (
    <SideBySide>
      <tr>
        <th>Pros</th>
        <th>Cons</th>
      </tr>
      <tr>
        <td valign="top">
          <ul>
            {pros.map(renderPro)}
          </ul>
        </td>
        <td valign="top">
          <ul>
            {cons.map(renderCon)}
          </ul>
        </td>
      </tr>
    </SideBySide>
  );
}
