# React, Redux, Reselect, and Sagas

The goal of this presentation is to overview these libraries and their APIs generally, then expose some opinionated best practices. In doing so, we can carve out some anti-patterns and learn to watch out for easy over engineering mistakes.

## JavaScript
- Written in 10 days by Bendan Eich for Netscape 2.0 in 1995
- Proof of concept alternative to Java in the browser
- Open sourced and standardized by Ecma in the late 1990s
- Mozilla, Microsoft, Adobe and Netscape went to war over language version 4 in early 2000s
- Google's V8 Reignited the early 2000s 'browser wars' a few years ago
- The TC39 board at Ecma now mediates the standard between all the major companies
- Disagreement on version number and name, but formally is is called EmcaScript
- Technically current version is v5, but it was previously called JavaScript 5, thus EcmaScript 2015
- Still tension between the various browsers and VMs, thus Babel

## React

### What is it?
- Decorates 'physical DOM' with abstract 'virtual DOM'
- Small API surface area for mutating physical DOM: Component
- Uses efficient DOM diffing to make minimal change to physical DOM
- Opinionated about data consumption (Immutability)

### DOM vs DOM

*Physical DOM*
- Changes are normally expensive
- Limited/inconsistent/hard to use JavaScript APIs (sometimes)
- No UI state outside of HTML5 `data-*` attributes

*Virtual DOM*
- Extremely efficient and fast
- Least amount of possible changes made to DOM during mutation
- Ability easily to manage and maintain state in memory

_ReactDom.render(ReactElement, DOMElement) -> instantiates virtual DOM around physical DOM_

### Component API

- setState
- replaceState (semi-deprecated)
- forceUpdate
- isMounted (semi-deprecated)

_Even with such small APIs, components should be Stateless Functions whenever possible_

### Component Lifecycle

*once per instance*
1. componentWillMount
1. render
1. componentDidMount

*0..infinite per instance*
1. componentWillRecieveProps(nextProps)
1. shouldcomponentUpdate(nextProps, nextState)
1. componentWillUpdate(nextProps, nextState)
1. render
1. componentDidUpdate(prevProps, prevState)

*once per instance*
1. componentWillUnmount

_After a render, physical DOM is only manipulated if the resulting markup changes_

### Stateless Functions/Non-inheriting Components

- Pure functions, no side effects
- Most preformant
- Can be validated with PropTypes like regular components


### React PropTypes

- Built-in component validation
- Static property on a component
- Development version of react only
- Similar-ish to C++ header files
- Enables default render settings for a component

```
MyComponent.propTypes = {
    // children: reserved for react, can still be validated
    // key: reserved for react, cannot be validated
    someExpectedStringProp: React.PropTypes.string
    someExpectedNumberProp: React.PropTypes.number
}
```

_For validations on large components or long arrays, development mounting/validating performance may suffer_

### Best Practices & Anti-patterns

*Best Practices:*

`./src/components/VideoListItem.example.js` and `./src/components/SearchBar.js`

+ Use stateless functions as much as possible
+ Validate _all_ component with `propTypes` before anything else
+ Set `defaultProps` when appropriate, after propTypes validation
+ Order the React Life-cycle methods correctly in a component's definition
+ `render()` should always be last, proceeded by additional `render*()` helpers
+ return statement of a render function, if more than 1 line long, should be wrapped in parenthesis.
+ Pass `props` and `state` as arguments to helper methods for testing and legibility

*Anti-patterns*

`./src/components/VideoList.js`

+ Multiple component definitions in one file
+ Adding helper functions to a component file, but not as a method of the component
+ Mutating state directly by assignment
+ Assigning props to component State
+ Passing down component methods to children (AKA: Leveraging two way data flow)

### Live code

1. Write a stateless function component to use as the video list item within the app:
    - Put it in a file called: `./src/components/VideoListItem.js`
    - Should have the following props:
        + active
        + thumbnailUrl
        + title
    - Use the markup from `./markup/VideoListItem.html`
    - BONUS: No longer than ~20 lines long
    - If you get stuck, checkout `./src/components/VideoListItem.example.js`

## Redux

### What is it?

- Lightweight in-memory database
- Functional Programming data management
- Pure, no side effects

### 3 Principals

1. Single source of truth
1. State is read only
1. Changes are made with pure functions

### Actions & Action Creators

> Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`.

- Can be created in action creator functions that always return an plain action object
- Get passed as the only argument to `store.dispatch()` to change state
- Creators can be bound with `bindActionCreators()`
- Commonly use CAPITAL_TRAIN_CASE constants for `action.type`s

```
function doSomething(number) {
    return {
        type: DO_SOMETHING_WITH_PAYLOAD,
        payload: number
    };
}
// Call store.dispatch(doSomething(number)) to change state

const doSomethingWithoutDispatch = bindActionCreators({doSomething}, store.dispatch);
// now we can call doSomethingWithoutDispatch(number) with no need to wrap it in `dispatch()`
```

### Reducers

> How the application state responds to a dispatched action

- A reducing function with the following pattern: `(previousState, action) => newState`
- Should always be pure, never...
    + Mutate its arguments
    + Perform side effects like API calls and routing transitions
    + Call non-pure functions, e.g. Date.now() or Math.random()
- Normally contain large switch statements
- Can be simplified and nested with `combineReducers()`

_Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation._

### Store

> The singleton construct that holds and manages the in memory state

- Access state with `getState()`
- Change state with `dispatch()` and some action
- Publishes changes to any listeners created with `subscribe()`

### `react-redux` connect

*Unconnected 'Presentational' Components*

- Don’t know where the data comes from, or how to change it
- Only render what’s given to them
- No Redux dependency.

*Connected 'Container' Components*

- Decorates presentational components
- Uses store.subscribe() to read a part of the Redux state tree
- Supplies updated props to a presentational component it renders when state changes

### Live code

1. Write and export an action creator for the search input form:
    - Put it in a file called `./src/actions/search.js`
    - The type property should equal 'UPDATE_SEARCH_TERM'
    - The only argument should be passed into the payload property of the returned action object
    - BONUS: define a constant action type and export it for use in the reducer
    - If you get stuck, checkout `./src/actions/search.example.js`

1. Write and connect a reducer for the search input form:
    - Put it in a file called `./src/reducers/search.js`
    - It should only return updated state if the action.type matches `UPDATE_SEARCH_TERM`
    - If the action.type does not match, return the original unmodified state
    - BONUS: Set initial state to 'Redux'
    - If you get stuck, checkout `./src/reducers/search.example.js`