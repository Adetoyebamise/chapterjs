**Assignment Objective**
>What are side effect in programming, Give examples of side effect in JavaScript.
****

- A side effect by virtual of its name is something that occurs that's indirect as a relationship of an action that was taken.

- A side effect is any change in the system that is observable to the outside world.

Example: 

```
1;
!false;

```
- It is a useless program, though. An expression can be content to just produce
a value, which can then be used by the enclosing code. A statement stands on
its own, so it amounts to something only if it affects the world - or it could change
the internal state of the machine in a way that will affect the statements that
come after it. These changes are called _side effects_. 

Other examples of side effects are:

- showing a dialogue box or writing text to the screen 
- changing the file system
- inserting a record into a database
- making an http call
- mutations
- printing to the screen / logging
- obtaining user input
- querying the DOM
- accessing system state

****
**Reference**
Eloquent JavaScript