# The most Goofy Ahh messages from Hank Schrader

Hey, sussy bakas, have you ever wanted to use epic quotes from Dean Norris in your JavaScript projects? Well now you can! This repository contains goofy ahh messages from Dean Norris (a.k.a. Hank Schrader) from different sources, including Cameo, Breaking Bad and Better Call Saul! Feel free to use this library for fake data or testing.

> Note: This library is still under development, so there are not many messages yet. More will be added in the future. If you'd like to add more Hank quotes, feel free to contribute by creating a pull request.

<img src="https://cdn.discordapp.com/attachments/510776441084968977/1069911115863183430/image.png" alt="Hank Schrader" height="200"/>

## Usage

Install the package:

```bash
npm install hank
```

Get all the messages:

```js
import { messages } from "hank";

console.log(messages); // [ { id: "sussyBaka", ... }, ... ]
```

Get a random message:

```js
import { message } from "hank";

console.log(message()); // { ... }
```


## Documentation

### `messages: HankMessage[]`

An array of all the messages. Each message is an object with the following properties:
```typescript
type HankMessage = {
    id: string;
    text: string;
    source: 'cameo'|'breakingBad'|'betterCallSaul';
    date?: Date;
};
```

### `message: () => HankMessage`

Returns a random message from the `messages` array.


## Contributing

If you'd like to add more messages, feel free to [create a pull request](https://githun.com/GDUcrash/hank/pulls). The messages should be in the correct format, and should be actual quotes from Dean Norris. 