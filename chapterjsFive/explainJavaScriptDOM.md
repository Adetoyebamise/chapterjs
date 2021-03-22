#### Assignment Objective
>In a markown file, explain JavaScript DOM

DOM is short for Document Object MOdel, The DOM is an organization chart, created automatically by the browser when your web page loads, for the whole web page. All the things on the your web page - the tags, the text blocks, the images, the links, the tables, the style attributes, and more - have spots on this organization chart. This means that our JavaScript code can get its hands on anything on our web page, anything at all, just by saying where that things is on the chart.

In JavaScript we need to tell JavaScript what to look for where to find it.

**Access elements with querySelector Methods**
        Step 1 : Find the element you want to work with when doing something with the DOM

**Access elements using older methods**
    Method A: getElementByClassName : This returns an array of object from any node matching the query.


    Method B: getElementById : Developers use ids to target object.

**Modify element classes**
    This is a common task of JavaScript and a simple way of changing the apperance and behavior.

**Attribute**
    JavaScript can be used to modify the attribute of any elements. Attributes are stored in the attributes property.

    How to use getAttribute :
    a) has attribute
    b) get attribute
    c) remove attribute

**Inline Style**
    IN JavaScript we can lift out style information using the style property on that element; this property list all the available style property.
    Targeting the individual style properties is the recommended way of handling inline style because it allows us to modify just that property and nothing else

**Add DOM elements**
> parentNode.append()

> ParentNode.prepend() //Here we replace element at the top instead of at the buttom 

> Node.appendChild()