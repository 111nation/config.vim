const config = {
  languages: new Map(),
  plugins: new Map(),
  theme: null,
};

export const languages = new Map([
  ["Rust", { image: "rust.png", plugin: ["coc-rls"] }],
  ["HTML", { image: "html.png", plugin: ["coc-html", "coc-emmet"] }],
  ["CSS", { image: "css.png", plugin: ["coc-css", "coc-emmet"] }],
  [
    "JavaScript",
    { image: "javascript.png", plugin: ["coc-tsserver", "coc-json"] },
  ],
  [
    "TypeScript",
    { image: "typescript.svg", plugin: ["coc-tsserver", "coc-json"] },
  ],
  ["Python", { image: "python.png", plugin: ["coc-python"] }],
  ["C", { image: "c.png", plugin: ["coc-clangd"] }],
  ["C++", { image: "cpp.png", plugin: ["coc-clangd"] }],
]);
