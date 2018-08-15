document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});



//Information for the emergency contact modal
const modalInfo = {
    medical: {
        title: "Contact Medical Personnel",
        placeholder: "There is a medical emergency",
        text: "You are about to reach out to medical personnal at your school. Please provide and additional necessary details"
    },
    administrator: {
        title: "Contact Administration",
        placeholder: "I need immediate assistance from an administrator.",
        text: "You are about to reach out to administration at your school. Please provide and additional necessary details"
    },
    SRO: {
        title: "Contact School Resource Officer",
        placeholder: "I need immediate assistance from an SRO",
        text: "You are about to reach out tolaw enforcement personnel at your school. Please provide and additional necessary details"
    }
};



//On the click of an emergency button:

$(".contactBtn").onClick(() => {

    console.log("you have clicked a contact button");
    //Save the id from the clicked card into a variable
    const topic = $(this).id;

    //Call the displayModal function with a different parameter based on ID of the button clicked
    displayEmergencyModal(topic);

});


/*Called when a emergency button is clicked. Based on card clicked,
sets content of the modal and then displays the modal.
*/
const displayEmergencyModal = modalTopic => {

    //select the modal amd clear the current text/fields
    $("#emergencyMsg").empty();

    //Set the title based on the button that was clicked
    $("#modalTitle").html(modalInfo[modalTopic].title);

    //Sets help text of who you are trrying to contact
    $("#modalHelpText").html(modalInfo[modalTopic].text);

    //Set the placeholder of the text to what it should be 
    $("#emergencyMsg").attr("placeholder", modalInfo[modalTopic].placeholder);

    //Display the modal 
    $("#emergencyModal").show();

};

//Inside emergency modal, when user clicks submit, set the message to be sent.
$("requestHelpBtn").onClick(event => {
    event.preventDefault();
    const emerMessage = $("#emergencyMsg").text();
    requestAssistance(emerMessage);
});

//Called when the request assistance button is clicked
const requestAssistance = emergencyMsg => {
    $.ajax("/api/alert", {
        type: "POST",
        data: emergencyMsg
    }).then(response => {
        console.log("your request for help has been sent", response);
        $("#emergencyModal").hide();

    })
};