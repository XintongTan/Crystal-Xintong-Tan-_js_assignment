const the_date = new Date();

const aiBot = {
    qs: [["How are you", "Good"], 
        ["What is your name", "Crystal"],
        ["What are you doing", "Talking to you"],
        ["What date is it", "It is the "+ the_date.getDate()],
        ["What color is your hair", "Black"],
    ],

    checkAnswer: function (q) {
        let question = prompt("You can ask me -- How are you, What is your name, What are you doing, What date is it, or What color is your hair.");

        for (let number of this.qs) {

            if (number[0] == question) {

                prompt(number[1]);
                console.log(number[1]);
            } else {
                ask_another = prompt("Ask me again -- How are you, What is your name, What are you doing, What date is it, or What color is your hair.")

                if (ask_another == number[0]) {

                    prompt(number[1]);
                }

            }


            
        }
        
    },


}

aiBot.checkAnswer("What date is it");
