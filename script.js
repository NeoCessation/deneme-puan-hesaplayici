 fetch("https://api.countapi.xyz/hit/myproject.onrender.com/ziyaretci")
        .then(response => response.json())
        .then(data => {
            document.getElementById("counter").innerText = data.value;
        })
        .catch(error => console.error("Sayaç yüklenirken hata oluştu:", error));

function calculate() {
    // Net hesaplama
    document.querySelectorAll('.correct').forEach((input, index) => {
        const correct = parseInt(input.value) || 0;
        const wrong = parseInt(document.querySelectorAll('.wrong')[index].value) || 0;
        const net = correct - (wrong / 4);
        document.querySelectorAll('.net')[index].value = net.toFixed(2);
    });

    // Puan hesaplama formülü
    const nets = Array.from(document.querySelectorAll('.net')).map(n => parseFloat(n.value));

    let totalScore = 100; // Sabit terim
    nets.forEach((net, index) => {
        // 0. ve 1. indexler edebiyat ve matematik için
        const coefficient = (index === 0 || index === 5) ? 4.40 : 2.2666;
        totalScore += net * coefficient;
    });

    document.getElementById('lgs-score').value = totalScore.toFixed(2);
}

function resetForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}