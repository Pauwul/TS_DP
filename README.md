# Typescript Design Patterns
## Abstract
Common [Design Patterns](https://en.wikipedia.org/wiki/Software_design_pattern) implemented in [Typescript(https://www.typescriptlang.org/)], for future reference and present learning.
Thanks to [Fireship](https://fireship.io/) and [Refactoring Guru](https://refactoring.guru/) for being great resources for learning this stuff. 
<br>
As Refactoring Guru points out, you might manage to work as a programmer for many years without knowing about a single pattern. But you'll defeninetely encounter the common problems that they solve, so you'll come up with them, as they're the obvious solution. So why bother learning them?

Well, the answear for me is twofold:

1. As mentioned, these are solutions to common problems, so why learn them as you encounter them, wasting time, when you could learn them beforehand, increasing your proficiency as a developer.
1. My colleagues use these design patterns as common language of sorts. So knowing the terms facilitates better communication within developer environments. Instead of explaining the whole pattern, you can say "Yeah, just use a builder for that" and everybody will understand.

Most of the *criticism* of design patterns boils down to:
- the structuring and labeling of what is considered good practices in OOP 
- their broadness in what they can mean and how you can implement them is confusing at first, then you realise you don't have to implement them if you find a simpler solution
- they're similar to SOLID principles, in the sense in which they lead you to a way to architect code in similar ways

For more about details, I higly recommend reading through [this slightly critical article](https://blog.codinghorror.com/rethinking-design-patterns/) and [this article with lots of critical insights from Mark Dominus]()

From my point of view, I see them as overrated, but still useful. Some people may be lead to think that they were made by geniuses and need to be memorised as they are written in *some* really old [books](https://en.wikipedia.org/wiki/Design_Patterns), as a beginner into Computer Science you hear about them a lot. Most of them already have some easy way to implement in modern languages(as you can see in some of the coding examples), moreover, some would think that you need to always apply them, even though there might be a simpler solution, especially in modern languages like Typescript.

The ideas of the solutions that design patterns point to are more important than the implementation itself.
**Ideas over code.**
## Usage

```bash
npm i # to install dependencies
# you may want to install typescript and ts-node globally with:
# npm i -g typescript ts-node
# ( to avoid using npx in the future )
npx ts-node file.ts # to run a script
```
