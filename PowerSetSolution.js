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

// Export kelas PowerSetSolution agar bisa diakses dari file lain
export default PowerSetSolution;
