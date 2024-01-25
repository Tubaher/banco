$(document).ready(function () {
    $('input[type="radio"]').change(function () {
        // Check if both radio inputs are selected
        if ($('input[name="option1"]:checked').length > 0 && $('input[name="option2"]:checked').length > 0) {
            // If both are selected, enable the button
            $('#arrow-right').prop('disabled', false).css('opacity', '1');
            // if both options are set to "no""
            if ($('input[name="option1"]:checked').val() == "no" && $('input[name="option2"]:checked').val() == "no") {
                // disable the button
                console.log("both options are set to no");
                $('.datos.hidden').css('display', 'block');
            }
        } else {
            // If not, disable the button
            $('#arrow-right').prop('disabled', true);
        }
    });
});