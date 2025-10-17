const config = {
  languages: [],
  plugins: [],
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

export const themes = new Map([
  [
    "Catppuccin",
    {
      colors: ["#181926", "#494d64", "#c6a0f6"],
      plugin: ["catppuccin/vim", "catppuccin/nvim"],
    },
  ],
  [
    "Dracula",
    { colors: ["#282a36", "#6272a4", "#bd93f9"], plugin: ["dracula/vim"] },
  ],
  [
    "GruvBox",
    { colors: ["#3C3836", "#CC241D", "#D79921"], plugin: ["morhetz/gruvbox"] },
  ],
  [
    "Everforest",
    {
      colors: ["#1E2326", "#83C092", "#D3C6AA"],
      plugin: ["neanias/everforest-nvim", "neanias/everforest-nvim"],
    },
  ],
]);
