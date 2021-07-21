<h1 align="center">
  GitHub Copilot Interview Question Solutions
</h1>
<p align="center">
    <img alt="Project logo" width="500" src="./logo.png"/>
</p>


This repository is meant to demonstrate the capabilities [GitHub Copilot](https://copilot.github.com/) has in regard to solving algorithm-adjacent interview questions.

It's main intent is to demonstrate how [Github Copilot breaks bad interviews](https://coderpad.io/blog/github-copilot-breaks-bad-interviews/) and encourage employers to [stop using non-representative interview questions](https://coderpad.io/blog/5-tips-for-tech-recruiting/#less-algorithms-more-demos).

## Questions Solved

In our testing, Copilot was easily able to solve the following problems using only the function name as reference:

- [x] [Binary search](./questions/binary-search.js)
- [x] [Deep copy](./questions/deep-copy.js)
- [x] [Factorial](./questions/factorial.js)
- [x] [Fibonacci](./questions/fibonacci.js)
- [x] [Fizzbuzz](./questions/fizzbuzz.js)
- [x] [Is number prime](./questions/prime-check.js)
- [x] [Palindrome check](./questions/palindrome-check.js)
- [x] [Reverse linked list](./questions/reverese-linked-list.js)
- [x] [Rot13](./questions/rot13.js)
- [x] [Xor swap](./questions/xor-swap.js)
- [Regex](./questions/regex)
  - [x] [Phone regex](./questions/regex/phone-regex.js)
  - [X] [Hex to RGB](./questions/regex/hex-to-rgb.js)
- [Sort algorithms](./questions/sorts)
  - [x] [Quicksort (mutates in-place)](./questions/sorts/quicksort.js)
  - [x] [Heapsort](./questions/sorts/heapsort.js)

## Methodology

Since Copilot is able to [use your current file for guidance on what to generate](https://copilot.github.com/#faq-what-context-does-github-copilot-use-to-generate-suggestions) based on context,
we've done the following to make sure that our data is not skewed by our own code or more information than intended.

- We start with an empty JavaScript file
- We type the least necessary code and wait no longer than 5 seconds for recommendations
- Any comments starting with "// Copilot" or "// NOTE: " were added after-the-fact.
- We add any additional context (if we had to check Copilot's other suggestions, if we tried other function names, etc)
  - If unspecified, the present code was Copilot's first suggestion 
- We add a JS block comment at the top of the file explaining the code problem after-the-fact for the reader's benifit

## Contributing

Have access to GitHub copilot and want to submit other questions similar to this? Please do! 

Simply [fork](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/about-forks) this repo.
Then, add a question in your fork. Make sure to follow [our methodology](#methodology) in order to avoid mistaken inputs. 

Afterwards, send us a [pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) and we'll review and merge!

