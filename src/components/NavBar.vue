<template>
    <div class="alibaba ">
        <nav dir="rtl" class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="../assets/alibaba-logo-Long.png" class="nav-img" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav p-2">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                بلیط
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item " href="#">پرواز داخلی</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">پرواز خارجی</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">قطار</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">اتوبوس</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                اقامت
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">هتل</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">ویلا و اقامتگاه</a></li>
                            </ul>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link " href="#" role="button"  aria-expanded="false">
                                تور
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                بیشتر
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">علی بابا پلاس</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">مجله علی بابا</a></li>
                                <li><hr class="dropdown-divider"></li>  
                                <li><a class="dropdown-item" href="#">بیمه مسافرتی</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div class="d-flex justify-content-end w-75">
                        <span class="nav-item ">
                            <a class="nav-link " href="#" role="button" aria-expanded="false">
                                <i class="bi bi-question-circle-fill fs-4"></i>
                                مرکز پشتیبانی آنلاین
                            </a>
                        </span>
                        <span class="nav-item ">
                            <a class="nav-link " href="#" role="button" aria-expanded="false">
                                <i class="bi bi-receipt fs-4"></i>
                                پیگیری خرید
                            </a>
                        </span>
                        <span class="nav-item ">
                            <a class="nav-link " href="#" role="button"  aria-expanded="false">
                                <i class="bi bi-person-fill fs-4"></i>
                                ورود یا ثبت نام
                            </a>
                        </span>
                    </div>

                </div>

            </div>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'NavBar',
    setup() {

    }

}
</script>

<style>
@font-face {
    font-family: alibaba;
    src: url(../assets/Fonts/alibaba-regular.woff2);
}

.alibaba {
    font-family: alibaba, Arial, Helvetica, sans-serif !important;
}

ul .nav-item {
    border-left: 0.8px solid rgb(175, 172, 172);
    padding: 4px 16px;
    transition: 0.4s;
}
span .nav-link {
    padding: 6px 18px !important;
    color: rgb(107, 107, 107);
    border-radius: 10px;
    transition: 0.4s;
}
.nav-link:hover{
    background-color: rgba(100, 100, 100, 0.2);
    outline:  none ;
    border: none;
    border-radius: 10px;
}

.dropdown-item {
    padding: 0 12px;
    text-align: right !important;
}
.nav-img {
    max-width: 160px;
    margin-left: 60px;
}

</style>