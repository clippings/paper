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
    Used for limiting the onChange trigger and 
    prevent event bubbling. The onChange function will be 
    triggered after X ms of inactivity on the component.
</td>
</tr>
<tr>
<td><strong>submitOn</strong></td>
<td>string</td>
<td><i>keyup</i></td>
<td>"enter", "keyup"</td>
<td>
   When to trigger the event. Either on keyup or when the user hits enter.
</td>
</tr>
<tr>
<td><strong>onChange</strong></td>
<td>function</td>
<td><i>null</i></td>
<td></td>
<td>
   The callback to fetch the value. Recives the input value as an argument.
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
</tbody>
</table>
