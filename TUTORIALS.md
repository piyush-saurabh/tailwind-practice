# Section 1

## Links

**Tailwind Documentation**
https://tailwindcss.com

**Course Resources**
https://tailwindfromscratch.com/

**Code For Simple Tailwind Starter**
https://github.com/bradtraversy/simple-tailwind-starter

**Sandbox Code**
https://github.com/bradtraversy/tailwind-sandbox

**UI Design Inspiration**
https://www.frontendmentor.io/

**Source Code for the project**
https://github.com/bradtraversy/tailwind-course-projects

## Notes
- Tailwind is "utility-first" framework unlike Bootstrap which is "component-first"
- Tailwind have different class named according to their purpose so they are easy to remember. For e.g mb-2: margin bottom

## Environment Setup

**VS Code Extensions**
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

**Node JS**

# Tailwind Fundamentals - Part 1
## Intro
- 'div' is a block level element. It will always occupy the complete horizontal space
- To add sample text during development, type 'lorem' followed by a number for amount of text, for e.g. lorem60
- flex: A container which helps to create responsive design.
- If we use flex on the parent div, all the div within it will be inline rather than block
- items-center: align items inside flex box in center. 
- items-end: align items inside flex box in one row. 
- p-6: padding all around
- max-w-sm: maximum width of the flexbox as small
- mx-auto: move the container in middle. Create a margin on 'x' axis
- mt-12: add margin on the 'top'. This will move the container on y axis
- bg-white: add white background to the container
- rounded-xl: Add rounded corners with xl size
- shadow-lg: Add shadow with large size
- space-x-4: Add space between items inside the container on x axis
- w-12: Set the width of image
- h-12: Set the height of the image

## Working with colors

```
# Create a paragraph with black and text. 
# Note: Black and white does not have shades.
p.text-black
p.text-white

# Create a paragraph with color and shades. Higher the value, darker the color
p.text-red-20

# Add background color
p.bg-red-20
```

## Container and styling
- 'container' is a class used on div
- 'flex' is the class used for div. 
- Inside 'flex' div, we can have multiple div. 
- By default, each of these div will be in a row.
- to make flex vertical, use 'flex-col'

### Margin
margin (m) is the spacing **outside** the container

```
# put container in the middle. Add margin on 'x' axis 
mx-auto (margin left and right)

# Add margin on 'y' axis
my-auto (margin top and down)

# Add margin all around the container
m-2

# Add margin on left
ml-2

# Add margin on right
mr-2

# Add margin on top
mt-2

# Add margin on bottom
mb-2

# Adding arbitrary margin
mt-[20px]

```

### Padding
padding (p) is the space **inside** the container

```
# Add margin all around the container
p-2

# Add margin on left
pl-2

# Add margin on right
pr-2

# Add margin on top
pt-2

# Add margin on bottom
pb-2
```

### Space
Add space between div inside a flex box

```
# Add spacing on x axis
space-x-2

<div class="flex mt-2 space-x-2">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
```

## Topography
It deals with fonts(size, weight), spacing, decoration

```
# Default font
font-sans
font-serif
font-mono

# Font size
text-xs
text-sm
text-base (Default)
text-lg
text-xl
text-2xl
text-3xl

# Font weight
font-light
font-normal (Default)
font-medium
font-semibold
font-bold

# Letter spacing
tracking-tight
tracking-normal
tracking-wide

# Text Alignment
text-left
text-center
text-right

# Decoration
underline decoration-4 (underline with width)
underline underline-offset-8 (underline with offset)
underline decoration-blue-400 (underline with color)
underline decoration-double (double line)
underline decoration-dotted
underline decoration-dashed
underline decoration-wavy   

# Text Transformation
normal-case
uppercase
lowercase
capitalize (1st letter of every word in caps)

```

## Sizing (width and height)

We cannot set any arbitrary value. Pick the value from the suggestion

```
# Add width to the div element
w-12
w-1/4

# 100% screen view port width
w-screen

# 100% screen width
w-full

# Arbitrary width
w-[300px]

# Add height to the div element
h-12

# Website which takes entire view port
h-screen

```

## Layout (positioning)

- layout is applied on the container e.g. div

#### Absolute vs Relative positioning
```
# Relative positioning
relative

# Absolute positioning
absolute bottom-0 right-0

# available option for absolute positioning
left-0 bottom-0
left-0 top-0
right-0 bottom-0
right-0 top-0

# span across (inset) top edge horizontally. (height h-16 is used for testing)
absolute top-0 inset-x-0 h-16

# span across (inset) left edge vertically
absolute left-0 inset-y-0 w-16

```
#### Display Classes
- They are usually used with span.
- span can be inside a div

Available options
- inline: span and div text in same line
- inline-block: span and div text in same line
- block: span and div text in different line
- hidden: span text hidden

```
<div>
sometext<span class="inline">This is inline text</span>continue text
sometext<span class="block">This is inline text</span>new line text
<div>
```

#### Z-Index
- describes how far something is from the screen / you
- higher the index, closer it is to the screen / you
- higher z index will hide the element which has lower z-index

```
# blue will be at the top and hide green
<div class="bg-blue-400 w-24 left-20 absolute z-40">1</div>
<div class="bg-green-500 w-24 left-40 absolute z-20">2</div>
<div class="bg-red-600 w-24 left-60 absolute z-30">3</div>
```

#### Float
- used with image
- if we don't use float, image and following text will be in 'different line'.
- With float, image and text will be together in same line

```
# The text will be on left of the image with proper formatting (m-4)
<div class="w-1/2">
        <img class="h-48 w-48 float-left m-4" src="" alt="">
        <p>sometext</p>
    </div>

# Have text on the left of the image
float-left

```

## Background

```
# load background image in div
<div class="h-64 w-72" style="background-image: url('tailwind-sandbox/assets/img/img1.jpg');"></div>

# have arbitrary width of the image without repeating
class="h-64 w-[1000px] bg-no-repeat"

# Background size
bg-cover (commonly used)
bg-auto
bg-contain

# Background position
bg-center

```

#### Gradients
Add a gradient color. we have to provide following info:
- location of gradient (right, left)
- color range: from and to color

```
# color changes from red (left) to blue (right) 
<div class="h-24 bg-gradient-to-r from-red-500 to-blue-500">
```

#### Shadows

```
# Example shadow
<div class="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-blue-500">

# Shadow
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl

# Shadow on the inner side
shadow-xl shadow-inner

# Shadow with color
shadow-blue-500

# Shadow with opacity
shadow-red-500/50

```

#### Mix Blend
- not used often
- Blend elements with each other
- if we have 2 colors of div intersecting each other, we will get the mix of two color
```
# Mix and blend
mix-blend-multiply
<div class="flex justify-center -space-x-24">
        <div class="bg-blue-400 mix-blend-multiply">
            Div1
        </div>
        <div class="bg-pink-400 mix-blend-multiply">
            Div2
        </div>
    </div>
```

## Borders
- used on div
- create a light rectangle

```
# Create simple rectangle around div
border

# Create thicker border
border-2

# Colored border
border border-red-500

# Border on just vertical side (2 lines)
border-x-4

# Border on just 1 side
border-l-4
border-r-4
border-t-4
border-b-4

# Rounded border
border-4 rounded
border-4 rounded-lg
border-4 rounded-xl
border-4 rounded-2xl

# Rounded on one side (top, bottom)
border-4 rounded-t-2xl 

```

#### Outline
- applied on buttons

```
# border around a button
outline
# border around the button with color and width
outline outline-4 outline-red-500
```

## Filters
- It helps us to avoid using photo editing softwares like photoshop
- we can use filter to change blur, brightness, contrast, saturation etc of the image, text
- mostly used with images

```
# Blur
blur-sm
blur

# Brighness
brightness-0 (darkest)
brightness-50
brightness-75
brightness-90
brightness-95
brightness-100 (default)
brightness-105
brightness-110
brightness-125
brightness-150
brightness-1200 (brightest)

# Contrast
contrast-0 (cannot see image)
contrast-50

# Grayscale (black and white image)
grayscale

# Invert (kind of thermal image)
invert

# Sepia (kind of grayscale with contrast)
sepia

# Hue Rotate (provide different values)
hue-rotate-15

```

## Interactivity
- if we have a button and want different color on some activity like hover
- change the cursor
- progress bar
- loading icon

```
# Hover (can be applied on link, button)
hover:bg-orange-500 (change background color to orange on hover)
hover:text-white (change text color on hover)

# Focus (when clicked or selected, it is in focus. If clicked outside, out of focus)
focus:bg-green-500
focus:text-white

# Active state (when left button is pressed down it is active, if unpressed becomes inactive)
active:bg-yellow-500
active:text-white

```

#### Group styling
- Above styling will be applied on the group of elements
- if we have a button inside a div, hovering over the div will change button color
- For group hover, parent element should have class 'group' and child should have class 'group-hover' with the required effect

```
# Create a card with anchor tag
 <a href="" class="group block max-w-lg mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
        <h3 class="group-hover:text-white">This is a card  heading h3 inside anchor tag</h3>
        <p>This is a card text in paragraph inside anchor tag</p>
    </a>
```

#### Pseudo classes
- applied on the element of the list
- all the elements are provided with this class. Based on the element position, class will take effect
```
# Apply style only on the first element in the list
first:bg-red-200

# Apply style on the even element of the list
even:bg-green-200

# Apply style on the odd element of the list
odd:bg-orange-200

```

#### Appearance
- some of the html element will look different on different browsers or OS
- using appearance = none, we can strip off browser specific stylings
```
# Remove arrow from the select box to make them look consistent
<select class="appearance-none">
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
```

#### Cursors
- Cursor shape will change on hovering over the element (paragraph, button)

```
# Usage
<p class="cursor-wait">Paragraph with wait pointer</p>

# All cursors options
cursor-auto	          cursor: auto;
cursor-default	      cursor: default;
cursor-pointer	      cursor: pointer;
cursor-wait	          cursor: wait;
cursor-text	          cursor: text;
cursor-move	          cursor: move;
cursor-help	          cursor: help;
cursor-not-allowed	  cursor: not-allowed;
cursor-none	          cursor: none;
cursor-context-menu	  cursor: context-menu;
cursor-progress	      cursor: progress;
cursor-cell	          cursor: cell;
cursor-crosshair	    cursor: crosshair;
cursor-vertical-text	cursor: vertical-text;
cursor-alias	        cursor: alias;
cursor-copy	          cursor: copy;
cursor-no-drop	      cursor: no-drop;
cursor-grab	          cursor: grab;
cursor-grabbing	      cursor: grabbing;
cursor-all-scroll	    cursor: all-scroll;
cursor-col-resize	    cursor: col-resize;
cursor-row-resize	    cursor: row-resize;
cursor-n-resize	      cursor: n-resize;
cursor-e-resize	      cursor: e-resize;
cursor-s-resize	      cursor: s-resize;
cursor-w-resize	      cursor: w-resize;
cursor-ne-resize	    cursor: ne-resize;
cursor-nw-resize	    cursor: nw-resize;
cursor-se-resize	    cursor: se-resize;
cursor-sw-resize	    cursor: sw-resize;
cursor-ew-resize	    cursor: ew-resize;
cursor-ns-resize	    cursor: ns-resize;
cursor-nesw-resize	  cursor: nesw-resize;
cursor-nwse-resize	  cursor: nwse-resize;
cursor-zoom-in	      cursor: zoom-in;
cursor-zoom-out	      cursor: zoom-out;
```

#### User Select
- provide options for selecting text
- applied on div, para

```
# Available options
select-none
select-text
select-all

# Usage
<div class="select-none">This text in div cannot be selected</div>
<p class="select-none">This text in paragraph can be selected</p>

```

#### Add smooth scrolling
- e.g. if we have a link with #fragment URL and we want to scroll to that location
- added to the html element: `<html lang="en" class="scroll-smooth">`

```
# Usage
<html lang="en" class="scroll-smooth">
<a href="#item" class="block my-6">Go To Item (Smooth Scroll demo)</a>
<div id="item">This is the location we want to reach after scrolling.</div>
```

## Breakpoint Classes and Media Queries
- used for creating responsive websites
- we have different stylings for different screens
- e.g 1. if we have columns, we will stack them into single columns for mobile screen
- e.g 2. text will be smaller for smaller screens
- we can easily create stylings for different screen size using tailwind
- start with mobile first
- Trick: as screen size increases, increase the size of the element

```


**Default breakpoint classes**
```
sm	640px	  @media (min-width: 640px) { ... }
md	768px	  @media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
```

- default: less than 640
- small screen size (sm): 640 - 767 px
- medium screen size (md): 768 - 1023 px
- large screen size (lg): 1024 - 1279 px
- extra large screen size (xl): 1280 - 1535 px
- extra extra large screen size (2xl): 1536 - infinite px

# Usage
# Start with mobile first
<body class="bg-white sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-white">

# on small screen (default), show text as xl, on medium screen, show it bigger
<h1 class="text-white text-xl md:text-3xl">Sample Text<h1>
```

**Javascript to get the exact width of the browser**
```javascript
<h1></h1>
<script>
  function showBrowserWidth(){
      const width = window.innerWidth;

      document.querySelector('h1').innerText = `Width: ${width}`;

  }

  // Invoke the function
  window.onload = showBrowserWidth
  window.onresize = showBrowserWidth
</script>
```


