# Frontend Mentor - Hotel booking confirmation page solution

This is a solution to the [Hotel booking confirmation page challenge on Frontend Mentor]

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)

## Overview
It was a new experience for me to build this page.I used css flex box and grid for layout. And transition and transform properties for animation.I also used jscript for menu button function.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu on smaller screens (optional JavaScript)
- Copy the Wi-Fi password to their clipboard using the copy button (optional JavaScript)

### Screenshot

assets\images\desktop view.png

### Links

- Solution URL: (https://github.com/AmmaraSirkhot/frontend-mentor-challenge-Hotel-booking-confirmation-page)
- Live Site URL: (https://ammarasirkhot.github.io/frontend-mentor-challenge-Hotel-booking-confirmation-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- desktop-first workflow

### What I learned

- Some new code I learned
```css
/* Container positioning wrapper if needed */
    .nav-container {
        position: relative;
        display: inline-block;
    }
    /* Base styles for the dropdown menu */
    .dropdown-menu {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        /* Positions directly below the toggle button */
        right: 0;
        margin-top: 8px;
        width: 320px;
        background-color: hsl(41, 100%, 93%);
        padding: 24px 16px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 1000;

        /* Hidden state by default */
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
    }
    .dropdown-menu>ul {
        list-style: none;
    }
    /* Active state triggered when the button is clicked */
    .dropdown-menu.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
```

### Continued development

i want to focus on transition and transform for smooth animation and need to advance my jscript/react abilities.

### AI Collaboration

- Tools I you use - gemini.
- The jscript i write, i wanted to understand it more breifly. so i used gemini for explaination.
- The explaination solved my all confusions and i easily understood the process.
