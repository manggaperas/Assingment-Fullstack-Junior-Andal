// Import kelas PowerSetSolution dari file PowerSetSolution.js
import PowerSetSolution from './PowerSetSolution.js';

// Inisialisasi objek dari kelas PowerSetSolution
const solution = new PowerSetSolution();

// Method untuk menampilkan power set ke dalam console
function showPowerSet() {
    let inputNums = document.getElementById("nums").value;
    // Pengecekan apakah user telah menginput nilai sebelum submit button
    if (inputNums.trim() === "") {
        alert("Silahkan input nilai terlebih dahulu!"); 
        return;
    }

    let nums = inputNums.split(",");

    let subsets = solution.powerSet(nums);

    let ul = document.createElement("ul");
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    subsets.forEach((subset) => {
        let li = document.createElement("li");
        li.textContent = "[" + subset.join(", ") + "]";
        ul.appendChild(li);
    });

    outputDiv.appendChild(ul);
}

function runTestCase() {
    // Test Case
    let nums2 = ["1", "2"];
    let nums3 = ["3", "4"];
    let nums4 = [];

    let subsets2 = solution.powerSet(nums2);
    let subsets3 = solution.powerSet(nums3);
    let subsets4 = solution.powerSet(nums4);

    let ul = document.createElement("ul");
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    subsets2.forEach((subset) => {
        let li = document.createElement("li");
        li.textContent = "[" + subset.join(", ") + "]";
        ul.appendChild(li);
    });

    subsets3.forEach((subset) => {
        let li = document.createElement("li");
        li.textContent = "[" + subset.join(", ") + "]";
        ul.appendChild(li);
    });

    subsets4.forEach((subset) => {
        let li = document.createElement("li");
        li.textContent = "[" + subset.join(", ") + "]";
        ul.appendChild(li);
    });

    outputDiv.appendChild(ul);
}

// Export metode showPowerSet dan runTestCase agar bisa diakses dari file lain
export { showPowerSet, runTestCase };
