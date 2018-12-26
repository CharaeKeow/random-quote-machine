# Random Quote Machine
## freeCodeCamp Front End Library Project #1

The objective is to create a web page that shows random quote each time it loads, with functionality to get a new quote and share the quote to Twitter. Here are the user stories that needs to be fulfilled to pass the test: 

- [X] Wrapper element with corresponding `id="quote-box"`.
- [X] Within `#quote-box`, an element with a corresponding `id="text"`.
- [X] Within `#quote-box`, an element with a corresponding `id="author"`.
- [X] Within `#quote-box`, a clickable element with a corresponding `id="new-quote"`.
- [X] Within `#quote-box`, a clickable element with a corresponding `id="tweet-quote"`.
- [X] On first load, quote machine displays a random quote in the element with `id="text"`. 
- [X] On first load, quote machine displays a random quote's author in the element with `id="author"`.
- [ ] When the `#new-quote` button is clicked, the quote machine fetch a new quote and display it in the `#text` element.
- [ ] When the `#new-quote` button is clicked, the new quote's author is fetched and displayed in the `#author` element.
- [ ] Can tweet the current quote by clicking on the `#tweet-quote` button. The link `"twitter.com/intent/tweet"` is added to `a href=""` to tweet the current quote.
- [X] The `#quote-box` wrapper element should be horizontally centered (100% zoom and page maximized during testing.)


## Version One
### First Load

On first load, it will display random quote and random author. The quotes pool is quite small at this time (less than ten) but I will
add more quotes once I learn Json, AJAX and API - which seems rather complex now, plus I just wanna focus on passing the test for now :-).

Anyway, the next implementation is the onClick function, which fetch a new quote once the button is clicked. I think I will need to modify
the code a little bit for a better flow (whatever that means). 

![First Load Image](https://github.com/CharaeKeow/random-quote-machine/blob/first-load/ssss.PNG)

## Get New Quote Method 

-- TODO --
