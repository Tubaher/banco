let accionistaNumber = 2;
$(document).ready(function () {
    $('#add').click(function (e) {
        console.log("add button clicked");
        e.preventDefault(); // Prevent the default form submission

        var form = $('.datos').last(); // Get the first form
        var clone = form.clone(); // Clone the form

        // Clear the input fields in the cloned form
        clone.find('input').val('');
        clone.find('#accionistaName').text(`Accionista ${accionistaNumber}`);

        // Increment the total number of forms
        accionistaNumber++;

        // Append the cloned form to the DOM
        form.after(clone);
    });
});