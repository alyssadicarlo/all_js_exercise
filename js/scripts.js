'use strict';

document.addEventListener('DOMContentLoaded', function () {

    // header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const headerTitle = document.createElement('h1');
    const navItems = document.createElement('ul');
    const home = document.createElement('li');
    const categories = document.createElement('li');

    headerTitle.innerText = "HighOnCoding";

    home.innerText = "Home";
    categories.innerText = "Categories";

    navItems.append(home);
    navItems.append(categories);

    nav.append(navItems);

    header.append(headerTitle);
    header.append(nav);

    home.classList.add('bold');

    // gray section

    const graySection = document.createElement('section');
    const graySubtitle = document.createElement('h2');
    const grayText = document.createElement('p');

    graySubtitle.innerText = "Curse of the Current Reviews";
    grayText.innerText = "When you want to buy an application from the Apple iTunes store, you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.";

    graySection.append(graySubtitle);
    graySection.append(grayText);

    graySection.classList.add('gray');


    // first white section

    const firstWhiteSection = document.createElement('section');
    const firstWhiteSubtitle = document.createElement('h3');
    const firstWhiteText = document.createElement('p');
    const firstOrangeBar = document.createElement('div');
    const firstComments = document.createElement('span');
    const firstLikes = document.createElement('span');

    firstWhiteSubtitle.innerText = "Hello WatchKit";
    firstWhiteText.innerText = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article, we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
    firstComments.innerText = "12 comments";
    firstLikes.innerText = "124 Likes";

    firstOrangeBar.append(firstComments);
    firstOrangeBar.append(firstLikes);

    firstWhiteSection.append(firstWhiteSubtitle);
    firstWhiteSection.append(firstWhiteText);
    firstWhiteSection.append(firstOrangeBar);

    firstWhiteSubtitle.classList.add('blue-text');
    firstOrangeBar.classList.add('orange-bar');

    // second white section

    const secondWhiteSection = document.createElement('section');
    const secondWhiteSubtitle = document.createElement('h3');
    const secondWhiteText = document.createElement('p');
    const secondOrangeBar = document.createElement('div');
    const secondComments = document.createElement('span');
    const secondLikes = document.createElement('span');

    secondWhiteSubtitle.innerText = "Introduction to Swift";
    secondWhiteText.innerText = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.";
    secondComments.innerText = "15 comments";
    secondLikes.innerText = "45 Likes";

    secondOrangeBar.append(secondComments);
    secondOrangeBar.append(secondLikes);

    secondWhiteSection.append(secondWhiteSubtitle);
    secondWhiteSection.append(secondWhiteText);
    secondWhiteSection.append(secondOrangeBar);

    secondWhiteSubtitle.classList.add('blue-text');
    secondOrangeBar.classList.add('orange-bar');

    // append all to container

    const container = document.querySelector('.container');
    container.append(header);
    container.append(graySection);
    container.append(firstWhiteSection);
    container.append(secondWhiteSection);
});