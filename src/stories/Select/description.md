## Properties

<table>
<thead>
<tr>
<th>property</th>
<th>type</th>
<th>default</th>
<th>accepted values</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>options</strong></td>
<td>array<{label: string | ReactNode, value: string | object | number}></td>
<td></td>
<td></td>
<td>
    The lists of options to be disapleyd by the component
</td>
</tr>
<tr>
<td><strong>placeholder</strong></td>
<td>string</td>
<td></td>
<td></td>
<td>
  Used as a placeholder when no option is selected.
</td>
</tr>
<tr>
<td><strong>onChange</strong></td>
<td>function</td>
<td></td>
<td></td>
<td>
   The callback to fetch the value. Recives the option value as an argument.
</td>
</tr>
<tr>
<td><strong>selected</strong></td>
<td>string | object | number</td>
<td>null</td>
<td></td>
<td>The selected by default option</td>
</tr>
</tbody>
</table>
