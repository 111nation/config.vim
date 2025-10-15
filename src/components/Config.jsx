function Config(props) {
  return (
    <div
      class={
        props.className +
        " bg-dark-green border-1 border-[#507767] rounded-xl flex flex-col py-5 px-5"
      }
    >
      <div class="font-mono underline font-semibold text-[#87AE87] flex flex-row justify-end">
        <p
          onClick={props.onCopy}
          class="mx-5 cursor-pointer hover:text-light-green"
        >
          Copy
        </p>
        <p
          onClick={props.onDownload}
          class="cursor-pointer hover:text-light-green"
        >
          Download
        </p>
      </div>
      <div class="w-full m-0 p-0 mt-5 sm:mt-0 h-full">
        <textarea
          class="font-mono font-medium text-sm sm:text-md outline-none text-light-green text-nowrap sm:text-wrap w-full h-full m-0 resize-none"
          name="config"
          id="config"
          readOnly
        >
          {`
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

" --- Remapping ---
nnoremap <C-Right> w     " Move forward by word with Ctrl+Right
nnoremap <C-Left> b      " Move backward by word with Ctrl+Left

" Undo
nnoremap <C-z> u
inoremap <C-z> <C-o>u
vnoremap <C-z> u

nnoremap <Down> gj
nnoremap <Up> gk
nnoremap j gj
nnoremap k gk

" Saving
nnoremap <C-s> <Esc>:w<CR>
noremap <C-s> <Esc>:w<CR>
inoremap <C-s> <Esc>:w<CR>i
vnoremap <C-s> <Esc>:w<CR>v

" Select all
nnoremap <C-a> <Esc>gg<S-V>G
inoremap <C-a> <Esc>gg<S-V>G

" Pasting
nnoremap <C-v> <Esc>p
inoremap <C-v> <Esc>p<CR>i

" Tab management
nnoremap <silent> <C-T> <Esc>:tabnew<CR>
nnoremap <silent> <A-T> <Esc>:split<CR>
nnoremap <silent> <C-Tab> <Esc>:tabnext<CR>
nnoremap <silent> <C-S-Tab> <Esc>:tabprevious<CR>
" Tab movement
nnoremap <silent> q <Esc>:tabprevious<CR>
nnoremap <silent> w <Esc>:tabnext<CR>
" Exit terminal mode and return to normal mode in the file
tnoremap <Esc> <C-\\><C-n>:normal!<CR>
" Hide terminal line numbers
autocmd TermOpen * setlocal nonumber norelativenumber
"autocmd TermOpen * startinsert

call plug#begin()
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    Plug 'catppuccin/nvim'
    Plug 'slint-ui/vim-slint'
	Plug 'RRethy/vim-hexokinase'
	Plug 'nvim-tree/nvim-tree.lua'
	Plug 'nvim-tree/nvim-web-devicons' 
call plug#end()


inoremap <silent><expr> <CR> pumvisible() ? coc#_select_confirm() : "\\<CR>"
"Catpuccin
set background=dark
colorscheme catppuccin-macchiato

" Set the background to transparent
autocmd VimEnter * hi Normal guibg=NONE ctermbg=NONE
autocmd VimEnter * hi NormalNC guibg=NONE ctermbg=NONE
autocmd VimEnter * hi SignColumn guibg=NONE ctermbg=NONE
autocmd VimEnter * hi VertSplit guibg=NONE ctermbg=NONE

" Show CocList diagnostics quick
nnoremap e :CocList diagnostics<CR>

" Hexokinase Settings (Color preview
let g:Hexokinase_highlighters = ['backgroundfull']

" Nerd Tree auto toggle
`}
        </textarea>
      </div>
    </div>
  );
}

export default Config;
