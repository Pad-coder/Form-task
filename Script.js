let Root = document.getElementById("root");

let form = document.createElement("div");
form.setAttribute("class", "Form")

Root.appendChild(form);

form.innerHTML = `<h2>Form:</h2>
<div class="Form-container">
<form id= "Form-data" class="Form-Data">

<div class="First-name">
<label for="first-name">First Name:</label>
<input id="input-First-Name" type="text" required="">
</div>

<div class="Last-name">
<label for="Last-name">Last Name:</label>
<input id="input-Last-Name" type="text" required="">
</div>

<div class="Address">
<label for="Address">Address:</label>
<input id="input-Address" type="text" required="">
</div>

<div class="Ph.Number">
<label for="Ph.Number">Ph.Number:</label>
<input id="input-Ph.Number" type="text" required="">
</div>

<div class="Pin-code">
<label for="Pin-Code">Pincode:</label>
<input id="input-Pin-Code" type="text" required="">
</div>

<div class="Gender">
<label for="Gender">Gender:</label>
<select id="Gender" class:"Gender-Scroll">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Others">Others</option>
</select>
</div>

<div class="Food">
<label for="Choose-Food">Choice of Food (Select only 2):</label>
</div>
<div class="Food-List">
<input id="Food1" type="checkbox" value="Biryani">
<label for="Food1">Biryani</label>
<input type="checkbox" id="food2" value="Curd Rice">
<label for="food2">Curd Rice</label>
<input type="checkbox" id="food3" value="Tomato Rice">
<label for="food3">Tomato Rice</label>
<input type="checkbox" id="food4" value="Noodles">
<label for="food4">Noodles</label>
<input type="checkbox" id="food5" value="Fried Rice">
<label for="food5">Fried Rice</label>
</div>

<div class="State">
<label for="State">State:</label>
<input id="input-State" type="text" required="">
</div>

<div class="Country">
<label for="Country">Country:</label>
<input id="input-Country" type="text" required="">
</div>

<div class="Submit">
<button id="BTN-Submit" class="BTN-Submit"type="button">Submit</button>
</div>
</form>

<div class="Table-Heading">
<h2 id="data-table">Table</h2>
</div>

<div class="Table">
<table>
<thead>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Ph.Number</th>
        <th>Pincode</th>
        <th>Gender</th>
        <th>Food</th>
        <th>State</th>
        <th>Country</th>
    </tr>
    <tbody id="Table-Body" class="Table-Body">
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
        </tr>
    </tbody>
</thead>
</table>
</div>
</div>`;

Root.appendChild(heading);
