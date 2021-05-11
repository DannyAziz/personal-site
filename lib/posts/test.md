---
title: "First Post!"
date: 2020-09-01
published: true
---

# h1 Heading

First MDX Post for Gatsby Blog! Hello World!

## h2 Heading

### h3 Heading

Here is some JavaScript code:

```js
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code components={components} className={className} {...props} />
    );
  }
};
```
