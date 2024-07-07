# wayDelay
A small library for asynchronous delay calls with JS.

### Example usage with anonymous function:

```
wayDelay(
    3000, // Measured in milliseconds (3000ms = 3s).
    function() {
        console.log('Hello world.');
    }()
);
```

### Example usage with named function:

```
function yourFunction(yourArguments) {
    console.log(yourArguments);
}

wayDelay(
    3000, // Measured in milliseconds (3000ms = 3s).
    yourFunction('Hello world.')
);
```

Copy this for easy use!
```
<script src="https://cdn.jsdelivr.net/gh/garyridgway/wayDelay/wayDelay.js"></script>
```
