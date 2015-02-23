---
layout: post
title: "Python and Regex"
---
A Friend just asked me how to use Python to match Regx strings, so here's a quick and dirty example

```python
import re
a = re.compile("^.*[0-9]")

result = a.match("Michael")
if result != None:
    print "Match!"
else:
    print "No Match :("

result = a.match("Michael1")
if result != None:
    print "Match!"
else:
    print "No Match :("

```

Enjoy!