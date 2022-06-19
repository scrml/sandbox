The editor will do all its business logic in a web worker. We need to be able to build a web worker in React so this branch is for that.

Summon a web worker and use it. Let the user type a message to send to the worker. Upon reception have the worker modify the text somehow (or not) and then respond with it. When react gets the response put it into a paragraph and append it to the page.