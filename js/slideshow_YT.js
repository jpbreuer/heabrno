var videoIDs = ["imvhQ8mB3_Y", "QWOd51t7OIw", "7dWASDwudpU", "hXOuPh9SFVw", "gaosR7g11zk", "eRAh-dfNS94", "U3dTsjAIpGg", "0UU9nFQIUwY", "uoB_RA3tUYQ", "Zi0h6ghaork", "fDxbZiJajMQ", "QKoMl0ELNGE", "xS37YP1_BmA", "ypxgOBrI47o", "XTmTBFJks-w"];
var videoTitles = ["Podcast: The Moon", "Podcast: Radio galaxies", "Podcast: Cosmic rays", "Podcast: Life of stars", "Podcast: JWST", "Podcast: Researcher's night", "Podcast: Rožnava special", "Podcast: CubeSats", "Podcast: Event horizon", "Podcast: Galaxy center", "Podcast: Exoplanets", "Podcast: Episode 4", "Podcast: Episode 3", "Podcast: Episode 2", "Podcast: Episode 1"];
var currentVideoIndex = 0;

function loadVideo(index) {
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '<iframe width="1000" height="562.5" src="https://www.youtube.com/embed/' + videoIDs[index] + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

// Function to generate the buttons for each video
function generateButtons() {
    var buttonsContainer = document.getElementById('videoButtons');
    for (var i = 0; i < videoIDs.length; i++) {
        var button = document.createElement('button');
        button.onclick = (function(index) {
            return function() {
                var buttons = document.getElementsByTagName('button');
                for (var j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove('active');
                }
                this.classList.add('active');
                currentVideoIndex = index;
                var prevButton = document.getElementById('prevNextButtons').getElementsByTagName('button')[0];
                var nextButton = document.getElementById('prevNextButtons').getElementsByTagName('button')[1];
                if (index == 0) {
                    prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[videoTitles.length-1];
                    nextButton.innerHTML = videoTitles[index+1] + '<span style="float:right; margin-left: 0px; margin-right: 2px;margin-top:-11px;font-size:160%">&#x203A;</span>';
                } else if (index == videoTitles.length-1) {
                    prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[index-1];
                    nextButton.innerHTML = videoTitles[0] + '<span style="float:right; margin-left: 0px;margin-top:-11px; margin-right: 2px;font-size:160%">&#x203A;</span>';
                } else {
                    prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[index-1];
                    nextButton.innerHTML = videoTitles[index+1] + '<span style="float:right; margin-left: 0px;margin-top:-11px; margin-right: 2px;font-size:160%">&#x203A;</span>';
                }
                loadVideo(index);
            }
        })(i);
        buttonsContainer.appendChild(button);
    }
    buttonsContainer.getElementsByTagName('button')[0].classList.add('active');
}

function generatePrevNextButtons() {
    var prevNextButtonsContainer = document.getElementById('prevNextButtons');
    var prevButton = document.createElement('button');
    prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[videoTitles.length-1];
    prevButton.style.paddingTop = '8px';
    prevButton.style.paddingBottom = '37px';
    prevButton.style.borderRadius = '1px';
    // prevButton.style.border = '1px solid black';
    prevButton.style.backgroundColor = 'lightgrey';
    prevButton.style.position = 'relative';
    prevButton.style.width = '275px';
    prevButton.style.right = '16%';
    prevButton.style.transform = 'translateY(-60%)';
    prevButton.onclick = function() {
        if (currentVideoIndex == 1) {
            currentVideoIndex--;
            var buttons = document.getElementsByTagName('button');
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active');
            }
            prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[videoTitles.length-1];
            nextButton.innerHTML = videoTitles[currentVideoIndex+1] + '<span style="float:right; margin-left: 0px; margin-right: 2px;margin-top:-11px;font-size:160%">&#x203A;</span>';
            buttons[currentVideoIndex+1].classList.add('active');
            loadVideo(currentVideoIndex);
        } else if (currentVideoIndex > 0) {
            currentVideoIndex--;
            var buttons = document.getElementsByTagName('button');
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active');
            }
            prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;font-size:160%">&#x2039;</span>' + videoTitles[currentVideoIndex-1];
            nextButton.innerHTML = videoTitles[currentVideoIndex+1] + '<span style="float:right; margin-left: 0px; margin-right;margin-top:-11px: 2px;font-size:160%">&#x203A;</span>';
            buttons[currentVideoIndex+1].classList.add('active');
            loadVideo(currentVideoIndex);
        } else {
            currentVideoIndex = videoIDs.length - 1;
            var buttons = document.getElementsByTagName('button');
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active');
            }
            prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[currentVideoIndex-1];
            nextButton.innerHTML = videoTitles[0] + '<span style="float:right; margin-left: 0px; margin-right: 2px;margin-top:-11px;font-size:160%">&#x203A;</span>';
            buttons[currentVideoIndex+1].classList.add('active');
            loadVideo(currentVideoIndex);
        }
    };
    prevNextButtonsContainer.appendChild(prevButton);

    var nextButton = document.createElement('button');
    nextButton.innerHTML = videoTitles[currentVideoIndex+1] + '<span style="float:right; margin-left: 0px; margin-right: 2px;margin-top:-11px;font-size:160%">&#x203A;</span>';
    nextButton.style.paddingTop = '8px';
    nextButton.style.paddingBottom = '37px';
    nextButton.style.borderRadius = '1px';
    // nextButton.style.border = '1px solid black';
    nextButton.style.backgroundColor = 'lightgrey';
    nextButton.style.position = 'relative';
    nextButton.style.width = '275px';
    nextButton.style.left = '16%';
    nextButton.style.transform = 'translateY(-60%)';
    nextButton.onclick = function() {
        if (currentVideoIndex == videoIDs.length - 2) {
            currentVideoIndex++;
            var buttons = document.getElementsByTagName('button');
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active');
            }
            prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[currentVideoIndex-1];
            nextButton.innerHTML = videoTitles[0] + '<span style="float:right; margin-left: 0px; margin-right: 2px;margin-top:-11px;font-size:160%">&#x203A;</span>';
            buttons[currentVideoIndex+1].classList.add('active');
            loadVideo(currentVideoIndex);
        } else if (currentVideoIndex < videoIDs.length - 1) {
            currentVideoIndex++;
            var buttons = document.getElementsByTagName('button');
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active');
            }
            prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[currentVideoIndex-1];
            nextButton.innerHTML = videoTitles[currentVideoIndex+1] + '<span style="float:right; margin-left: 0px;margin-top:-11px; margin-right: 2px;font-size:160%">&#x203A;</span>';
            buttons[currentVideoIndex+1].classList.add('active');
            loadVideo(currentVideoIndex);
        }
        else {
            currentVideoIndex = 0;
            var buttons = document.getElementsByTagName('button');
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active');
            }
            prevButton.innerHTML = '<span style="float:left; margin-left: 2px; margin-right: 0px;margin-top:-11px;font-size:160%">&#x2039;</span>' + videoTitles[videoTitles.length-1];
            nextButton.innerHTML = videoTitles[currentVideoIndex+1] + '<span style="float:right; margin-left: 0px;margin-top:-11px; margin-right: 2px;font-size:160%">&#x203A;</span>';
            buttons[currentVideoIndex+1].classList.add('active');
            loadVideo(currentVideoIndex);
        }
    };
    prevNextButtonsContainer.appendChild(nextButton);
}

generateButtons(); // Generate the buttons when the page loads
generatePrevNextButtons(); // Generate the prev and next buttons when the page loads
loadVideo(0); // Load the first video when the page loads