# Development

### Link to Deployed Website

If you used the stencil code, this is `https://depressedcapybara007.github.io/Development/`


### Goal and Value of the Application

This is React webpage prototype of the bakery shop, where users can browse the selection, filtering and sorting it as they see it. They can also add items to favorites to see total price and calories amount.

# Usability Principles Considered

To ensure usability, the interface was extremely simplistic with an easy to use drop down menu for sorting and one button to add to favorites.
By providing an add remove button in favorites it ensures users are able to experiment with their favorites selection.
Simple react flex layout provides users with an easy to navigate platform.

### Organization of Components

App.js - everything is in there
cakeData.js - stores all pastry data
pastr.js - handles all the pastry instances on the grid
assets - holds pictures of pastry

Components:
filter.js makes dynamic lists
sort_dat - handles sorting and filtering
calc - stores favorites
calc the item - handles individual items

### How Data is Passed Down Through Components
Every state and var managed in App.js. Also all methids are present in there to handel the corresponding vars. App.js also holds the methods to handle those variables:

### How the User Triggers State Changes
The user triggers state changes everytime theye interact with interface. For instance, pressing the "add to favorites" button adds item to favorites and changes state.
