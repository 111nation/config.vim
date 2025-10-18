export const config = {
  languages: [],
  plugins: [],
  theme: "",
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
      colorscheme: ["catppuccin"],
    },
  ],
  [
    "Dracula",
    {
      colors: ["#282a36", "#6272a4", "#bd93f9"],
      plugin: ["dracula/vim"],
      colorscheme: ["dracula"],
    },
  ],
  [
    "GruvBox",
    {
      colors: ["#3C3836", "#CC241D", "#D79921"],
      plugin: ["morhetz/gruvbox"],
      colorscheme: ["gruvbox"],
    },
  ],
  [
    "Everforest",
    {
      colors: ["#1E2326", "#83C092", "#D3C6AA"],
      plugin: ["neanias/everforest-nvim", "neanias/everforest-nvim"],
      colorscheme: ["everforest"],
    },
  ],
]);

export function generateVimRC() {
  let themePlugin = "";
  let themeColorScheme = "";
  if (themes.get(config.theme)) {
    themePlugin = themes.get(config.theme).plugin[0];
    themeColorScheme = themes.get(config.theme).colorscheme;
  }

  let languagePlugins = [];
  for (let lang of config.languages) {
    languagePlugins.push(...languages.get(lang).plugin);
  }

  // BASIC SETTINGS

  const basicSettings = `
" --- Basic Settings ---
set encoding=utf-8
set number
set relativenumber
set wrap
set background=dark
syntax on
set clipboard+=unnamedplus
filetype off
set termguicolors

" --- Tabs and Indentation ---
set tabstop=4
set shiftwidth=4
set noexpandtab
filetype plugin indent on

" --- Search ---
set hlsearch
set incsearch
set ignorecase
set smartcase
set nohlsearch

" --- Mouse and UI ---
set mouse=a
set ruler
set showmatch
set wildmenu
set scrolloff=20
set cursorline

" --- Clipboard ---
set clipboard=unnamedplus

" --- Status Line ---
set statusline=%f\\ %y\\ %m\\ %r\\ %=%l/%L\\ %p%%\\ %c

" --- Line Behaviour ---
set virtualedit=onemore
set wrap
set showbreak=...
`;

  // PLUGINS

  const plugins = `
call plug#begin()
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
	${config.theme && `Plug '${themePlugin}'`}
call plug#end()
`;

  // LANGUAGES

  let languageSettings = "";
  if (config.languages.length > 0) {
    languageSettings = `let g:coc_global_extensions = [`;
    for (let i in languagePlugins) {
      languageSettings += `'${languagePlugins[i]}'`;
      if (i < languagePlugins.length - 1) {
        languageSettings += ", ";
      }
    }
    languageSettings += "]";
  }

  // OTHER
  const other = `
inoremap <silent><expr> <CR> pumvisible() ? coc#_select_confirm() : "\\<CR>"

" Set the background to transparent
autocmd VimEnter * hi Normal guibg=NONE ctermbg=NONE
autocmd VimEnter * hi NormalNC guibg=NONE ctermbg=NONE
autocmd VimEnter * hi SignColumn guibg=NONE ctermbg=NONE
autocmd VimEnter * hi VertSplit guibg=NONE ctermbg=NONE

" Show CocList diagnostics quick
nnoremap e :CocList diagnostics<CR>

${themeColorScheme && `colorscheme ${themeColorScheme}`}
`;

  return `
${basicSettings}
${plugins}
${languageSettings}
${other}
	`;
}

export function generateLua() {
  return "";
}
