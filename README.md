# Qqtay-library
Javascript UI library

## How to use?

Take 'style.css' and 'script.js' from './dist/' to your project.


#### Get to html elements

```javascript
$(selector) \\ html collection

$(selector).eq(n) \\ element 

```

#### Change classes and atributes

```javascript
$(selector).addClass('class', 'one more', '...') \\ add classes to all html collection
$(selector).removeClass('class', 'one more', '...') \\ remove classes to all html collection
$(selector).toggleClass('class', 'one more', '...') \\ toggle classes to all html collection

$(selector).setAttribute(Attribute, AttributeValue) \\ setAttribute to all html collection
$(selector).removeAttribute(Attribute) \\ removeAttribute to all html collection

$(selector).show()  \\ display on
$(selector).hide()  \\ display none
$(selector).toggle()  \\ toggle display
```


#### Animations

```javascript
$(selector).fadeIn(time, display = 'block', finalAction())  
$(selector).fadeOut(time, finalAction())  
$(selector).fadeToggle(time, display = 'block', finalAction())  
```

## What can it do? 

You can find components examples in './preview/'.
