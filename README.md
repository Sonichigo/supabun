# supabun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run supabun.ts
```

This project was created using `bun init` in bun v1.0.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

To run with [@keploy.io](https://github.com/keploy):

* for recording testcases
```bash
<pathToKeployBinary> record -c 'bun run <pathToServerFile>'
```


* for running testcases in test mode
```bash
<pathToKeployBinary> test -c 'bun run <pathToServerFile>'
```
