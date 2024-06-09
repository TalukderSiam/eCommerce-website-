export const color = [
    "white",
    "Black",
    "Yellow",
    "Blue",
    "Neviblue",
    "Green",
    "Yellow",
    "Pink",
    "Red",
 ];
 
 export const filter = [
     {
         id: "color",
         name: "Color",
         options: [
             { value: "white", label: "White" },
             { value: "black", label: "Black" },
             { value: "yellow", label: "Yellow" },
             { value: "blue", label: "Blue" },
             { value: "neviblue", label: "Neviblue" },
             { value: "green", label: "Green" },
             { value: "yellow", label: "Yellow" },
             { value: "pink", label: "Pink" },
             { value: "red", label: "Red" }
         ]
     },
     {
         id: "size",
         name: "Size",
         options: [
             { value: "S", label: "Small" },
             { value: "M", label: "Medium" },
             { value: "L", label: "Large" }
         ]
     }
 ];
 
 export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "0-50", label: "Less than $50" },
            { value: "50-100", label: "$50 - $100" },
            { value: "100-200", label: "$100 - $200" },
            { value: "200+", label: "More than $200" }
        ]
    },
    {
        id: "discount",
        name: "Discount",
        options: [
            { value: "0-10", label: "0% - 10%" },
            { value: "10-20", label: "10% - 20%" },
            { value: "20-30", label: "20% - 30%" },
            { value: "30+", label: "More than 30%" }
        ]
    },
    {
        id: "stock",
        name: "Availablity",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" }
        ]
    }
];
