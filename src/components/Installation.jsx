import Code from "./Code";
import { getLanguagePlugins } from "../config";

function VimInstallation() {
  let languages = getLanguagePlugins().join(" ");

  return (
    <div className="mt-5">
      <p className="heading">Install Guide</p>
      <hr />

      <p className="subheading">Placing configuration</p>

      <div className="grid grid-cols-2 w-full gap-20 items-start justify-center p-0 m-0">
        <div className="flex flex-col">
          <p className="section">Vim</p>
          <p>
            Copy or download the config as <code>~/.vimrc</code> where{" "}
            <code>.vimrc</code> is in your home directory.
          </p>
        </div>
        <div>
          <p className="section">Neovim</p>
          <p>
            Copy or download the config as <code>~/.config/nvim/init.vim</code>{" "}
            where <code>init.vim</code> is in <code>~/.config/nvim/</code>.
          </p>
        </div>
      </div>

      <p className="subheading">Installing dependencies</p>

      <div>
        <p className="section">Node JS</p>
        <Code title="Debian/Ubuntu" className="my-5">
          apt install node
        </Code>
        <Code title="Arch Linux" className="my-5">
          sudo pacman -S node
        </Code>
        <Code title="Other" className="my-5">
          curl -sL install-node.vercel.app/lts | bash
        </Code>
      </div>

      <div>
        <br />
        <p className="section">Plugins</p>
        <p>
          Config.vim uses{" "}
          <a href="https://github.com/junegunn/vim-plug">vim-plug</a> as a
          plugin manager. The config automatically installs all needed plugins,
          but if you need to install or update, run <code>:PlugInstall</code>{" "}
          and <code>:PlugUpdate</code> inside Vim.
        </p>
      </div>

      {languages && (
        <div>
          <br />
          <br />
          <p className="section">Languages</p>
          <p>
            Config.vim uses{" "}
            <a href="https://github.com/neoclide/coc.nvim">coc.nvim</a> as a
            language server hoster. To install all your languages, enter Vim and
            run{" "}
            <Code title="Install Languages" className="my-5">
              :CocInstall {languages}
            </Code>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
export default VimInstallation;
