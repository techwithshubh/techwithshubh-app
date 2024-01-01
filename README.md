# Tech with Shubh Main Application

#### Few Learining from udemy course
1. Declare React.FC type if you want to mention custom prop interface.
2. Ref type can be declared using `useRef<HTMLDivElement | null>(null)`

#### How to build the editor for interactive course

Challenges

1. Code can include jsx code, how to transpile it in browser.
2. Code will be provided as string, we have to execute it safely.
3. Code can have imports to other npm modules.

Lets first address the challenge 1. for transpiling JSX into JS, we can use Babel as a tool. Lets see the alternatives:

1. Option 1 - We can make a backend call where we can pass the jsx as input and api will return the tranpiled code back just like in codepen.
2. Option 2 - For example in babeljs.io, transpiling is happening in browser itself instead of having a backend API.

Lets see how we will handle challenge 3. 

1. Using Common js or es modules, webpack can be used as a bundler that will create a single file by merging all the modules. The only challenge is instead of getting modules from local or modules folder, we need to fetch modules from npm itself dynamically.
    * Using webpack at the backend where we can use webpacknpminstall plugin
    * Custom webpack plugin in backend
    * Custom webpack plugin in react app itself - Webpack doesn't work in browser 😞

2. ESbuild can transpile and bundle code and also it work in browser.
    * when we call npm directly, npm is giving CORS errors.
    * unpkg is the solution.
    
Lets understand the plugin in esbuild.

![How ESBuild Plugin works](./docs/img/Screenshot%202023-12-30%20at%2011.42.56%20PM.png)
 
Once we have completed the challenges 2 and 3, lets run the code in browser. We can use `eval()` function
for executing the code. Following are the challenges:

1. if users have written incorrect code then whole app will crash.
2. User code can mutute the DOM, causing issues to the app.
3. Security: User might run run the code provided by malicious user.
4. Infinite loop is also a problem

The solution is using `iframe`. But iframe involve some of the security issues:

1. Iframe is having different execution context.
2. How can we allow communication between iframe and top(parent). Child can access parent context using 
`parent.window` and from parent to child using `document.querySelector().contentWindow`
3. Access is allowed if iframe don't have `sandbox` property or if it has sandbox property then its value should be `allow-same-origin` and domain, port and protocol are same.







