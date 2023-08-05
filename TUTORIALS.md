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

## Aligning Items
There are multiple ways of aligning items on the screen:
- flexbox
- grid
- columns (most basic)

### Columns
- Not used very often. Use flexbox or grid instead
- used inside a div which acts as the wrapper
- Number after column indicates how the screen is divided horizontally
- irrespective of the screen size, we will have 'N' number of columns
- spacing between the columns are adjusted using 'gap'
- To make column responsive, we can use class like columns-3xs/2xs/xs/sm/md/lg/xl etc
- when using columns-xs, images will be stacked on each other. On larger screen it will be in 1 line
- For a column, we can change the aspect ratio. Possible options for aspect ration: aspect-video, aspect-square, 

```
# Divide screen in 2 columns
<div class="columns-2">
    <img class="w-full" src="tailwind-sandbox/assets/img/img1.jpg" alt="">
    <img class="w-full" src="tailwind-sandbox/assets/img/img2.jpg" alt="">
</div>

# Available column option
columns-1	      columns: 1;
columns-2	      columns: 2;
columns-3	      columns: 3;
columns-4	      columns: 4;
columns-5	      columns: 5;
columns-6	      columns: 6;
columns-7	      columns: 7;
columns-8	      columns: 8;
columns-9	      columns: 9;
columns-10	    columns: 10;
columns-11	    columns: 11;
columns-12	    columns: 12;
columns-auto	  columns: auto;

# Adjust the spacing between column
gap-0 (no space between 2 columns)

# Responsive columns
columns-3xs	    columns: 16rem; /* 256px */
columns-2xs	    columns: 18rem; /* 288px */
columns-xs	    columns: 20rem; /* 320px */
columns-sm	    columns: 24rem; /* 384px */
columns-md	    columns: 28rem; /* 448px */
columns-lg	    columns: 32rem; /* 512px */
columns-xl	    columns: 36rem; /* 576px */
columns-2xl	    columns: 42rem; /* 672px */
columns-3xl	    columns: 48rem; /* 768px */
columns-4xl	    columns: 56rem; /* 896px */
columns-5xl	    columns: 64rem; /* 1024px */
columns-6xl	    columns: 72rem; /* 1152px */
columns-7xl	    columns: 80rem; /* 1280px */

```

### Flexbox
- USE THIS
- Used with div
- By default nested div will be placed horizontally one after the another
- On using 'flex' on the parent div, nested div will be placed in a row
- we can make flex to the default div behavior (column) by adding 'flex-col'
- Workflow: begin with flex-col (for small screen) then make it in  'md:flex-row' for larger screen
- By default all the child element has 'items-stretch' property which 'fills' the 'vertical' space (if parent is row) OR 'horizontal' space (if parent is col) on the parent div. 
- Justify content is also applied on the parent div which is used to align the child div. It moves the child container in different direction.
- Use 'items-center' with 'justify-center' to have proper fill and positioning from all directions
- wrap the elements so that we don't get scroll bar: 'flex-wrap'
- By default, flex property on "child items" is set to 'flex-initial'. This allows the flex container to 'shrink but not grow'.


```
# All nested div in a row
<div class="flex">
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
</div>

# All nested div in a column
<div class="flex flex-col">
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
</div>

# Commonly used flex settings
flex flex-col md:flex-row

# Alignment of child elements. The behavior is set on the parent flex. Determins the 'Fill' of the child container.
## If flex row is used
items-stretch (default)
items-start (top left side)
items-end (end left side)
items-center (center on Y)

## If flex column is used
items-stretch (default)
items-start (left side)
items-end (right side)
items-center (center on X axis)

# Justify content. 
justify-center (Place all the child div in the center of parent div)
justify-end (place it at the end)
justify-start (place it in beginning)
justify-around (add the remaining space from parent div around each child element. Spaces will be at the edge of the the screen)
justify-between	(If we want to fill the remaning space and don't need space at the edge of the screen, use this)
justify-evenly ()


# Wrapping
flex-wrap

# Change the order of the child elements. It is applied on child items
# We need to provide order for all the elemetns
<div class="flex flex-col gap-4 h-72 items-center justify-between w-full bg-gray-100">
  <div class="order-3 p-10 border border-blue-300 bg-blue-100">01</div>
  <div class="order-1 p-10 border border-blue-300 bg-blue-100">02</div>
  <div class="order-4 p-10 border border-blue-300 bg-blue-100">03</div>
  <div class="order-2 p-10 border border-blue-300 bg-blue-100">04</div>
</div>

# Flex item properties
flex-initial (default: Allow item to shrink but not grow, taking into account its initial size)
flex-none (Prevent item from growing or shrinking)
flex-auto (Allow item to grow and shrink, taking into account its initial size)
flex-1 (Allow item to grow and shrink as needed, ignoring its initial size)

```

### Grid
- puts the element in column by default (unlike flexbox)
- It puts all the nested elements in the columns we specify to create a "table like structure"
- It is applied on parent div
- We can make the column uneven using 'col-span-2' on items

```
# Put child items in columns. It creates 2x2 table
<div class="grid grid-cols-2">
    <div class="p-10 border border-blue-600 bg-blue-100">Grid 1</div>
    <div class="p-10 border border-blue-600 bg-blue-100">Grid 2</div>
    <div class="p-10 border border-blue-600 bg-blue-100">Grid 3</div>
    <div class="p-10 border border-blue-600 bg-blue-100">Grid 4</div>
</div>

# We can use gap to insert space
grid grid-cols-2 gap-2

# Span the column (add this property on column items)
col-span-2

# Span the rows
row-span-2

# Responsive Grid layout
# use default parent: grid-cols-1 and for child add col for medium screen md:col-span-2. by default it wil lbe stacked
<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div class="md:col-span-2  p-10 border border-blue-600 bg-blue-100">Grid 1</div>
    <div class="p-10 border border-blue-600 bg-blue-100">Grid 2</div>
    <div class="p-10 border border-blue-600 bg-blue-100">Grid 3</div>
    <div class="p-10 border border-blue-600 bg-blue-100">Grid 4</div>
</div>

```

## Transition and Transformation
There are different properties of an element which we can transition:
- color (background color, border color, text)
- decoration (fill, stroke, opacity, shadow)
- timing
- transformation (scale - maker larger/smaller, rotate, translate - move on x and y axis, skew)

All the transformation can be applied on the event like 'hover'.

```
# Add transition (hover effect) with some delay (default: 150ms, max: 1000ms/1s)
hover:bg-blue-700 transition-color duration-1000

# Multiple transitions (change color and opacity) with delay 
hover:bg-blue-700 hover:opacity-20 transition duration-1000

# Rotate on hover with 1 sec transition
hover:rotate-12 transition-transform duration-1000

# Rotate, scale and skew on hover with 1 sec transition
hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-1000

```

## Animations and Key Frames
- Animation can be performed on svg files

```
# Animations
animate-spin
animate-pulse
animate-ping
animate-bounce

```

## Configuration and Customization
- we will use javascript to configure default tailwind behavior
- The scripts can go in the same file or in prod it will be inside tailwind.config.js (when using CLI)

Tailwind properties which we can modify/extend
- screens
- fontFamily
- colors
- spacing
- darkMode

```
# Replace the existing properties
<script>
// Change default screen size
  tailwind.config = {
            theme: {
                screens: {
                    sm: '550px',
                    md: '800px',
                    lg: '1200px',
                    xl: '1440px'
                }
            }
        }
<script>

# Extend the existing property, we will use 'extend' before screen property.

```

## Dark Mode
- If our OS is in dark mode, we can use tailwind css class to display elements in dark mode
- source: https://tailwindcomponents.com/component/toggle-switch
