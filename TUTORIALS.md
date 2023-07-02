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
- flex: A container which helps to create responsive design
- items-center: align flex box in center
- p-6: padding all around
- max-w-sm: maximum width of the flexbox as small
- mx-auto: move the container in middle. Create a margin on 'x' axis
- mt-12: add margin on the top. This will move th container on y axis
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