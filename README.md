This branch is for getting a web worker to run in React. It turns out it's as easy as setting up a web worker outside of React in the script scope of the component definition. That was for a static worker. If the component needs its own worker I was able to use a state to store the worker and that was fine too.

In short it works exactly as I had hoped. That is a good sign moving forward.
