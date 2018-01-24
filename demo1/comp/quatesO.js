'use strict';

var quatesArr = [ 
    
  { "body": "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning.", "author": "Rick Cook" 

 }, { "body": "Lisp isn't a language, it's a building material.", "author": "Alan Kay"

 }, { "body": "Walking on water and developing software from a specification are easy if both are frozen.", "author": "Edward V Berard"

 }, { "body": "They don't make bugs like Bunny anymore.", "author": "Olav Mjelde"

 }, { "body": "A programming language is low level when its programs require attention to the irrelevant.", "author": "Alan J. Perlis"

 }, { "body": "A C program is like a fast dance on a newly waxed dance floor by people carrying razors.", "author": "Waldi Ravens" 

 }, { "body": "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.", "author": "Bjarne Stroustrup"

 }, { "body":"Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", "author":  "Eric S. Raymond" 

 }, { "body":"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.", "author":  "Mosher’s Law of Software Engineering"

 }, { "body":"I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.", "author":  "Oktal"

 }, { "body":"Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN’T be like.", "author":  "pixadel"

 }, { "body":"Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.", "author":  "Bill Clinton"

 }, { "body":"The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.", "author": "E.W. Dijkstra"

 }, { "body":"In the one and only true way. The object-oriented version of 'Spaghetti code' is, of course, 'Lasagna code'. (Too many layers).", "author": "Roberto Waltman"

 }, { "body":"FORTRAN is not a flower but a weed — it is hardy, occasionally blooms, and grows in every computer.", "author": "Alan J. Perlis"

 }, { "body":"For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.", "author":  "Bill Bryson"

 }, { "body":"In My Egotistical Opinion, most people's C programs should be indented six feet downward and covered with dirt.", "author": "Blair P. Houghton"

 }, { "body":"When someone says: 'I want a programming language in which I need only say what I wish done', give him a lollipop.", "author": "Alan J. Perlis"

 }, { "body":"The evolution of languages: FORTRAN is a non-typed language. C is a weakly typed language. Ada is a strongly typed language. C++ is a strongly hyped language.", "author": "Ron Sercely"

 }, { "body":"Good design adds value faster than it adds cost.", "author": "Thomas C. Gale"

 }, { "body":"Python's a drop-in replacement for BASIC in the sense that Optimus Prime is a drop-in replacement for a truck.", "author": "Cory Dodt"

 }, { "body":"Talk is cheap. Show me the code.", "author": "Linus Torvalds"

 }, { "body":"Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "author": "Antoine de Saint-Exupéry"

 }, { "body":"In theory, theory and practice are the same. In practice, they’re not.", "author": "Yoggi Berra"


 }, { "body":"PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.", "author": "Jon Ribbens"

 }, { "body":"Programming is like kicking yourself in the face, sooner or later your nose will bleed.", "author": "Kyle Woodbury"

 }, { "body":"Perl – The only language that looks the same before and after RSA encryption.", "author": "Keith Bostic"

 }, { "body":"It is easier to port a shell than a shell script.", "author": "Larry Wall"

 }, { "body":"I invented the term 'Object-Oriented', and I can tell you I did not have C++ in mind.", "author": "Alan Kay"

 }, { "body":"Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry", "author":  "Ted Nelson"

 }, { "body":"The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.", "author":  "Randall E. Stross" 

 }, { "body":"If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.", "author":  "Randall E. Stross" 

 }, { "body":"Beware of bugs in the above code; I have only proved it correct, not tried it.", "author": "Donald E. Knuth."

 }, { "body":"Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success.", "author": "Tom DeMarco"

 }, { "body":"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", "author": "Christopher Thompson"

 }, { "body":"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "author": "Bill Gates"

 }, { "body":"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "author": "Brian W. Kernighan"

 }, { "body":"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.", "author": "Donald Knuth"

 }, { "body":"First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.", "author":  "George Carrette"

 }, { "body":"Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.", "author":  "Larry Wall"

 }, { "body":"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", "author":  "Alan Kay"

 }, { "body":"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", "author":  "Seymour Cray"

 }, { "body":"On two occasions I have been asked [by members of Parliament]: 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.", "author": "Charles Babbage"

 }, { "body":"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "author": "Linus Torvalds"

 }, { "body":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "author": "Martin Golding"

 }, { "body":"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.", "author":  "C.A.R. Hoare"

 }, { "body":"Talk is cheap. Show me the code.", "author":  "Linus Torvalds"

 }, { "body":"when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.", "author":  "Why The Lucky Stiff"

 }, { "body":"Programs must be written for people to read, and only incidentally for machines to execute.", "author":  "Harold Abelson"

 }, { "body":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live", "author":  "John Woods"

 }, { "body":"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.", "author":  "Rick Cook"

 }, { "body":"That's the thing about people who think they hate computers. What they really hate is lousy programmers.", "author":  "Larry Niven"

 }, { "body":"Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.", "author":  "Waseem Latif"

 }, { "body":"How you look at it is pretty much how you'll see it", "author":  "Waseem Latif"

 }, { "body":"You've baked a really lovely cake, but then you've used dog shit for frosting.", "author":  "Steve Jobs"

 }, { "body":"I'm not a great programmer; I'm just a good programmer with great habits.", "author":  "Kent Beck"
     
 }, { "body":"Truth can only be found in one place: the code.", "author":  "Robert C. Martin"


 }, { "body":"A language that doesn't affect the way you think about programming is not worth knowing.", "author":  "Alan J. Perlis"

 }, { "body":"The most disastrous thing that you can ever learn is your first programming language.", "author":  "Alan Kay" }
 
]; 


//exports.quatesF = function() {  return quates;  }// logs that quates is function 
exports.q = quatesArr; //logs, to access by index use assgnName.quates[i]
