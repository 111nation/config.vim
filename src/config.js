// Object storing all user's stored configuration options
export const config = {
  languages: [],
  plugins: [],
  theme: "",
};

retrieveConfig();

// Language Options
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
  ["Python", { image: "python.png", plugin: ["coc-pyright"] }],
  ["C", { image: "c.png", plugin: ["coc-clangd"] }],
  ["C++", { image: "cpp.png", plugin: ["coc-clangd"] }],
]);

// Theme Options
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

// Grab all selected languages by name and return
// all required plugins for the config as an array
export function getLanguagePlugins() {
  let plugins = new Set();
  for (let name of config.languages) {
    let language = languages.get(name);
    if (language) {
      language.plugin.forEach(plugins.add, plugins); // Add each coc plugin into the set
    }
  }

  return Array.from(plugins);
}

// Get theme plugin and colorscheme using theme name
export function getTheme(vimscript = true) {
  const theme = { plugin: "", colorscheme: "" };
  if (themes.get(config.theme)) {
    theme.plugin = themes.get(config.theme).plugin[vimscript ? 0 : 1];
    theme.colorscheme = themes.get(config.theme).colorscheme;
  }

  return theme;
}

// Save configuration files to localStorage
export function saveConfig() {
  localStorage.setItem("config", JSON.stringify(config));
}

// Retrieve configuration files from localStorage
export function retrieveConfig() {
  let configSave = JSON.parse(localStorage.getItem("config"));
  if (!configSave) return;
  config.languages = configSave.languages;
  config.plugins = configSave.plugins;
  config.theme = configSave.theme;
}

// Generate configuration as vimscript
export function generateVimRC() {
  // BASIC SETTINGS

  const basicSettings = `" --- Basic Settings ---
set encoding=utf-8
set number
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

" --- Mouse and UI ---
set mouse=a
set ruler
set showmatch
set wildmenu
set scrolloff=20
set cursorline

" --- Status Line ---
set statusline=%f\\ %y\\ %m\\ %r\\ %=%l/%L\\ %p%%\\ %c

" --- Line Behaviour ---
set virtualedit=onemore
set wrap
set showbreak=...

" --- Install vim-plug and plugins ---
let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \\| PlugInstall --sync | source $MYVIMRC
\\| endif`;

  // PLUGINS

  let theme = getTheme();

  const plugins = `" --- Plugins ---
call plug#begin()
    Plug 'neoclide/coc.nvim', {'branch': 'release'}	
	${config.theme && `Plug '${theme.plugin}'`}
call plug#end()`;

  // LANGUAGES

  let languageSettings = "";
  let languagePlugins = getLanguagePlugins();
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
  const other = `" --- Auto Complete Settings ---
inoremap <silent><expr> <CR> pumvisible() ? coc#_select_confirm() : "\\<CR>"

" --- Theming Settings ---
" Set the background to transparent
autocmd VimEnter * hi Normal guibg=NONE ctermbg=NONE
autocmd VimEnter * hi NormalNC guibg=NONE ctermbg=NONE
autocmd VimEnter * hi SignColumn guibg=NONE ctermbg=NONE
autocmd VimEnter * hi VertSplit guibg=NONE ctermbg=NONE

" Show CocList diagnostics quick
nnoremap e :CocList diagnostics<CR>

${config.theme && `colorscheme ${theme.colorscheme}`}`;

  return `
${basicSettings}

${plugins}
${languageSettings}
${other}
	`;
}

// Generate configuration as lua
export function generateLua() {
  // BASIC SETTINGS

  const basicSettings = `-- Basic Settings
vim.o.encoding= "utf-8"
vim.o.number = true
vim.o.wrap = true
vim.o.background= "dark"
vim.o.syntax = true
vim.o.clipboard="unnamedplus"
vim.o.termguicolors = true

-- Tabs and Indentation 
vim.o.tabstop = 4
vim.o.shiftwidth = 4
vim.o.expandtab = true;
vim.cmd("filetype plugin indent on")

-- Search
vim.o.hlsearch = true
vim.o.incsearch = true
vim.o.ignorecase = true
vim.o.smartcase = true

-- Mouse and UI
vim.o.mouse = "a"
vim.o.ruler = true
vim.o.showmatch = true
vim.o.wildmenu = true
vim.o.scrolloff = 20
vim.o.cursorline = true

-- Status Line
vim.o.statusline = "%f\\ %y\\ %m\\ %r\\ %=%l/%L\\ %p%%\\ %c";

-- Line Behaviour
vim.o.virtualedit = "onemore";
vim.o.wrap = true
vim.o.showbreak = "..."

-- Install vim-plug and plugins
vim.cmd([[
let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \\| PlugInstall --sync | source $MYVIMRC
\\| endif
]])`;

  // PLUGINS

  let theme = getTheme(false);

  const plugins = `-- Plugins
vim.call("plug#begin()")
    Plug('neoclide/coc.nvim', { ['branch'] = 'release'}) 
	${config.theme && `Plug('${theme.plugin}')`}
vim.call("plug#end()")`;

  // LANGUAGES

  let languageSettings = "";
  let languagePlugins = getLanguagePlugins();
  if (config.languages.length > 0) {
    languageSettings = `vim.g.coc_global_extensions = {`;
    for (let i in languagePlugins) {
      languageSettings += `'${languagePlugins[i]}'`;
      if (i < languagePlugins.length - 1) {
        languageSettings += ", ";
      }
    }
    languageSettings += "}";
  }

  // OTHER
  const other = `-- Auto Complete Settings
vim.cmd('inoremap <silent><expr> <CR> pumvisible() ? coc#_select_confirm() : "\\<CR>"')

-- Theming Settings
" Set the background to transparent
vim.cmd("autocmd VimEnter * hi Normal guibg=NONE ctermbg=NONE")
vim.cmd("autocmd VimEnter * hi NormalNC guibg=NONE ctermbg=NONE")
vim.cmd("autocmd VimEnter * hi SignColumn guibg=NONE ctermbg=NONE")
vim.cmd("autocmd VimEnter * hi VertSplit guibg=NONE ctermbg=NONE")

-- Show CocList diagnostics quick
vim.keymap.set('n', 'e', ':CocList diagnostics<CR>')

${config.theme && `vim.cmd('colorscheme = ${theme.colorscheme}')`}`;

  return `
${basicSettings}

${plugins}
${languageSettings}
${other}
	`;
}
