function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function openQuestion(evt, questionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(questionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Optionally add to make the first tab open by default:
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("tablinks")[0].click();
});


function showNextQuestion(questionNumber) {
    var currentQuestion = document.getElementById("Question" + (questionNumber - 1));
    var nextQuestion = document.getElementById("Question" + questionNumber);
    
    if (currentQuestion) {
        currentQuestion.style.display = "none";
    }
    if (nextQuestion) {
        nextQuestion.style.display = "block";
    }
}

const app = Vue.createApp({
    data() {
        return {
            images: [
                { src: 'path/to/visualization1.png', alt: 'Visualization 1', caption: 'Visualization 1 Caption' },
                // Add more images
            ],
            selectedImage: null
        };
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        }
    }
}).mount('#app');
