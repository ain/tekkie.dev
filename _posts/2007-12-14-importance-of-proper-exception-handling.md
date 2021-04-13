---
layout: post
title: Importance of proper exception handling
date: 2007-12-14 15:04:52.000000000 +01:00
type: post
categories:
- flash
- as
tags:
- AS2
- ActionScript
- flashdev
- error
- exception
- Java
meta: {}
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
excerpt: Too many developers cut on error handling by providing a very raw framework that is incapable of handling exceptions.
last_modified_at: 2021-04-13 23:26:00 +01:00
---
Too many developers cut on error handling by providing a very raw framework that is incapable of handling exceptions. It looks like it's saving a day but in a long run it's probably going to cost badly.

Flash developers have all the means necessary to get errors properly handled at the required level. Similarly to Java for instance, there is `try...catch...finally` statement available in ActionScript.

Yet it's not used, on the contrary, there are many applications that go all the way procedural and resolve exceptions with endless if statements. So it's a maintenance issue as well. Things are not as readable as they could be.

To emphasize the usage of `try...catch...finally` statement, here's a very straightforward code to illustrate the point:

```
var jobVacancies:Array = new Array('Actionscript programmer', 'Flash developer', '3D designer');

/***
 Search the vacancies Array

  Parameters
  criteria:String - Search criteria string

  Returns
  Boolean, true on match and false if the criteria has no match
 */
function searchVacancy():Boolean
{
  if (arguments.length == 0) {
    throw new Error ('No arguments found');
  } else if (arguments.length > 1) {
    throw new Error ('Invalid number of arguments');
  } else if (typeof(arguments[0]) != 'string') {
    throw new Error ('Invalid argument type');
  } else if (arguments[0].length == 0) {
    throw new Error ('Empty criteria');
  } else {
    for (var i in jobVacancies) {
      if (jobVacancies[i] == arguments[0]) return true;
    }
    return false;
  }
}

try {
  var isAvailable:Boolean = searchVacancy(''),
    traceStr:String = isAvailable ? 'Given vacancy available!' : 'Given vacancy unavailable!';
  trace(traceStr);
} catch (e) {
  trace("Error: "+e.message+"!");
}
```

The above code will trace `Error: Empty criteria!` as there's an empty String for the argument of `searchVacancy` function.
