document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به طور پیش‌فرض

    // داده‌های ورودی
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // داده‌های لاگین معتبر (می‌توانید این داده‌ها را از یک فایل یا API بکشید)
    const validUsername = 'admin';
    const validPassword = 'password123';

    // بررسی اعتبارنام‌ها
    if (username === validUsername && password === validPassword) {
        // ذخیره وضعیت لاگین در Local Storage و انتقال به صفحه آپلود
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'upload.html'; // صفحه آپلود فایل‌ها
    } else {
        document.getElementById('error-message').textContent = 'نام کاربری یا رمز عبور اشتباه است.';
    }
});
