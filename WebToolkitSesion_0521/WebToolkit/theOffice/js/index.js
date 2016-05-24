var quotes = [

	{ 
	quote: "Even if I didn't love every minute of it, everything I have, I owe to this job. This stupid, wonderful, boring, amazing job.",
	character: "Jim Halpert"
	},

	{ 
	quote: "I took a desk at the back because it was empty. But no matter how you get there or where you end up, human beings have this miraculous gift to make that place home.",
	character: "Creed Bratton"
	},

	{ 
	quote: "I wish there was a way to know you're in the good old days before you've actually left them.",
	character: "Andy Bernard"
	},

	{ 
	quote: "It took me so long to do so many important things. It's just hard to accept that I spent so many years being less happy than I could have been. Jim was 5 feet from my desk and it took me four years to get to him. It'd be great if people saw this documentary and learned from my mistakes. Not that I'm a tragic person. I'm really happy now. But it would just make my heart soar if someone out there saw this and she said to herself 'be strong, trust yourself, love yourself.' Conquer your fears. Just go after what you want and act fast, because life just isn't that long.",
	character: "Pam Beesly"
	},

	{ 
	quote: "Why are you the way that you are? Honestly, every time I try to do something fun or exciting, you make it not that way. I hate so much about the things that you choose to be.",
	character: "Michael Scott"
	},

	{ 
	quote: "There is a master key and a spare key for the office. Dwight has them both. When I asked, 'What if you die, Dwight? How will we get into the office?' He said, 'if I'm dead, you guys have been dead for weeks.'",
	character: "Pam Beesly"
	},

	{ 
	quote: "I DECLARE BANKRUPTCY!",
	character: "Michael Scott"
	},

	{ 
	quote: "I have been Michael Scott's #2 guy for about 5 years. And we make a great team. We're like one of those classic famous teams. He's like Mozart, and I'm like Mozart's friend. No. I'm like Butch Cassidy, and Michael Scott is like Mozart. You try and hurt Mozart; you're going to get a bullet in your head courtesy of Butch Cassidy.",
	character: "Dwight Schrute"
	},

	{ 
	quote: "You don't call retarded people retards. It's bad taste. You call your friends retards when they're acting retarded.",
	character: "Michael Scott"
	},

	{ 
	quote: "Toby is in HR, which technically means he works for corporate, so he's really not a part of our family. Also, he's divorced, so he's really not a part of his family.",
	character: "Michael Scott"
	},

	{ 
	quote: "I think an ordinary paper company like Dunder-Mifflin was a great subject for a documentary. There's a lot of beauty in ordinary things. Isn't that kind of the point?",
	character: "Pam Beesly"
	},

	{ 
	quote: "Let me describe the perfect date: I take her out to a nice dinner; she looks amazing. Some guy tries to hit on her...now he wants to fight, so I grab him, I throw him into the jukebox! Then the other ninja's got a knife, he comes at me, we grapple, I turn his knife on him. Blood on the dance floor! She's scared now. I take her home. I'm holding her in my arms. I reach in for a kiss...I hear something in the leaves, I flip her around, she gets a poison arrow right in her back. She was in on it the whole time...but I knew.",
	character: "Dwight Schrute"
	},

	{ 
	quote: "I don't want somebody sucking up to me because they think I am going to help their career...I want them sucking up to me because they genuinely love me.",
	character: "Michael Scott"
	},

	{ 
	quote: "In the wild, there is no healthcare. Healthcare is 'Oh, I broke my leg!' A lion comes and eats you, you're dead. Well, I'm not dead, I'm the lion, you're dead!",
	character: "Dwight Schrute"
	},

	{ 
	quote: "My perfect Valentine's Day? I'm at home, three cell phones in front of me, fielding desperate calls from people who want to buy one of the fifty restaurant reservations I made over 6 months ago.",
	character: "Dwight Schrute"
	},

	{ 
	quote: "What is my perfect crime? I break into Tiffany's at midnight. Do I go for the vault? No, I go for the chandelier. It's priceless. As I'm taking it down, a woman catches me. She tells me to stop. It's her father's business. She's Tiffany. I say no. We make love all night. In the morning the cops come and I escape in one of their uniforms. I tell her to meet me in Mexico but I go to Canada. I don't trust her. Besides, I like the cold. Thirty years later, I get a postcard. I have a son and he's the chief of police. This is where the story gets interesting: I tell Tiffany to meet me in Paris, by the Trocadero. She's been waiting for me all these years; she's never taken another lover. I don't care, I don't show up. I go to Berlin. That's where I stashed the chandelier.",
	character: "Dwight Schrute"
	},

	{ 
	quote: "Yeah, I have a lot of questions. Number one: how dare you?",
	character: "Kelly Kapoor (to Ryan)"
	}

];

$(document).ready(function() {
	
	window.onload = function() {
		pickQuote();
		createButton();
	}

	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	// Quote changer
	$("#button").on("click", function() {
		pickQuote();
		createButton();
	});

	// Animates 'The Office' sign
	$(".title-box").on("click", function() {
		$(this).addClass("animated hinge").one(animationEnd, function() {
			$(this).removeClass("animated hinge");
		});
	});
	
	// Animates the post-it
	$(".title-box").hover(function() {
		$(this).addClass("animated swing").one(animationEnd, function() {
			$(this).removeClass("animated swing");
		});
	});

	function pickQuote() {
		var randomNum = quotes[ Math.floor( Math.random() * quotes.length ) ];

		$("#quote").html(randomNum.quote);
		$("#character").html("- " + randomNum.character);
	}

	// Tweet Button - from http://denvycom.com/blog/twitter-button-with-dynamic-custom-data-text-message/
	function createButton() {

		// Create a New Tweet Element
		var tweet;
		var msg = document.getElementById('quote').innerHTML;
		var author = document.getElementById('character').innerHTML;

		if ( msg.length > 77 ) {
			var truncated = msg.slice( 0, 77 );
			tweet = "\"" + truncated + "..." + "\"" + "\n" + "More quotes from 'The Office' at";
		};

		if ( msg.length + author.length < 140 ) {
			tweet =  "\"" + msg + "\"" + " " + author;
		};

		var link = document.createElement('a');
		link.setAttribute('href', 'https://twitter.com/share');
		link.setAttribute('class', 'twitter-share-button');
		link.setAttribute('style', 'margin-top:5px;');
		link.setAttribute('id', 'twitterbutton');
		link.setAttribute("data-text", tweet);
		link.setAttribute("data-size", "large");

		// Put it inside the twtbox div
		var tweetdiv = document.getElementById('twtbox');
		// Removes previous tweet button if one already exists
		while (tweetdiv.firstChild) {
			tweetdiv.removeChild(tweetdiv.firstChild)
		};
		tweetdiv.appendChild(link);


		twttr.widgets.load(); //very important
	}

});