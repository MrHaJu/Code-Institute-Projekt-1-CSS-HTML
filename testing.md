# Code Institute Projekt 1 HTML and CSS - TESTING


## Contents

* [AUTOMATED TESTING](#automated-testing)
    * [W3C Validator](#w3c-validator)
    * [Lighthouse](#lighthouse)
    * [Wave](#wave)

* [MANUAL TESTING](#manual-testing)
    * [Testing User Stories](#testing-user-stories)
    * [Full Testing](#full-testing)

* [BUGS](#bugs)
    * [Known Bugs](#known-bugs)
    * [Solved Bugs](#solved-bugs)

---

## AUTOMATED TESTING

The Automated Testing includes all the testing that is carried out by a program, like W3C HTML validation.



Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.




### W3C Validator

The most popular HTML validator is [W3C](https://validator.w3.org/). There are two ways to validate the HTML for your first milestone - you can copy the live link for your site page and paste into the validate by URI field, or you can copy all the code for your page and paste this into the validate by direct input field.

#### **URI Input**

If you validate with your sites URL, you can run the validation and then copy the link from the address bar and insert the link here as your proof of validation.


#### **Direct Input**

If you validate with the code, you will need to screenshot the validation results and then link the image here.


* [Index Page HTML](assets/images/testing/w3c/w3cindex.png)
* [Projects Page HTML](assets/images/testing/w3c/w3cprojects.png)
* [CV Page HTML](assets/images/testing/w3c/w3c-cv.png)
* [Contact Page HTML](assets/images/testing/w3c/w3ccontact.png)

#### **CSS Validation**

CSS Validation can only be done by copying and pasting the CSS file contents into the direct input. Make sure that the checkbox for CSS is selected.

* [style.css CSS](assets/images/testing/w3c/w3ccss.png)

---


The following issues were raised during my mid project meeting with my mentor:

* There was an issue on smaller devices where . This issue is documented under issue 2 in solved bugs.

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to allow me to test the performance, accessibility, best practices and SEO of the website.



lighthouse testing :
* #### Desktop:

    * [Index Page - Test ](assets/images/testing/lighthouse/lighthouse-index-pc.png)
    * [Projects Page - Test ](assets/images/testing/lighthouse/lighthouse-projects-pc.png)
    * [Cv Page - Test ](assets/images/testing/lighthouse/lighthouse-cv-pc.png)
    * [Contact Page - Test ](assets/images/testing/lighthouse/lighthouse-contact-pc.png)

* #### Mobile:

    * [Index Page - Test ](assets/images/testing/lighthouse/lighthouse-index-mobile.png)
    * [Projects Page - Test ](assets/images/testing/lighthouse/lighthouse-projects-mobile.png)
    * [Cv Page - Test ](assets/images/testing/lighthouse/lighthouse-cv-mobile.png)
    * [Contact Page - Test ](assets/images/testing/lighthouse/lighthouse-contact-mobile.png)


### WAVE

* [Wave Index](assets/images/testing/wave/wave-index.png)
* [Wave projects](assets/images/testing/wave/wave-projects.png)
* [Wave cv](assets/images/testing/wave/wave-cv.png)
* [Wave contact](assets/images/testing/wave/wave-contact.png)

- - -

## MANUAL TESTING

### Solved Bugs

1. On the Index Page, the Image and Figcaption disappeared behind the navbar. With Bootstrap order-md-1 and 2, this problem was solved

### Known Bugs
1. There seems to be a bug when resizing from desktop to mobile. The text partially disappears behind the navbar
2.  The navbar burger icon pushing over the right screenside and disappears on smaller screens


- - -

### Full Testing

Full testing was performed on the following devices, and additional testing for other devices was carried out using developer tools:

iMac 2021, MacBook Pro 14 inch 2021, iPhone 13 Pro, Samsung S20, 25 inch monitor, windows laptop

Each device tested the site using the following browsers:

Google Chrome on Mac and Windows, Safari

`Index Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **NAVBAR** |  |  |  |  |
|  |  |  |  |  |
| Navbar Home link | When clicked you are redirected to the home page | Clicked link | Redirected to home page | Pass|
| Navbar projects link | When clicked you are redirected to the Projects Page | Clicked link | Redirected to Projects Page | Pass |
| Navbar projects link - hover | When hovered over the link will be italic, bold and colorized | Hovered over link |  link is italic, bold and colorized | Pass |
| Navbar cv link | When clicked you are redirected to the CV page | Clicked link | Redirected to CV page | Pass |
| Navbar cv link - hover | When hovered over the link will be italic, bold and colorized | Hovered over link |  link is italic, bold and colorized | Pass |
| Navbar contact link | When clicked you are redirected to the Contact  page | Clicked link | Redirected to contact page | Pass |
| Navbar contact link - hover | When hovered over the link will be italic, bold and colorized | Hovered over link |  link is italic, bold and colorized | Pass |
|  |  |  |  |  |
| **Home Page** |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
| **projects Page** |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
| **CV Page** |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
| **CONTACT Page** |  |  |  |  |
|  |  |  |  |  |
| Submit Form Button - No information entered by user | The form will direct the user to fill in the name field | Clicked submit button with no information filled in | Asked to fill in name field | Pass |
| Submit Form Button - Some information entered | User will be directed to fill in the fields they have left blank | Filled in only part of the form | Asked to fill in the missing fields | Pass |
| Submit form button - all fields filled out | Modal pop up with message confirming message successfully sent | Filled in all forms and pressed submit | Modal popped up with success message | Pass |
| Submit button - hover | when hovered over the button changes colour | Hovered over button | Button changed colour | Pass |
| Name input - focus | When input field is clicked on the border of the input field will change colour | Clicked on input field | Border changed colour | Pass |
| Email input - focus | When input field is clicked on the border of the input field will change colour | Clicked on input field | Border changed colour | Pass |
| Text Area - focus |When text area is clicked on the border of the text area will change colour | Clicked on text area | Border changed colour | Pass |
|  |  |  |  |  |
| **FOOTER** |  |  |  |  |
|  |  |  |  |  |
| Youtube  Icon | When clicked you will be redirected to MrHaJu's Youtube page in a new tab | Clicked icon | Profile opened in a new tab | Pass |
| Instagram Icon | When clicked you will be redirected to MrHaJu's Instagram page in a new tab | Clicked icon | Profile opened in a new tab | Pass |
| TikTok Icon | When clicked you will be redirected to MrHaJu's Tiktok page in a new tab | Clicked icon | Profile opened in a new tab | Pass |

---

Back to [README.md](readme.md)