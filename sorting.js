// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  let temp = el1.style.height; //third variable for swapping
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

const startSortingButton = document.querySelector(".start");
startSortingButton.addEventListener("click", async function () {
  enableSortingBtn();
  enableSpeedSlider();
  disableNewArrayBtn();
  disableStopSortingBtn();
  hasPressedStop = false;
  // Here, you can call your sorting algorithm function to resume the sorting.
  // For example, if you have a function like "bubbleSort()" to perform sorting,
  // you can call it here.
  // Example:
  // await bubbleSort(barArray, delay);

  // Remember to replace "bubbleSort()" with the appropriate sorting function you are using.
});

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".heapSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".heapSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
// function disableSizeSlider() {
//   document.querySelector("#size_input").disabled = true;
// }

function disableSpeedSlider() {
  document.querySelector("#speed_input").disabled = true;
}

function enableSpeedSlider() {
  document.querySelector("#speed_input").disabled = false;
}

// Enables size slider used in conjunction with disable
// function enableSizeSlider() {
//   document.querySelector("#size_input").disabled = false;
// }

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
  document.querySelector(".new").disabled = true;
}

function enableNewArrayBtn() {
  document.querySelector(".new").disabled = false;
}

function enableStopSortingBtn() {
  document.querySelector(".stop").disabled = false;
}

function disableStopSortingBtn() {
  document.querySelector(".stop").disabled = true;
}

function disableStopSortingBtn() {
  document.querySelector(".stop").disabled = true;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

// Selecting size slider from DOM
// let arraySize = document.querySelector("#size_input");

// // Event listener to update the bars on the UI
// arraySize.addEventListener("input", function () {
//   console.log(arraySize.value, typeof arraySize.value);
//   createNewArray(parseInt(arraySize.value));
// });

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

// Event listener to update delay time
delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

//array push input
let num = [];
document.getElementById("submit").addEventListener("click", function () {
  const input = document.getElementById("arrayInput").value;
  const arr = input.split(",").map(number =>
    num.push(parseInt(number.trim()))
  );

  // document.getElementById("displayArray").textContent = JSON.stringify(arr);
});
//  arraySize = num.length

// Event listener to update the bars on the UI
// arraySize.addEventListener("input", function () {
//   console.log(arraySize);
//   createNewArray(arraySize);
// });
// console.log(num)
// Creating barArray to store randomly generated numbers
// let barArray = [];
// // Function to update the displayed array
// function updateDisplay() {
//   document.getElementById("displayArray").textContent =
//     JSON.stringify(barArray);
// }



// document.getElementById("addNumber").addEventListener("click", function () {
//   const numberInput = document.getElementById("numberInput");
//   const number = parseInt(numberInput.value);

//   if (!isNaN(number)) {
//     // Push the number into the array
//     barArray.push(number);
//     updateDisplay();

//     // Clear the input field
//     numberInput.value = "";
//   } else {
//     alert("Please enter a valid number.");
//   }
// });
// Call to display bars right when you visit the site
// createNewArray();

// To create new barArray input size of barArray
function createNewArray() {
  // calling helper function to delete old bars from dom
  deleteChild();

  // creating an barArray of random numbers
  // barArray = [234, 54, 232, 65, 86, 90];
  // for (let i = 0; i < noOfBars; i++) {
  //     barArray.push(Math.floor(Math.random() * 251));
  // }

  console.log(num);

  const bars = document.querySelector("#sorting");
  // noOfBars = barArray.arraySize();
  // create multiple element div using loop and adding class 'bar col'
  for (let i = 0; i < num.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${num[i] * 10}px`;
    bar.style.width='30px';
  
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }

}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
  const bar = document.querySelector("#sorting");
  const val = document.querySelector("#arrayInput");
  bar.innerHTML = "";

}
function clearArray() {
  const bar = document.querySelector("#sorting");
  const val = document.querySelector("#arrayInput");
  val.value = "";
  bar.innerHTML = "";
  num = [];
}
// Selecting newarray button from DOM and adding eventlistener
// console.log(num);
// function newArr(){

const newArrayButton = document.querySelector(".new");
newArrayButton.addEventListener("click", function () {
  hasPressedStop = false;
  enableSpeedSlider();

  enableSortingBtn();
  // enableSizeSlider();
  // console.log(arraySize);

  createNewArray();
});
// }


function enableStartSortingButton() {
  const startSortingButton = document.querySelector(".start");
  startSortingButton.disabled = false;
}

const stopSortingButton = document.querySelector(".stop");
stopSortingButton.addEventListener("click", function () {
  disableSortingBtn();
  disableSizeSlider();
  hasPressedStop = true;
  enableStartSortingButton();
});
