NoteDownMyChoice
================================================================================
A simple HTML tool for choice question self-evaluation. 
![The example picture.](https://raw.githubusercontent.com/E-train-Liu/NoteDownMyChoice/master/example.PNG)

Introduction
--------------------------------------------------------------------------------
At the summer of 2018, I started to do some TOFEL&reg; reading practice on my computer. However, I found that it is difficult to simulate the real online testing environment unless the article have been included in some websites or APPs offering relative practicing service. Thus, I made a quite simple HTML page as a tool simulating the online exam for myself. At the start of autumn semester, I decided to publish it after some functions were added.

Require
---------------------------------------------------------------------------------
What you need is just a browser. However, it is better to be a mordern browser at least supporting HTML4. Better visual effect will be gained if the browser supporting CSS3.

**Warning:** 
+ DO NOT run this page in any version IE browser, else an error will occur.
+ This page is only designed for wide screen devices (Desktops, laptops and tablets for instances.), layout faults are highly possible when the page is used on mobile.

Style
----------------------------------------------------------------------------------
To simulate the TOFEL&reg; online test, the style of page is designed to be similar to that of ETS&reg; system on purpose.

License
----------------------------------------------------------------------------------
Published under MIT licence. Using of the file is gratis. You can also modify the source code under the MIT license.

Usage
-----------------------------------------------------------------------------------
+ Download all files in this directory, and make sure they are also in a same directory of your sevices.
+ Open `NoteDownMyChoice.html` by an appropiate browser.
+ Click the button `10:00 (click to modify)` to set your own testing time. Or it will use the default time 10 minutes.
+ Click `start` when you are ready to start.
+ Now you can see the time is counting down. You can pause it by click `pause`. However, the question cannot be answered in the "pause" mode. After running out the time, the timer will count the overdue time instead of stop the test, and the color of displayed time will turn <span style="color:rgb(255,125,125)">red</span>.
+ If you want more option, please select the number of options in the `Number of option: ` menu on left. Aimed at practicing TOFEL, the maximum number is 8. You can make it larger by modify the source code by yourself.
+ The switcher on right decide that if you can select more than one options. Note that when there is more than 4 options, the switch will open automaticly.
+ You can click `back` and `next` to jump to last and next question. Don not worry if you have reached the last question, a new question will be appended if you click the `next` button.
+ When you finish all the queston, you can click `finish`, all of your answer will be listed in a menu then. **Please note that** you CANNOT change your answer after finishing.
+ **The page WILL NOT save your answer.** You are recommended to copy and save the list manually.
