let randomQuote = [
       { quote: "“Be a fruitloop in a world of Cheerios”",
          authour: "Unknown"},

       { quote: "“Dream beautiful dreams, and then work to make those dreams come true”",
          authour: "Spencer W. Kimball",},

       { quote: "“Be the change you want to see in the world”",
        authour: "Mahatma Gandhi",},

       { quote: "“All our dreams can come true, if we have the courage to pursue them”",
        authour: "Walt Disney",},

        { quote: "“The secret of getting ahead is getting started”",
        authour: "Mark Twain",},    

        { quote: "“The best time to plant a tree was 20 years ago. The second best time is now”",
        authour: "Chinese Proverb",}, 

        { quote: "“It’s hard to beat a person who never gives up”",
        authour: "Babe Ruth",},

        { quote: "“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours”",
        authour: "Leah Busque",},

        { quote: "“If people are doubting how far you can go, go so far that you can’t hear them anymore”",
        authour: "Michele Ruiz",},

        { quote: "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever, MAKE”",
        authour: "Joss Whedon",},

        { quote: "“Everything you can imagine is real”",
        authour: "Pablo Picasso",},

        { quote: "“It’s no use going back to yesterday, because I was a different person then”",
        authour: "Lewis Carroll",},

        { quote: "“Do what you feel in your heart to be right – for you’ll be criticized anyway”",
        authour: "Eleanor Roosevelt",},

        { quote: "“Happiness is not something ready made. It comes from your own actions”",
        authour: "Dalai Lama XIV",},

        { quote: "“Whatever you are, be a good one”",
        authour: "Abraham Lincoln",},

        { quote: "“If we have the attitude that it’s going to be a great day it usually is”",
        authour: "Catherine Pulsifier",},

        { quote: "“Impossible is just an opinion”",
        authour: "Paulo Coelho",},

        { quote: "“Your passion is waiting for your courage to catch up”",
        authour: "Isabelle Lafleche",},

        { quote: "“Magic is believing in yourself. If you can make that happen, you can make anything happen”",
        authour: "Johann Wolfgang",},

        { quote: "“If something is important enough, even if the odds are stacked against you, you should still do it”",
        authour: "Elon Musk",},

        { quote: "“Don’t be afraid to give up the good to go for the great”",
        authour: "John D. Rockefeller",},

        { quote: "“It’s Monday… time to motivate and make dreams and goals happen. Let’s go”",
        authour: "Heather Stillufsen",},

        { quote: "“It was a Monday and they walked on a tightrope to the sun”",
        authour: "Marcus Zusak",},

        { quote: "“Everything comes to him who hustles while he waits”",
        authour: "Thomas Edison",},

        { quote: "“Greatness only comes before hustle in the dictionary”",
        authour: "Ross Simmonds",},

        { quote: "“Without hustle, talent will only carry you so far”",
        authour: "Gary Vaynerchuk",},

        { quote: "“We are what we repeatedly do. Excellence, then, is not an act, but a habit”",
        authour: "Aristotle",},

        { quote: "“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on”",
        authour: "Sheryl Sandberg",},

        { quote: "“Great things are done by a series of small things brought together”",
        authour: "Vincent Van",},

        { quote: "“Leaders can let you fail and yet not let you be a failure”",
        authour: "Stanley McChrystal",}

]

let button = document.getElementById("btn");
let output = document.getElementById("output");
let author = document.getElementById("author");

button.addEventListener("click", mybtn)
function mybtn (){
 let random = Math.floor(Math.random()*randomQuote.length);

 console.log(randomQuote[random].quote);
 console.log(randomQuote[random].authour)

output.innerHTML = randomQuote[random].quote;
author.innerHTML = randomQuote[random].authour;

}
