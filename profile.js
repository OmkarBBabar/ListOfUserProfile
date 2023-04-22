let tbody = document.getElementById("tbody")

// Line 1
// This line of code retrieves the HTML element with an ID of "tbody" and stores it in a variable called tbody. 
// This element is typically used as a container for table rows (<tr> elements) in an HTML table.

fetch("http://localhost:3001/users")

//  line 7
// This line of code initiates a GET request to the URL "http://localhost:3001/users" using the fetch function. 
// This URL likely points to a backend API that serves data about users.

.then(res=>res.json())

//  Line no 13
// This line of code takes the response object returned by 
// the fetch function and calls the json method on it to parse the response body as JSON. 
// This converts the response from a stream of bytes to a JavaScript object.


.then(json=>{console.log(json);
    json.map(data=>{
        console.log(data)
        tbody.append(td_fun(data.profile_image,data.name,data.city,data.rating));
    })});

    //  line no 21      to          24
    // This block of code defines a callback function that is executed when the JSON data is successfully parsed. 
    // The function first logs the parsed JSON object to the console. 
    // It then calls the map method on the JSON array to loop through each user object in the array.
    // For each user object, the function logs the object to the console, 
    // then calls the td_fun function to create a new table row element (<tr>). 
    // This function takes in four arguments - 
    // the URL of the user's profile image, their name, city, and rating - and returns a new table row element with these values populated.
    // The function then appends the new table row element to the tbody element using the append method.


function td_fun(profile,name,city,rating){      
    let td = document.createElement('tr');
    td.innerHTML=`

        <td><img src=${profile} height="150px" width="200px" border="2px 2px 2px lightblue" box-shadow="10px 5px 5px lightblue"></td>
        <td>${name}</td>
        <td>${city}</td>
        <td>${rating}</td>
        <td><input type="submit" value="Submit"></button></td>
    `;
    return td;
//      line 38      to        48
//     This block of code defines the td_fun function, which takes in four arguments -
//     the URL of the user's profile image, their name, city, and rating - 
//     and returns a new table row element (<tr>) with these values populated.
//     The function first creates a new table row element using the createElement method and stores it in a variable called td.
//     It then sets the innerHTML property of the td element to a string of HTML code. 
//     This code creates a new table row with five columns (<td> elements). 
//     The first column contains an <img> element with the user's profile image URL as the src attribute, 
//     and some additional styling attributes for the image. 
//     The remaining columns simply contain the user's name, city, rating, and a submit button.
//     Finally, the function returns the td element, which can be appended to a table element using the append method.


}