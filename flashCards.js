// Load the NPM Package inquirer
var inquirer = require("inquirer");
// Grab the fs package to handle read/write
var fs = require("fs");

//Basic Card
if (process.argv[2] === "basic") {
	inquirer.prompt([
	  {
	    type: "input",
	    message: "What should the front of this card say?",
	    name: "frontOfCard"
	  },
	  {
	    type: "input",
	    message: "What should the back of this card say?",
	    name: "backOfCard"
	  },
	]).then(function(user) {

		var frontString = user.frontOfCard;
		var backString = user.backOfCard;

		function BasicCard (front, back) {
			this.front = front;
			this.back = back;
		}

		var FCObj = new BasicCard(frontString, backString);

		var textFile = "basic.txt";

		// Want to write strings to the file instead of objects?  Uncomment the next line and change the variable names below it.
		// var stringToAppend = user.frontOfCard + "|" + user.backOfCard + "|";

		fs.appendFile(textFile, JSON.stringify(FCObj) + ",", function(err) {

		  if (err) {
		    console.log(err);
		  }

		  else {

		    console.log(FCObj);
		  }

		});
	});
}

//Cloze Card
if (process.argv[2] === "cloze") {
	inquirer.prompt([
	  {
	    type: "input",
	    message: "Enter the contents of your flashcard, including a ~ whereever you'd like the answer to go.",
	    name: "fcContents"
	  },

	  {
	    type: "input",
	    message: "What answer should replace the ~ you typed in the last step?",
	    name: "fcBlank"
	  },

	]).then(function(user) {

	  	var stringWithBlank = user.fcContents;
		var blankString = user.fcBlank;

		function ClozeCard (text, cloze) {
			this.text = text; //Text with ~
			this.cloze = cloze; //Text to replace ~
			this.formattedFC = this.text.replace("~", this.cloze); //Text with ~ already replaced
			this.returnText = function() {
				return this.text.replace("~", "_BLANK_");
			}
			this.returnCloze = function() {
				return this.cloze;
			}
		}

		// creates the returnformattedFC method and applies it to all ClozeCard objects
		ClozeCard.prototype.returnformattedFC = function() {
  			return this.formattedFC;
		};

		var FCObj2 = new ClozeCard(stringWithBlank, blankString);

		var textFile = "cloze.txt";

		// var formattedFC = "{{c1::" + user.fcBlank + "}}";
		// var stringToAppend = user.fcContents.replace("~", formattedFC) + "|";

		if (stringWithBlank.includes("~")) {
			fs.appendFile(textFile, JSON.stringify(FCObj2) + ",", function(err) {

				  if (err) {
				    console.log(err);
				  }

				  else {
				    console.log(FCObj2);
				  }

			});	
		}
		else {
			console.log("First string didn't include a ~.  Aborting without creating a flash card.");
		}
		
	});
}