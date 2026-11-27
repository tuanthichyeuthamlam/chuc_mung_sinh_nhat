const nutNoHu = document.getElementById("no_hu");

nutNoHu.addEventListener("click", function () {
    // Gọi hàm confetti() có sẵn từ đường link vừa nhúng
    confetti({
        particleCount: 150, // Số lượng mảnh pháo
        spread: 90,         // Góc tỏa rộng (độ)
        origin: { y: 0.6 }  // Điểm bắn xuất phát ngang vị trí nút
    });

    nutNoHu.innerText = "NỔ HŨ RỒI! 🎉";
}); 