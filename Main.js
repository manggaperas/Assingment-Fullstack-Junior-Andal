// Deklarasi kelas PowerSetSolution
class PowerSetSolution {
  // Metode untuk menghitung semua subset (power set) dari array nums
  powerSet(nums) {
    // Membuat array untuk menyimpan semua subset
    let result = [[]];

    // Looping untuk setiap elemen dalam array nums
    for (let num of nums) {
      // Mendapatkan jumlah subset saat ini dalam result
      let n = result.length;

      // Looping untuk setiap subset dalam result saat ini
      for (let i = 0; i < n; i++) {
        // Membuat salinan subset yang ada saat ini
        let subset = [...result[i]];

        // Menambahkan elemen num ke subset baru
        subset.push(num);

        // Menambahkan subset baru ke dalam result
        result.push(subset);
      }
    }

    // Mengembalikan semua subset yang telah terbentuk
    return result;
  }
}

let solution = new PowerSetSolution();
let outputDiv = document.getElementById("output");

function showPowerSet() {
  let inputNums = document.getElementById("nums").value;
  let nums = inputNums.split(",").map((num) => parseInt(num.trim(), 10));

  let subsets = solution.powerSet(nums);

  // Membuat elemen ul untuk menampilkan hasil subset
  let ul = document.createElement("ul");

  // Menghapus konten sebelumnya dari div "output"
  outputDiv.innerHTML = "";

  // Looping untuk setiap subset dan menambahkannya ke dalam elemen ul
  subsets.forEach((subset) => {
    let li = document.createElement("li");
    li.textContent = "[" + subset.join(", ") + "]";
    ul.appendChild(li);
  });

  // Menambahkan elemen ul ke dalam div "output"
  outputDiv.appendChild(ul);
}

function runTestCase() {
  // Test Case
  let nums2 = [1, 2];
  let nums3 = [3, 4];
  let nums4 = [];

  let subsets2 = solution.powerSet(nums2);
  let subsets3 = solution.powerSet(nums3);
  let subsets4 = solution.powerSet(nums4);

  // Menghapus konten sebelumnya dari div "output"
  outputDiv.innerHTML = "";

  // Membuat elemen ul untuk menampilkan hasil subset
  let ul = document.createElement("ul");

  // Looping untuk setiap subset dari nums2 dan menambahkannya ke dalam elemen ul
  subsets2.forEach((subset) => {
    let li = document.createElement("li");
    li.textContent = "[" + subset.join(", ") + "]";
    ul.appendChild(li);
  });

  // Looping untuk setiap subset dari nums3 dan menambahkannya ke dalam elemen ul
  subsets3.forEach((subset) => {
    let li = document.createElement("li");
    li.textContent = "[" + subset.join(", ") + "]";
    ul.appendChild(li);
  });

  // Looping untuk setiap subset dari nums4 dan menambahkannya ke dalam elemen ul
  subsets4.forEach((subset) => {
    let li = document.createElement("li");
    li.textContent = "[" + subset.join(", ") + "]";
    ul.appendChild(li);
  });

  // Menambahkan elemen ul ke dalam div "output"
  outputDiv.appendChild(ul);
}
