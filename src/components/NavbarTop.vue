<template>
  <nav
    class="navbar navbar-expand-lg navbar-custom fixed-top tw-bg-white/70 tw-border-zinc-300 tw-backdrop-blur-[2px]"
    style="border-bottom: 1px solid rgb(212 212 216)"
  >
    <div class="container-fluid">
      <a href="index.html" class="col-1">
        <img src="/image/logo.png" alt="首頁" class="img-fluid rounded tw-max-h-12" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav tw-w-full tw-max-w-[500px]">
          <li class="nav-item col-3">
            <a class="nav-link" href="#">最新消息</a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" href="#">熱門商品</a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link active" aria-current="page" style="color: red" href="PC.html"
              >PC專區</a
            >
          </li>
          <li class="nav-item col-3">
            <a class="nav-link disabled" aria-disabled="true">週邊專區</a>
          </li>
        </ul>
      </div>
      <form class="d-flex align-items-center" role="search">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
          <input
            class="form-control"
            type="search"
            placeholder="請輸入商品名稱"
            aria-label="Search"
          />
        </div>
        <button class="btn btn-danger ms-2" type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>

      <div class="d-flex">
        <a href="Member.html" class="ms-5 btn btn-link">
          <i class="bi bi-person-circle"></i>
        </a>
        <a href="Register.html" class="ms-5 btn btn-link">
          <i class="bi bi-box-arrow-in-left"></i>
        </a>
        <a href="Member.html" class="ms-5 btn btn-link">
          <i class="bi bi-cart"></i>
        </a>
      </div>
    </div>
  </nav>
</template>
