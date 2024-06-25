let expandedBox = null;

function toggleContent(box, tab) {
    const contentBox = document.getElementById('contentBox');
    let content = '';

    switch (tab) {
        case 'edukasi':
            content = `
                <div class="content-box">
                    <div class="image">
                        <img src="assets/images/edukasi" alt="edukasi Image">
                    </div>
                    <div class="content">
                        <h2>Edukasi Lingkungan</h2>
                        <p>Mari kita mulai dari yang sederhana. Daur ulang sampah, gunakan kantong belanja yang ramah lingkungan, dan hindari plastik sekali pakai. Setiap tindakan kecil kita berarti banyak untuk bumi.</p>
                       <p>Lingkungan yang sehat adalah hak kita semua. Jadi, mari kita belajar bersama tentang bagaimana kita bisa berkontribusi untuk menjaga bumi ini.</p>
                        <a href="https://journal.uinsgd.ac.id/index.php/al-khidmat/article/view/4591" class="button" target="_blank" rel="noopener noreferrer">Selengkapnya</a>
                    </div>
                </div>
            `;
            break;

        case 'kondisi':
            content = `
                <div class="content-box">
                    <div class="image">
                        <img src="https://via.placeholder.com/150" alt="kondisi Image">
                    </div>
                    <div class="content">
                        <h2>Kondisi Lingkungan</h2>
                        <p>Lingkungan yang sehat adalah hak kita semua. Jadi, mari kita belajar bersama tentang bagaimana kita bisa berkontribusi untuk menjaga bumi ini.</p>
                        <p>Mari kita mulai dari yang sederhana. Daur ulang sampah, gunakan kantong belanja yang ramah lingkungan, dan hindari plastik sekali pakai. Setiap tindakan kecil kita berarti banyak untuk bumi.</p>
                        <a href="https://cibiruwetan.desa.id/status-sdgs" class="button" target="_blank" rel="noopener noreferrer">Selengkapnya</a>
                    </div>
                </div>
            `;
            break;

        case 'emisi':
            content = `
                <div class="content-box">
                    <div class="image">
                        <img src="https://via.placeholder.com/150" alt="Go Green School Image">
                    </div>
                    <div class="content">
                        <h2>Emisi karbon</h2>
                        <p>Emisi karbon adalah jejak yang kita tinggalkan ketika menggunakan energi fosil, seperti bahan bakar kendaraan atau listrik dari pembangkit tenaga. Namun, jangan khawatir! Kita bisa berbuat lebih baik.</p>
                        <p>Mari kita mulai dari diri kita sendiri. Kurangi penggunaan energi fosil. Gunakan transportasi umum, matikan lampu saat tidak digunakan, dan pilih sumber energi yang ramah lingkungan.</p>
                        <a href="https://m.lindungihutan.com/imbangi/jejak-karbon" class="button" target="_blank" rel="noopener noreferrer">Hitung Emisi</a>
                    </div>
                </div>
            `;
            break;

        case 'menjaga':
            content = `
                <div class="content-box">
                    <div class="image">
                        <img src="https://via.placeholder.com/150" alt="menjaga Image">
                    </div>
                    <div class="content">
                        <h2>Menjaga Lingkungan</h2>
                        <p>Kita semua memiliki peran penting dalam menjaga keberlanjutan bumi ini. Mari kita berkontribusi dengan tindakan-tindakan sederhana yang bisa membuat perbedaan besar.</p>
                        <p>Plastik sekali pakai adalah musuh lingkungan. Gunakan tas belanja kain, botol minum berulang, dan hindari sedotan plastik. Setiap plastik yang kita tolak berarti lebih sedikit sampah di lautan.</p>
                        <a href="https://dinkes.jakarta.go.id/berita/read/tips-menjaga-lingkungan-agar-tetap-sehat" class="button" target="_blank" rel="noopener noreferrer">Selengkapnya</a>
                    </div>
                </div>
            `;
            break;

        case 'laporkan':
            content = `
                <div class="content-box">
                    <div class="image">
                        <img src="https://via.placeholder.com/150" alt="Ajang Kreasi Image">
                    </div>
                    <div class="content">
                        <h2>Laporkan Masalah Lingkungan</h2>
                        <p>Lingkungan yang sehat adalah hak kita semua. Jadi, mari kita berbicara tentang masalah lingkungan dan bagaimana kita bisa berkontribusi.</p>
                        <p>Berpartisipasi dalam Aksi Lingkungan seperti Ikut serta dalam kegiatan lingkungan, seperti membersihkan pantai, menanam pohon, atau mengikuti kampanye pengurangan plastik. Setiap tindakan kita berarti banyak untuk bumi.</p>
                        <a href="https://pengaduan.menlhk.go.id/" class="button" target="_blank" rel="noopener noreferrer">Laporkan</a>
                    </div>
                </div>
            `;
            break;
    }

    contentBox.innerHTML = content;
    contentBox.style.display = 'block';

    if (expandedBox) {
        expandedBox.classList.remove('expanded');
        expandedBox.classList.remove('clicked');
    }

    box.classList.add('expanded');
    box.classList.add('clicked');
    expandedBox = box;
}