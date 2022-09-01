# 编译开源书籍

本书的内容使用 `mdbook` 进行编写，并通过 开源社 发布。

## 安装 rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# 或
访问 https://www.rust-lang.org/tools/install
下载 rustup 并安装
```
---

## 安装 mdbook

```bash
cargo install mdbook
# 或
cargo install --git https://github.com/rust-lang/mdBook.git mdbook
```

---

## 编译开源书籍

```bash
git clone https://github.com/kaiyuanshe/oss-book
cd oss-book
mdbook build
mdbook serve
```

在浏览器中打开 http://localhost:3000 访问开源书籍的内容页面。

---

## 恭喜