const quoteLists = [
  {
  quotes: "Life isn’t about getting and having, it’s about giving and being.",
  author: "Kevin Kruse"
  },
  {
  quotes: "Whatever the mind of man can conceive and believe, it can achieve.",
  author: "Napoleon Hill"
  },
  {
  quotes: "Strive not to be a success, but rather to be of value.",
  author: "Albert Einstein"
  },
  {
  quotes: "I attribute my success to this: I never gave or took any excuse.",
  author: "Florence Nightingale"
  },
  {
  quotes: "You miss 100% of the shots you don’t take.","author":"Wayne Gretzky",
  author: "Wayne Gretzky",
  },
  {
  quotes: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
  author: "Michael Jordan"
  },
  {
  quotes: "The most difficult thing is the decision to act, the rest is merely tenacity.",
  author: "Amelia Earhart"
  },
  {
  quotes: "Life is what happens to you while you’re busy making other plans.",
  author: "John Lennon"
  },
  {
  quotes: "We become what we think about.",
  author: "Earl Nightingale"
  },
  {
  quotes: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
  author: "Mark Twain"
  },
  {
  quotes: "Life is 10% what happens to me and 90% of how I react to it.",
  author: "Charles Swindoll"
  },
  {
  quotes: "The most common way people give up their power is by thinking they don’t have any.",
  author: "Alice Walker"
  },
  {
  quotes: "The mind is everything. What you think you become.",
  author: "Buddha"
  },
  {
  quotes: "The best time to plant a tree was 20 years ago. The second best time is now.",
  author: "Chinese Proverb"
  },
  {
  quotes: "An unexamined life is not worth living.",
  author: "Socrates"
  },
  {
  quotes: "Eighty percent of success is showing up.",
  author: "Woody Allen"
  },
  {
  quotes: "Winning isn’t everything, but wanting to win is.",
  author: "Vince Lombardi"
  },
  {
  quotes: "I am not a product of my circumstances. I am a product of my decisions.",
  author: "Stephen Covey"
  },
  {
  quotes: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
  author: "Pablo Picasso"
  },
  {
  quotes: "You can never cross the ocean until you have the courage to lose sight of the shore.",
  author: "Christopher Columbus"
  },
  {
  quotes: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  author: "Maya Angelou"
  },
  {
  quotes: "Either you run the day, or the day runs you.",
  author: "Jim Rohn"
  },
  {
  quotes: "Whether you think you can or you think you can’t, you’re right.",
  author: "Henry Ford"
  },
  {
  quotes: "The two most important days in your life are the day you are born and the day you find out why.",
  author: "Mark Twain"
  },
  {
  quotes: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
  author: "Johann Wolfgang von Goethe"
  },
  {
  quotes: "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
  author: "Zig Ziglar"
  },
  {
  quotes: "Life shrinks or expands in proportion to one’s courage.",
  author: "Anais Nin"
  },
  {
  quotes: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
  author: "Vincent Van Gogh"
  },
  {
  quotes: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
  author: "Aristotle"
  },
  {
  quotes: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
  author: "Jesus"
  },
  {
  quotes: "The only person you are destined to become is the person you decide to be.",
  author: "Ralph Waldo Emerson"
  },
  {
  quotes: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
  author: "Henry David Thoreau"
  },
  {
  quotes: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
  author: "Erma Bombeck"
  },
  {
  quotes: "Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.",
  author: "Richard P. Feynman"
  },
  {
  quotes: "You have no responsibility to live up to what other people think you ought to accomplish.I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
  author: "Richard P. Feynman"
  },
  {
  quotes: "I'm smart enough to know that I'm dumb.",
  author: "Richard Feynman"
  },
  {
  quotes: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
  author: "Booker T. Washington"
  },
  {
  quotes: "Certain things catch your eye, but pursue only those that capture the heart.",
  author: "Ancient Indian Proverb"
  },
  {
  quotes: "Believe you can and you’re halfway there.",
  author: "Theodore Roosevelt"
  },
  {
  quotes: "Everything you’ve ever wanted is on the other side of fear.",
  author: "George Addair"
  },
  {
  quotes: 'Teach thy tongue to say, “I do not know,” and thous shalt progress.',
  author: "Maimonides"
  },
  {
  quotes: "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the   assignment, and I told them they didn’t understand life.",
  author: "John Lennon"
  },
  {
  quotes: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
  author: "Helen Keller"
  },
  {
  quotes: "Everything has beauty, but not everyone can see.",
  author: "Confucius"
  },
  {
  quotes: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
  author: "Anne Frank"
  },
  {
  quotes: "When I let go of what I am, I become what I might be.",
  author: "Lao Tzu"
  },
  {
  quotes: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
  author: "Maya Angelou"
  },
  {
  quotes: "Happiness is not something readymade.  It comes from your own actions.",
  author: "Dalai Lama"
  },
  {
  quotes: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
  author: "Sheryl Sandberg"
  },
  {
  quotes: "If the wind will not serve, take to the oars.",
  author: "Latin Proverb"
  },
  {
  quotes: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
  author: "Unknown"
  },
  {
  quotes: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
  author: "Marie Curie"
  },
  {
  quotes: "Too many of us are not living our dreams because we are living our fears.",
  author: "Les Brown"
  },
  {
  quotes: "If you want to lift yourself up, lift up someone else.",
  author: "Booker T. Washington"
  },
  {
  quotes: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  author: "Joshua J. Marine"
  },
  {
  quotes: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
  author: "Leonardo da Vinci"
  },
  {
  quotes: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
  author: "Jamie Paolinetti"
  },
  {
  quotes: "So many books, so little time.",
  author: "Frank Zappa"
  },
  {
  quotes: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  author: "Bernard M. Baruch"

  },
  {
  quotes: "Be the change that you wish to see in the world.",
  author: "Mahatma Gandhi"
  },
  {
  quotes: "In three words I can sum up everything I've learned about life: it goes on." ,
  author: "Robert Frost"
  },
  {
  quotes: "To live is the rarest thing in the world. Most people exist, that is all." ,
  author: "Oscar Wilde"
  },
  {
  quotes: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  author: "Mahatma Gandhi"
  },
  {
  quotes: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ,
  author: "Martin Luther King Jr."
  },
  {
  quotes: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  author: "Ralph Waldo Emerson"
  },
  {
  quotes: "It is better to be hated for what you are than to be loved for what you are not." ,
  author: "Andre Gide"
  },
  {
  quotes: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle." ,
  author: "Albert Einstein"
  },
  {
  quotes: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
  author: "Maurice Switzer"
  },
  {
  quotes: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  author: "William Shakespeare"
  },
  {
  quotes: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
  author: "Mark Twain"
  },
  {
  quotes: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
  author: "Neil Gaiman"
  },
  {
  quotes: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
  author: "Eleanor Roosevelt"
  },
  {
  quotes: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
  author: "Groucho Marx"
  },
  {
  quotes: "The only way to do great work is to love what you do.",
  author: "Steve Jobs"
  },
  {
  quotes: "Either write something worth reading or do something worth writing.",
  author: "Benjamin Franklin"
  },
  {
  quotes: "Change your thoughts and you change your world.",
  author: "Norman Vincent Peale"
  },
  {
  quotes: "The question isn’t who is going to let me; it’s who is going to stop me.",
  author: "Ayn Rand"
  },
  {
  quotes: "It’s not the years in your life that count. It’s the life in your years.",
  author: "Abraham Lincoln
  },
  {
  quotes: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
  author: "Tony Robbins"
  },
  {
  quotes: "Remember no one can make you feel inferior without your consent.",
  author: "Eleanor Roosevelt"
  },
  {
  quotes: "Education costs money.  But then so does ignorance.",
  author: "Sir Claus Moser"
  },
  {
  quotes: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
  author: "Rosa Parks"
  },
  {
  quotes: "It does not matter how slowly you go as long as you do not stop.",
  author: "Confucius"
  },
  {
  quotes: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
  author: "Oprah Winfrey"
  },
  {
  quotes: "A person who never made a mistake never tried anything new.",
  author: " Albert Einstein"
  },
  {
  quotes: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
  author: "Bob Dylan"
  },
  {
  quotes: "I didn’t fail the test. I just found 100 ways to do it wrong.",
  author: "Benjamin Franklin"
  },
  {
  quotes: "When something is important enough, you do it even if the odds are not in your favor.",
  author: "Elon Musk"
  },
  {
  quotes: "I think it is possible for ordinary people to choose to be extraordinary.",
  author: "Elon Musk
  },
]
