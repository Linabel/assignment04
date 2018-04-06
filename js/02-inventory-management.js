/*eslint-env browser*/
function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function display_inventory(inventory) {
    inventory.forEach(function(product) {
        window.console.log(String(product[0]) + ' ' + product[1] + ' (' + String(product[2]) + ') $' + String(product[3]));
    });
}

function update_inventory(inventory) {
    var sku_valid = false;
    var sku;
    while (!sku_valid) {
        sku = window.prompt("Enter product SKU");
        sku = parseInt(sku);
        
        if(isNaN(sku) || sku < 1) {
            window.console.log('Invalid SKU Number. Please try again');
        } else {
            sku_valid = true;
        }
    }
    
    var updated = false;
    
    inventory.forEach(function(product) {
        if(product[0] == sku) {
            var stock;
            var stock_valid = false;
            while (!stock_valid) {
                stock = window.prompt("Enter product stock quantity");
                stock = parseInt(stock);
                
                if(isNaN(stock) || stock < 1) {
                    window.console.log('Invalid stock quantity number. Please try again');
                } else {
                    stock_valid = true;
                }
            }
            
            product[2] = stock;
            updated = true;
        }
    });

    if(!updated) {
        window.console.log('SKU not found. Please try again.');
    } else {
        window.localStorage.setItem('inventory', JSON.stringify(inventory));
    }
}

function main() {
    "use strict";
    var inventory, command;
    
    display_menu();

    var inventory = window.localStorage.getItem('inventory');

    if (inventory == null) {
        var inventory = [
            [1134, 'Logitech MX Master 2S', 21, 91.99],
            [1009, 'Dell UltraSharp U3415W', 13, 486.72],
            [3445, 'Seagate Backup Plus Slim 2TB', 34, 69.99],
            [2334, 'Dell UltraSharp U2717D', 8, 429.99],
            [5669, 'Razer DeathAdder Elite', 17, 57.99]
        ];
        window.localStorage.setItem('inventory', JSON.stringify(inventory));
    } else {
        inventory = JSON.parse(inventory);
    }

    inventory.sort(sortFunction);
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display_inventory(inventory);
            } else if (command === "update") {
                update_inventory(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();
