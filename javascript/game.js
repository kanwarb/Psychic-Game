

var englishAlphabets = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = Math.floor(Math.random() * englishAlphabets.length);
var myGuess =Array();
var myGuessID = document.getElementById("myGuessID");
var my_guess_count = 0;
var my_guess_string ="";
var my_Guess_letter='';
var computerChar ='';
var myLosses = 0;
var myLossID = document.getElementById("myLossID");
var myWinID = document.getElementById("myWinID");
var myWins = 0;
var myGuessLeft = 10;
var myGuessLeftID = document.getElementById("myGuessLeftID");


function my_guesses_array()
{
    // document.onkeyup = function(event){
       
        document.addEventListener('keyup', function (event) {   
           // myGuessID.push(event.key);
           // myGuessID.textContent = event.key;
    
            computerChar =  englishAlphabets.charAt(Math.floor(Math.random() * englishAlphabets.length));

            if ( englishAlphabets.indexOf(event.key) == -1) 
               {
                   alert("You pressed an invalid key" + event.key +" Please enter a letter between a to z");
               } 
            else if ( my_guess_string.indexOf(event.key) == 0) {
                alert("This letter is already part selected previously select another");
            }
               else
               {
                if (my_guess_count >= 10 ) {
                    computerChar='';
                    myGuess= [];
                    my_guess_string='';
                    document.getElementById("myGuessID").innerHTML = my_guess_string;
                    my_guess_count =0;
                    myLosses++;
                    myGuessLeft =11;
                    document.getElementById("myLossID").innerHTML = myLosses;
                }
                if(computerChar == event.key) {
                    alert(computerChar + " That is the right answer");
                    computerChar='';
                    myGuess= [];
                    my_guess_string='';
                    document.getElementById("myGuessID").innerHTML = my_guess_string;
                    my_guess_count =0;
                    myGuessLeft =11;
                    myWins++;
                    document.getElementById("myWinID").innerHTML = myWins;
                }
                else if (computerChar != event.key) {
                    console.log(computerChar);
                    myGuess_letter = event.key;
                    myGuess[0] = document.getElementById("myGuessID").value;
                    
                        for(i=0; i < myGuess.length; i++) {
                            my_guess_string += myGuess_letter +',';
                            document.getElementById("myGuessID").innerHTML = my_guess_string;
                    
                            computerGuess = Math.floor(Math.random() * englishAlphabets.length);
                    
                        }
                        my_guess_count++;
                }
            }      
                computerChar='';
                myGuess= [];
                myGuessLeft--;  
                document.getElementById("myGuessLeftID").innerHTML = myGuessLeft;
                window.addEventListener('DOMContentLoaded', my_guesses_array, false); 
    })

}
my_guesses_array();