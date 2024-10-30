$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('.sidebar').toggleClass('collapsed');
    });

    // Efek Slide-Up untuk card saat halaman di-load
    $('.card').css({
        'opacity': '0',
        'transform': 'translateY(100px)' // Set initial position 100px below
    });

    $('.card').each(function(index) {
        $(this).delay(index * 300).animate({
            'opacity': '1',
            'transform': 'translateY(0)'  // Animate back to original position
        }, {
            duration: 1000,
            step: function(now, fx) {
                if (fx.prop === "opacity") {
                    $(this).css('transform', 'translateY(' + (100 - now * 100) + 'px)');
                }
            }
             });
    });

    // Efek Slide Toggle untuk dropdown menu
    $('.dropdown').click(function() {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    document.addEventListener("DOMContentLoaded", function () {
        const sidebar = document.querySelector(".sidebar");
        const burgerIcon = document.querySelector(".burger-icon");
    
        burgerIcon.addEventListener("click", function () {
            sidebar.classList.toggle("expanded");
        });
    });
    
    

    // Efek Fade In/Fade Out untuk chart dan budget container
    $('.chart, .budget-container').css({
        'opacity': '0',
        'transform': 'translateY(100px)' // Set initial position 100px below for both chart and budget container
    });
     $('.chart, .budget-container').each(function(index) {
        $(this).delay(index * 300).animate({
            'opacity': '1',
            'transform': 'translateY(0)'  // Animate back to original position
        }, {
            duration: 1000,
            step: function(now, fx) {
                if (fx.prop === "opacity") {
                    $(this).css('transform', 'translateY(' + (100 - now * 100) + 'px)');
                }
            }
        });
    });

    // Efek animasi sederhana pada logo
    $('.logo-name').hover(function() {
        $(this).animate({
            fontSize: '30px',  // Animasi perubahan ukuran teks
        }, 400);
    }, function() {
        $(this).animate({
            fontSize: '25px',  // Kembali ke ukuran asli
        }, 400);
    });
    // Efek Show/Hide pada profil
    $('.profile-icon').click(function() {
        $(this).find('img').toggle(500);  // Gambar akan hilang/muncul saat diklik
    });

    // Bar chart initialization (Chart.js)
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                 borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
     // Pie chart initialization (Chart.js) - First Pie
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    const myPieChart1 = new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Miscellaneous'],
            datasets: [{
                label: '% of Income Budget',
                data: [30, 20, 40, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });

    // Pie chart initialization (Chart.js) - Second Pie
    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    const myPieChart2 = new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Marketing', 'Operations', 'Research', 'IT'],
            datasets: [{
                label: '% of Expenses Budget',
                data: [25, 35, 20, 20],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });

});