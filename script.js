// Input Field Hover Effect
document.querySelectorAll('.input-group').forEach(inputGroup => {
    inputGroup.addEventListener('mouseenter', () => {
        inputGroup.style.transform = 'scale(1.02)';
    });
    
    inputGroup.addEventListener('mouseleave', () => {
        inputGroup.style.transform = 'scale(1)';
    });
});

// Form Submission Animation

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const button = document.querySelector('button');
    button.innerHTML = 'Logging In... <i class="fas fa-spinner fa-spin"></i>';
    
    setTimeout(() => {
        button.innerHTML = 'Login Successful! <i class="fas fa-check"></i>';
        button.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7af)';
    }, 2000);
});