const modalInfo = {
    0: {
        title: "Topic 1 title",
        body: ["<p id ='#subtopic1'>Here is a ton of information on Topic 1 that you can read about</p>"]
    },
    1: {
        title: "Topic 2 title",
        content: "Here is a ton of topic of Topic 2 that you can read about."
    },
    2: {
        title: "Topic 2 title",
        content: "Here is a ton of topic of Topic 2 that you can read about."
    },
    3: {
        title: "Topic 2 title",
        content: "Here is a ton of topic of Topic 2 that you can read about."
    }

};



//On the click of an #main card:

$(".mainCard").onClick(() => {

    console.log("you have clicked a main card");
    //Save the id from the clicked card into a variable
    const topic = $(this).id;

    //Call the displayModal function with a different parameter based on ID
    switch (topic) {
        case "weather":
            console.log("you've clicked the weather card");
            displayModal(0)
            break;
        case "emergency2":
            console.log("emergency 2");
            displayModal(1)
            break;
        case "emergency3":
            console.log("emergency 2");
            displayModal(2)
            console.log(2);
            break;
        case "emergency4":
            console.log("emergency 2");
            displayModal(3)
            console.log(3);
            break;
        default:
            break;
    }


});


/*Called when a topic button is clicked. Based on card clicked,
sets content of the modal and then displays the modal.
*/
const displayModal = modalTopic => {

    //select the modal amd clear the current text/fields
    $("#contentModalText").empty();

    //Set the text to what it should be 
    $("#contentModalText").html(
        //Text will be set in the modal based on the modal info object 
    )
    //Display the modal 
    $("#contentModalText").show();

};
