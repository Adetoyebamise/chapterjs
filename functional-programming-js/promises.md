**Assignment Objective**
>Explain Promises with examples
****

We could uninvert that inversion of control to handle the continuation of our program to
another party, we could expect it to return us a capability to know when its task finishes, and then our code could decide what to do next?

This paradigm is called _Promises_.
    - Promises are abstracted (i.e treat them like a black box)

    - A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).  

    - A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

    - Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

**How Promises Work**

    A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:

- Fulfilled: <code>onFulfilled()</code> will be called (e.g., <code>resolve()</code> was called)
- Rejected: <code>onRejected()</code> will be called (e.g., <code>reject()</code> was called)
- Pending: not yet fulfilled or rejected
    
    A promise is settled if it’s not pending (it has been resolved or rejected).

    Settled promises are immutable i.e once settled a promise can not be resettled (Calling <code>resolve()</code> or <code>reject()</code> again will have no effect).

    Example:
    Here is a function that returns a promise which will resolve after a specified time delay;
    ```
    const wait = time => new Promise((resolve) => setTimeout(resolve, time));

    wait(3000).then(() => console.log('Hello!')); 
    output 
    ->  Hello!
    ```

- All spec-compatible promises define a <code>.then()</code> method which you use to pass handlers which can take the resolved or rejected value.

- That function takes two parameters, <code>resolve()</code>, and <code>reject()</code>. We can optionally <code>resolve()</code> or <code>reject()</code> with values, which will be passed to the callback functions attached with <ode>.then()</code>.

- When I <code>reject()</code> with a value, I always pass an Error object. Generally I want two possible resolution states: the normal happy path, or an exception — anything that stops the normal happy path from happening. Passing an Error object makes that explicit.
****
**Reference**
[Master the JavaScript Interiew: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

You don't know JavaScript : Async and Performance