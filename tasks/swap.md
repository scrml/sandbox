Word swapper is an enhanced find and replace tool. Take a block of text from the user, split it into groups by word, and allow the user the ability to change the word.

The user should have control over group structure. How you do this is up to you but let the user split a group into pieces and to merge groups if they have the same word.

Inside a group let the user change the word. Also let them change the color, highlight, bold/italic/underline, and whatever other CSS properties you want to support.

This is a pretty complicated task. Maybe use this file to organize some intermediate steps.

# Word Technicalities

Do not write a parser for this task! Use JS' built-in RegEx for splitting into words. Split the user text by `/\w+/g` to get words (one or more word character). You can choose a different RegEx if you wish.

The RegEx is only for the initial grouping into words. Once the user has split up a block of text into groups they will be modifying it through the GUI that you are building. It should be powerful enough to be a functional text editor. Maybe allow them to insert new text at any point using the RegEx splitting technique. Also let them delete words.

Should the user be allowed to replace a word by a nonword? Can they modify the sentence `Take a ferry` to `Take a sweet floatplane` by replacing `ferry` with `sweet floatplane`? I would want that feature if I were using this product. Here `sweet floatplane` is treated as a single word.

That leads to another idea: allow to merge groups of different words if they combine correctly. So in the line `Not|every|floatplane|is|a|sweet|floatplane` (split by group) maybe have a tool to merge the `sweet|floatplane` words into the single group `sweet floatplane`.

Should we offer control over punctuation? What about plurals and capitalization? It seems feasible to have the groups contain these data, like to have singular/plural representations for each group. Feel free to ignore whatever would be too complicated.

# Plan Before You Build

Are there any other features which sound cool? It is infinitely easier to build features if you leave room for them from the beginning. Some features require structural changes which would require total rewrites if you hadn't thought of them when you started so you should probably spend some time imagining what you want this software to do before starting construction.

Of course total rewrites are fine if you intentionally started small. Or if you have the drive to pull it off. But they tend to get old pretty quick.
