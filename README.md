## Invalid access to private name

[![Greenkeeper badge](https://badges.greenkeeper.io/eventualbuddha/es6ify-name-invalid-access-bug.svg)](https://greenkeeper.io/)

This project is intended to reproduce a bug in which loading es6ify and then loading a file built using es6ify+browserify causes an exception in node.js. When run with `grunt` the output is shown below:

```
Running "browserify:dist" (browserify) task
>> Bundled tmp/math.es5.js

Running "concat:dist" (concat) task
File "dist/math.js" created.

Running "require-math" task
Warning: Invalid access to private name Use --force to continue.

Aborted due to warnings.
```