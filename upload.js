// بررسی وضعیت لاگین
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html'; // انتقال به صفحه لاگین اگر کاربر وارد نشده است
}

// اضافه کردن قابلیت‌های آپلود فایل
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به طور پیش‌فرض

    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;

    if (files.length > 0) {
        alert('فایل‌ها با موفقیت آپلود شدند.');
        // در اینجا باید فرآیند واقعی آپلود فایل‌ها به سرور را اضافه کنید
    } else {
        alert('لطفاً حداقل یک فایل انتخاب کنید.');
    }
});
