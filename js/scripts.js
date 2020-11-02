
$(document).ready(function () {
    dob = new Date('1998-04-25');
    var today = new Date();
    var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    $('#idade').html(age);
});

