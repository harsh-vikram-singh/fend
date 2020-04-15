# Landing Page Project

## Table of Contents

* [Overview](#Overview)

## Overview

This page was built as an exercise to better understand DOM manipulation. The navbar is build dynamically for all the sections of the page. Clicking on any one section scrolls the webpage to the appropriate section using the id.

The process is as follows:

* Select all sections of the page using `querySelectorAll()`
* Loop over the sections and make a `li` element for each. Set appropriate `class` and `innerText`, and add those in a `documentFragment`
* Add the fragment to the `ul` in the `nav` section. It is made a `flex` container to properly align items in a horizontal manner
* Event listener is setup to listed for the clicks on the `ul`, and target element's value is captured to determine which `li` item was clicked
* Using the `element.scrollIntoView` with `behaviour: "smooth"` property, the page scrolls to the appropriate section with a smooth transition.
