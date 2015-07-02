# md-stack

A JavaScript micro-library for Node and browsers that provides a Stack data structure (< 1 kb).

## Installation

```
$ npm install --save-dev md-stack
```

```
$ bower install md-stack
```

## Usage

    // no maximum capacity
    var s = new Stack()
      .push('a')
      .push('b');

    console.log(s.size());       // 2
    console.log(s.pop());        // b
    console.log(s.peek());       // a
    console.log(s.indexOf('a')); // 0
  
    s.clear();
    console.log(s.empty());      // true
    
    
    // maximum capacity of 2
    var s = new Stack({ cap: 2, yell: true });
      .push('a')
      .push('b')
      .push('c'); // throws error
    
    console.log(s.size()); // 2
    console.log(s.full()); // true

## API

### Constructor Options
* `cap` (Integer) - Maximum capacity of the stack.  [Optional, **default:** undefined]
* `yell` (Boolean) - If `true`, throw an error when stack would overflow on a `.push()`  [Optional, **default:** undefined]

### .pop()
Removes and returns the element on top of the stack.

### .push(element)
Pushes the `element` onto the top of the stack.  If the stack is full, the element won't be added and an error will
be thrown if the `yell` option is used.

### .peek()
Returns, but does not remove, the element on top of the stack.

### .indexOf(element)
Returns the position of the `element` in the stack, -1 if not found.

### .clear()
Clears the stack, removing all elements.

### .empty()
Determines if the stack is empty.

### .full()
Determines if the stack is at maximum capacity.

### .size()
Returns the number of elements in the stack.

### .capacity([cap])
If `cap` is provided, the maximum capacity of the stack is set and any overflowing elements (starting from the
top) are removed.  If `cap` is not provided, the maximum capacity of the stack is returned.

## License

MIT
