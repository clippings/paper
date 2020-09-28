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
<td><strong>debounceRate</strong></td>
<td>number</td>
<td><i>0</i></td>
<td></td>
<td>
    Used for limiting the onSearch trigger and 
    prevent event bubbling. The onSearch function will be 
    triggered after X ms of inactivity on the component.
</td>
</tr>
<tr>
<td><strong>hits</strong></td>
<td>array<{label: string}></td>
<td></td>
<td></td>
<td>
   The hits, that will be used for rendering the autocomplete options.
</td>
</tr>
<tr>
<td><strong>onChange</strong></td>
<td>function</td>
<td><i>null</i></td>
<td></td>
<td>
   The callback to set the selected value.
</td>
</tr>
<tr>
<td><strong>placeholder</strong></td>
<td>string</td>
<td></td>
<td></td>
<td>The placeholder attribute.</td>
</tr>
<tr>
<td><strong>defaultValue</strong></td>
<td>string</td>
<td></td>
<td></td>
<td>The default value, used for prefilling the input.</td>
</tr>
<tr>
<td><strong>min</strong></td>
<td>number</td>
<td>0</td>
<td></td>
<td>The minumum length that will trigger the onSearch</td>
</tr>
<tr>
<td><strong>className</strong></td>
<td>string</td>
<td></td>
<td></td>
<td>The css classes to be added to the component</td>
</tr>
<tr>
<td><strong>children</strong></td>
<td>fucntion</td>
<td></td>
<td></td>
<td>Accepts a callback function to be used for custom rendering of an item. Accepts the hit object and active boolean</td>
</tr>
</tbody>
</table>
