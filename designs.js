jQuery("document").ready(function () {
    // Page Vars
    const inputHeight = document.getElementById("input_height");
    const inputWidth = document.getElementById("input_width");
    const colorPicker = document.getElementById("colorPicker");
    const theGrid = document.getElementById("pixel_canvas");

    //Add Listner to the make_grid button and run the makeGrid function when clicked
    document.getElementById("make_grid").addEventListener("click", makeGrid);

    function makeGrid() {
        //Make sure the Grid is empty
        jQuery("#pixel_canvas").empty();

        //Make grid vars
        let heightVal = inputHeight.value;
        let widthVal = inputWidth.value;
        let elementNumber = widthVal * heightVal; //Determine the amount of child elements needed

        //Set the size of the Grid Template
        jQuery("#pixel_canvas").css({
            "grid-template": "repeat(" + heightVal + ", 1fr) / repeat(" + widthVal + ", 1fr)",
            "background": "black"
        });

        //Append the Grid Child Elements
        for (i = 1; i <= elementNumber; i++) {
            const listItem = document.createElement("div");
            listItem.className = "grid-element";
            theGrid.appendChild(listItem);
        }

        //Change the background color of the child elements when clicked
        jQuery(".grid-element").on("click", function () {
            jQuery(this).css("background", colorPicker.value);
        });
    }
});
