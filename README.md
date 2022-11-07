 - - - - - - site link - - - - - - -
https://bernardoklingelfus.netlify.app/

- - - - - APPROACH TAKEN - - - - - - 
1. Start blocking out the content position in the page with basic HTML and CSS flexboxes;
2. Once settled on the main positions and layout, added the functions planned with jQuery;
3. After functions working, sculpt the content of the different sections of the site;
4. Work on the styles;
5. Put in the content;
6. Adjust spaces for text and different screen sizes.

- - - - - - TECHs USED - - - - - - -
HTML
    Mainly used HTML to get the blocks that I needed to position:
        - Some of the boxes play a crucial role for the functions;
    Only at the end actually putted the content in there.
JS / jQUERY
    Used it for dark mode, navigating buttons, carousel and modal:
        - For navigating used two functions that rearranged the side buttons, changed the main display and reset the scroll position; 
        - For the dark mode, created 3 variables for each color used in CSS (one for the actual use, 2 other for light/dark mode), function rearranged the actual color to the mode; 
        - Carousel and Navigating essentially work the same, in CSS everything is in display none and the first of type is in display flex/block. So the function works by putting at the top the one you want to display;
        - The modal is just a simple modal the shows when you click the project picture (non existent yet) and closes once you click anywhere.
CSS
    As mentioned, I used a lot of flexboxes but here are some note worth things:
        - Had to rebuild the nest of flexboxes a few times because of conflicts, so I realize it is better to plan from outside to inside but better to code from inside to outside;
        - The color system (not sure if needed but it made my life easier for tracking the colors);
        - Animations are based either on the transition property or on the @keyframes tool;
        - Did media query for mobile and some adjustments for when the site gets too big.

 - - - - - ISSUEs TO RESOLVE - - - - -
Color system seems a little dumb a looks too complex, but maybe it just has too many colors...
CSS file looks very messy :(
Improve the actual content (texts) of the site;
Adjust a few text boxes that sometimes I do not like the position but couldn't decide on any better.