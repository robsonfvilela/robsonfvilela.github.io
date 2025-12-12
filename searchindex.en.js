var relearn_searchindex = [
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: About",
    "uri": "/tags/about/index.html"
  },
  {
    "breadcrumb": "",
    "content": "public class Main { public static void main(String[] args) { System.out.println(\"Olá, Mundo!\"); } }",
    "description": "public class Main { public static void main(String[] args) { System.out.println(\"Olá, Mundo!\"); } }",
    "tags": [
      "About",
      "Personal"
    ],
    "title": "Hello, World!",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Posts",
    "content": "Incorporar vídeo Para que o Hugo exiba vídeo do Youtube embutido em um post, é necessário habilitar a opção “unsafe” no arquivo de configuração hugo.toml, como mostrado aqui.\nworkflow.yaml\n[markup] [markup.goldmark.renderer] hardWraps = false # unsafe = false unsafe = true xhtml = false https://terminalroot.com.br/2021/07/crie-seu-site-no-github-com-hugo-escrito-em-go.html#google_vignette\nNesse vídeo instalamos e configuramos o HUGO um Static Site Generator escrito na Linguagem de Programação Go (do Google), além de criarmos um arquivo de DEPLOY com SHELL SCRIPT utilizando WORKFLOWS para serem gerenciados pelo ACTIONS do GitHub.\nAssista ao Vídeo\nDescobrir mais Desenvolvimento compilar Linguagem de programação Compiladores Desenvolvimento de software Compilador Linguagem Linguagem de Programação linguagens de programação\nInstalação\nDependências Git e Go sudo apt install git sudo snap install go –classic # Ou: sudo apt install golang-go go version 02. Construir o binário mkdir $HOME/src cd $HOME/src git clone https://github.com/gohugoio/hugo.git cd hugo go install –tags extended 03. Instalação sudo mv ~/go/bin/hugo /usr/local/bin/ hugo version 04. Pós instalação Limpando\ncd sudo rm -rf go src 05. Crie um repositório com nome do seu usuário se não existir: https://github.com/SEU_USUARIO/SEU_USUARIO onde ficará o código fonte do seu blog. Se quiser ainda adicione um README.md customizado para aparecer como apresentação do seu perfil do GitHub como nesse artigo.\nCrie também um repositório de nome https://github.com/SEU_USUARIO/SEU_USUARIO.github.io para ser o seu blog.\nClone somente o repositório SEU_USUARIO git clone https://github.com/SEU_USUARIO/SEU_USUARIO\nGere seu site hugo dentro de SEU_USUARIO forçando; hugo new site SEU_USUARIO –force\nAdicione um tema como submódulo, encontre um tema aqui: https://themes.gohugo.io/: git submodule add https://github.com/niklasbuschmann/contrast-hugo.git themes/contrast-hugo Use como submódulo para não ter problemas futuros.\nConfigure seu config.toml na raiz de SEU_USUARIO com os seguintes dados: baseURL precisa estar configurado para o seu blog online languageCode o idioma do seu blog Descobrir mais Linguagem de programação Compilador compilar Python Linguagem de Programação Desenvolvimento Compiladores programar Desenvolvimento de software linguagem de programação\ntitle o título do seu blog theme o nome do tema que você clonou [permalink] como deseja que as url do seu blog apareça, saiba mais aqui Exemplo:\nbaseURL = “https://SUA_URL/” languageCode = “en-us” title = “My new blog made with Hugo: The Pinguim” theme = “contrast-hugo” [permalinks] posts = “/:filename/” 11. Verifique temporariamente seu site: hugo server E acesse o endereço: http://localhost:1313/, digite Ctrl + C para parar o servidor.\nCrie e edite sua primeira postagem hugo new posts/primeiro-post-exemplo.md /home/user/SEU_USUARIO/content/posts/primeiro-post-exemplo.md Exemplo de postagem, remova a linha draft: true: title: “Primeiro Post Exemplo” date: 2021-07-07T00:01:00-03:00 Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n#include \u003ciostream\u003e int main( int argc , char ** argv ){ std::cout \u003c\u003c \"Olá, Mundo!\" \u003c\u003c '\\n'; return 0; } Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Teste para ver se está tudo funcionando normalmente hugo server\nAdicione seu https://github.com/SEU_USUARIO/SEU_USUARIO.github.io como submódulo e de nome public git submodule add https://github.com/SEU_USUARIO/SEU_USUARIO.github.io public Atenção ao nome da branch, a master não é mais a default e sim a main. Saiba mais aqui.\nConstrua seu site estático rodando o comando hugo hugo\nEntre no diretório public/ e adicione, commit e suba seu site: cd public git add . git commit -m “first deploy” git push origin main\nAcesse: https://SEU_USUARIO.github.io/ e veja se está tudo certo. Descobrir mais Compiladores Linguagem Linguagem de Programação Compilador Linguagem de programação linguagens de programação\nUtilizando Workflow para Actions e deploy Crie um diretório e um subdiretório na raiz de SEU_USUARIO e dentro deles um arquivo de nome gh-pages.yml e insira esse conteúdo ao mesmo\nmkdir -p .github/workflows vim .github/workflows/gh-pages.yml 19. Adicione, commit e suba todos os arquivos git add . git commit -m “my source blog” git push origin main 20. Monitore o Workflow Descobrir mais compilar linguagens de programação Linguagem programar Desenvolvimento de software Python programação Desenvolvimento linguagem de programação Programação Vá no Actions do GitHub: https://github.com/SEU_USUARIO/SEU_USUARIO/actions e veja se o deploy foi gerado corretamente.\nAutomatizando tudo para novas postagens Crie um arquivo de nome vim deploy.sh e insira esse conteúdo nele: #!/usr/bin/env bash hugo commit=“No comment for this commit” [[ ! -z “${1}” ]] \u0026\u0026 commit=\"${1}\" cd public git add -A git commit -m “${commit}” git push origin main\ncd .. git add -A git commit -m “${commit}” git push origin main 22. Dê permissão de execução: chmod +x deploy.sh 23. Crie um postagem nova: hugo new posts/meu-segundo-post.md E preencha seu artigo como desejar\nPublique ./deploy.sh “Minha nova postagem”\nAcompanhe se deu certo Descobrir mais programar Python Linguagem Desenvolvimento de software Programação Linguagem de programação compiladores Compilador Linguagem de Programação linguagem de programação Em https://github.com/SEU_USUARIO/SEU_USUARIO/actions e veja o novo artigo no seu site: https://SEU_USUARIO.github.io/.\nConfigurações Se você criar uma nova postagem ou editar a que já existe, verificará que o Hugo ignorará suas tags HTML, por exemplo, um vídeo incorporado.\nSe formos ver o código fonte da página, aparecerá somente essa linha no lugar do nosso HTML: Descobrir mais programação compiladores linguagens de programação Compilador Compiladores Python linguagem de programação Linguagem de programação Linguagem de Programação Desenvolvimento Para resolver isso: adicione esse toml ao seu config.toml e pesquise(Vim: /unsafe) a opçao: unsafe deixe como true .\nEm outros vídeos ou postagens veremos mais dicas de Hugo, como criar páginas, templates próprios, inserir campo de comentários e outras coisas!\nAcompanhe as novidades em: https://terminalroot.com.br/newsletter.",
    "description": "",
    "tags": [],
    "title": "Meu Terceiro Post",
    "uri": "/meu-terceiro-post/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Personal",
    "uri": "/tags/personal/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Posts",
    "uri": "/posts/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Posts",
    "content": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Proin ac consequat arcu. Maecenas et sem vel massa tempor egestas. Donec non justo sed elit efficitur luctus. Sed at felis semper, elementum erat a, varius quam. Vivamus euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, quis gravida nunc nisl in mauris. Curabitur euismod, nisl vel consectetur interdum, nisl nisi aliquet nunc, quis gravida nunc nisl in mauris.\nlorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Proin ac consequat arcu. Maecenas et sem vel massa tempor egestas. Donec non justo sed elit efficitur luctus. Sed at felis semper, elementum erat a, varius quam. Vivamus euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, quis gravida nunc nisl in mauris. Curabitur euismod, nisl vel consectetur interdum, nisl nisi aliquet nunc, quis gravida nunc nisl in mauris.",
    "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Proin ac consequat arcu. Maecenas et sem vel massa tempor egestas. Donec non justo sed elit efficitur luctus. Sed at felis semper, elementum erat a, varius quam. Vivamus euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, quis gravida nunc nisl in mauris. Curabitur euismod, nisl vel consectetur interdum, nisl nisi aliquet nunc, quis gravida nunc nisl in mauris.",
    "tags": [],
    "title": "Meu Segundo Post",
    "uri": "/meu-segundo-post/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Posts",
    "content": "Mais",
    "description": "",
    "tags": [],
    "title": "Meu Primeiro Post",
    "uri": "/meu-primeiro-post/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "",
    "description": "",
    "tags": [
      "Config"
    ],
    "title": ".config",
    "uri": "/config/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "",
    "description": "",
    "tags": [
      "About",
      "Personal"
    ],
    "title": "About Me",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Config",
    "uri": "/tags/config/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Hugo",
    "uri": "/tags/hugo/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Terminal",
    "content": "Documentação de referência para gerenciar este blog.\nTerminal Criar um novo projeto:\nhugo new site mysite\nCriar um novo post:\nhugo new content/my-first-post.md\nModelo de Post:\n--- title: \"My First Post\" date: 2024-06-20T12:00:00Z draft: true tags: [tag1, tag2] --- ## Introdução \u003c!--more--\u003e Seu conteúdo aqui. Carregar o servidor local:\nhugo server -t terminal --disableFastRender --noHTTPCache\n-t: define o tema a ser usado. terminal: nome do tema` --disableFastRender: desativa o renderização rápida para garantir que todas as mudanças sejam refletidas corretamente. --noHTTPCache: desativa o cache HTTP para refletir as mudanças imediatamente.",
    "description": "Documentação de referência para gerenciar este blog.",
    "tags": [
      "Hugo",
      "Terminal"
    ],
    "title": "Hugo",
    "uri": "/terminal/hugo/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Terminal",
    "uri": "/tags/terminal/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "Terminal",
    "description": "Terminal",
    "tags": [
      "Terminal"
    ],
    "title": "Terminal",
    "uri": "/terminal/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: App",
    "uri": "/tags/app/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Terminal",
    "content": "Comando divertidos Trem Mostra um trem passando da direita para a esquerda.\nbrew install sl sl Star Wars: Episode IV — A New Hope nc towel.blinkenlights.nl 23 Banner em ASCII banner -w 30 TEXTO Para que o texto fique na horizotal, instale o figlet.\nfiglet -w 30 TEXTO Alguns sites oferecem artes de ASCII:\ncurl artscene.textfiles.com/asciiart/dragon.txt Previsão do tempo para os próximos 3 dias curl http://wttr.in/ O dia na história # Learn famous birthdays on a specific date: cat /usr/share/calendar/calendar.birthday | grep 03/14 # Learn historical events on a specific date: cat /usr/share/calendar/calendar.history | grep 06/15 # Learn a musical event on a specific date cat /usr/share/calendar/calendar.music | grep 10/09 Referências Mac Terminal commands: Have fun with Mac’s least-known program. Disponível em: \u003chttps://macpaw.com/how-to/cool-terminal-commands-on-mac\u003e. Acesso em: 05 nov. 2025.\nFun Mac Terminal Commands. Disponível em: \u003chttps://medium.com/@allenxiang/fun-mac-terminal-commands-a481267dc26c\u003e. Acesso em: 05 nov. 2025.",
    "description": "Comando divertidos",
    "tags": [
      "Terminal"
    ],
    "title": "Comandos",
    "uri": "/terminal/terminal/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Linux",
    "content": "As configurações abaixo são para o Manjaro Linux.\nFlatpak Instalar Flatpak sudo apt install flatpak Instalar o plugin GNOME Software Flatpak Permite instalar apps sem precisar da linha de comando. sudo apt install gnome-software-plugin-flatpak Adicione o repositório Flathub flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo Reinicie o sistema para concluir a configuração\nAplicativos Flatpak Adobe Reader flatpak install flathub com.adobe.Reader flatpak run com.adobe.Reader Gerenciador de Tarefas flatpak install flathub io.missioncenter.MissionCenter flatpak run io.missioncenter.MissionCenter Gnome Extensions flatpak install flathub org.gnome.Extensions flatpak run org.gnome.Extensions Heroic flatpak install flathub com.heroicgameslauncher.hgl flatpak run com.heroicgameslauncher.hgl Inkscape flatpak install flathub org.inkscape.Inkscape flatpak run org.inkscape.Inkscape Warehouse (Gerenciador de Flatpak) flatpak install flathub io.github.flattool.Warehouse flatpak run io.github.flattool.Warehouse Gear Lever (Gerenciador de AppImage) flatpak install flathub it.mijorus.gearlever flatpak run it.mijorus.gearlever IntelliJ IDEA CE flatpak install flathub com.jetbrains.IntelliJ-IDEA-Community flatpak run com.jetbrains.IntelliJ-IDEA-Community KeePassXC flatpak install flathub org.keepassxc.KeePassXC flatpak run org.keepassxc.KeePassXC LibreOffice flatpak install flathub org.libreoffice.LibreOffice flatpak run org.libreoffice.LibreOffice LocalSend flatpak install flathub org.localsend.localsend_app flatpak run org.localsend.localsend_app Minecraft flatpak install flathub com.mojang.Minecraft flatpak run com.mojang.Minecraft Minecraft Bedrock Launcher flatpak install flathub io.mrarm.mcpelauncher flatpak run io.mrarm.mcpelauncher Obsidian flatpak install flathub md.obsidian.Obsidian flatpak run md.obsidian.Obsidian RetroArch flatpak install flathub org.libretro.RetroArch flatpak run org.libretro.RetroArch Steam flatpak install flathub com.valvesoftware.Steam flatpak run com.valvesoftware.Steam Visual Studio Code flatpak install flathub com.visualstudio.code flatpak run com.visualstudio.code VLC flatpak install flathub org.videolan.VLC flatpak run org.videolan.VLC Outros Aplicativos Kitty sudo pacman -S kitty Linha de Comando bat pacma ### btop ```sh sudo pacman -S btop n -S bat\n### Fastfetch ```sh sudo pacman -S fastfetch FZF sudo pacman -S fzf Git sudo pacman -S git Hugo sudo pacman -S hugo NeoVim sudo pacman -S neovim Instalar LazyVim Make a backup of your current Neovim files:\nmv ~/.config/nvim{,.bak} optional but recommended\nmv ~/.local/share/nvim{,.bak} mv ~/.local/state/nvim{,.bak} mv ~/.cache/nvim{,.bak} Clone the starter\ngit clone https://github.com/LazyVim/starter ~/.config/nvim Remove the .git folder, so you can add it to your own repo later\nrm -rf ~/.config/nvim/.git Start Neovim!\nnvim Rode :LazyHealth depois da instalação.\nYazi sudo pacman -S yazi ffmpeg 7zip jq poppler fd ripgrep fzf zoxide resvg imagemagick ZSH sudo pacman -S zsh Definir ZSH como Shell Padrão\nEm Mac M1:\nchsh -s $(which zsh) Em Mac Intel:\nchsh -s /usr/local/bin/zsh Instalar Oh My ZSH sh -c \"$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\" Instalar Tema Powerlevel 10 K git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \"${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k\" ### ```sh cd powerlevel10k ./prompt_powerlevel9k_setup",
    "description": "",
    "tags": [
      "Linux",
      "Manjaro"
    ],
    "title": "Configuração do Manjaro",
    "uri": "/linux/manjaro_conf/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e MacOS",
    "content": "As configurações abaixo são para o MacOs Monterey (12.7.6), no MacBook Pro (Retina, 13-inch, Early 2015).\n1. Dicas Criar Atalho para Abrir Aplicativos Específicos YouTube\nConfigurações Link Simbólico ln -s \"\u003corigmem\u003e\" \"\u003cdestino\u003e\" -s: soft link: vários links diferentes que apontam para um mesmo arquivo. Tem número de inode diferente do arquivo original. Use ls -li para mostrar o inode. Se apagar o arquivo original, o soft link fica quebrado. ln \"\u003corigmem\u003e\" \"\u003cdestino\u003e\" Sem o -s, cria um hard link. Duas entradas para o mesmo arquivo. Tem número de inode igual ao do arquivo original. Se apagar o arquvio original, o hard link continua funcionando, porque, na prática, são arquivos diferentes.",
    "description": "",
    "tags": [
      "Mac"
    ],
    "title": "Configurações",
    "uri": "/macos/configuracao_mac/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Git",
    "uri": "/tags/git/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Terminal",
    "content": "Configurar Chave SSH no GitHub Verificar se existe Chave SSH no seu sistema:\nls -al ~/.ssh Gerar chave SSH\nssh-keygen -t ed25519 -C \"usuario@email.com\" Agent pid\neval \"$(ssh-agent -s)\" Se aparecer a mensagem de que a chave SSH está to open, mude a permissão:\nchmod 600 ~/.ssh/id_ed25519 600: somente o usuário pode ler e escrever. Para conferirir:\nls -l ~/.ssh O resultado deve ser algo como:\n-rw------- 1 usuario grupo 411 id_ed25519\nDepois, adicione novamente:\nssh-add ~/.ssh/id_ed25519 Ler a chave SSH e adicionar ao GitHub:\nLer:\ncat id_ed25519.pub Adicionar\nSettings \u003e SSH and GPG Keys \u003e New SSH Key \u003e Key type: Authentication Key Comandos básicos do Git git init Inicia um novo repositório Git em um diretório.\ngit init Cria um novo repositório enquanto especifica o nome do projeto.\ngit init [nome_do_projeto] git add Prepara alterações em arquivos para o próximo commit:\ngit add nome_do_arquivo Adiciona todos os arquivos de uma vez:\ngit add . git commit Cria uma mensagem de commit para as alterações, tornando-as parte do histórico do seu projeto:\ngit commit -m \"Adicionar novo recurso\" git status Exibe informações importantes sobre as modificações e o status de preparação de seus arquivos.\ngit status git log Permite visualizar uma lista cronológica do histórico de commits:\ngit log git diff Compara as alterações entre o diretório de trabalho e o commit mais recente. Por exemplo, esse uso do git diff identifica as diferenças em um arquivo específico:\ngit diff arquivo1.txt Para comparar as alterações entre dois commits, use o seguinte:\ngit diff commit1 commit2 git rm Remove arquivos do seu diretório de trabalho e prepara a remoção para o próximo commit.\ngit rm arquivo1.txt git mv Renomeia e move arquivos em seu diretório de trabalho. Aqui está o comando do Git para renomear um arquivo:\ngit mv arquivo1.txt arquivo2.txt Para mover um arquivo para um diretório diferente, digite:\ngit mv arquivo1.txt nova_pasta/ git config Configura vários aspectos do Git, incluindo informações e preferências do usuário. Por exemplo, digite esse comando para definir seu endereço de e-mail para os commits:\ngit config --global user.email \"seu-email@exemplo.com\" O sinalizador -global aplica as configurações universalmente, afetando seu repositório local.\nComandos de branch e merge git branchi gerencia ramificações em seu repositório Git. Aqui está o uso básico do git branch para listar todas as ramificações existentes:\ngit branch Para criar um branch chamada “recurso”, use:\ngit branch recurso Renomeia um branch:\ngit branch -m nome-do-branch novo-nome-do-branch git checkouti Permite alternar entre ramificações e restaurar arquivos de diferentes commits. Mudar para um branch existente:\ngit checkout nome_do_branch Descarta alterações em um arquivo específico e revertê-lo para o último commit:\ngit checkout -- nome_do_arquivo `git merge`` Mescla um branch de recurso ou tópico no branch principal. Abaixo está um exemplo de uso do git merge:\ngit merge nome_do_branch git cherry-pick Permite que aplicar commits específicos de um branch para outro sem mesclar um branch inteiro.\ngit cherry-pick commit_hash git rebase Aplica alterações de um branch do Git em outro, movendo ou combinando commits. Ele ajuda a manter um histórico de commits mais limpo:\ngit rebase main git tag Marca pontos específicos em seu histórico do Git, como v1.0 ou v2.0:\ngit tag v1.0 Comandos de repositório remoto Git git clone Cria uma cópia de um repositório remoto em seu computador local. Um exemplo de uso básico do git clone é clonar um repositório do GitHub:\ngit clone https://github.com/username/meu-projeto.git git push Envia os commits do branch local do Git para um repositório remoto, atualizando-o com suas alterações mais recentes. Se desejar enviar as das alterações do repositório local chamado “principal” para o repositório remoto chamado “origem”:\ngit push origem principal git pull Obtém e integra as alterações de um repositório remoto em seu branch local atual. Aqui está um exemplo de uso do git pull para extrair alterações do branch principal:\ngit pull origem mestre git fetch Recupera novos commits de um repositório remoto sem mesclá-los automaticamente em seu branch atual, use este comando:\ngit fetch origem `git remote`` Gerencia os repositórios remotos associados ao seu repositório local. Lista os repositórios remotos configurados no projeto:\ngit remote Lista os nomes e as URL associadas a cada diretório remoto:\ngit remote -v Para adicionar um novo repositório remoto, especifique seu nome e URL:\ngit remote add origem https://github.com/username/origem.git git submodule Usado para gerenciar repositórios separados incorporados dentro de um repositório Git. Para adicionar um submódulo ao seu repositório principal, use:\ngit submodule add https://github.com/username/submodule-repo.git caminho/do/submodulo Comandos avançados do Git git reset Desfaz alterações e manipula o histórico de commits.\ngit reset arquivo1.txt git stash Armazena alterações temporárias que ainda não estão prontas para receber o commit.\ngit stash Para ver uma lista dos armazenamentos temporários:\ngit stash list Para aplicar a alteração mais recente e removê-la da lista de alterações temporárias:\ngit stash pop git bisect Usado principalmente para identificar bugs ou problemas no histórico do seu projeto. Para iniciar o processo de bissecção:\ngit bisect start Usando o comando abaixo, o Git navegará automaticamente pelos commits para encontrar os que apresentam problemas:\ngit bisect run \u003ctest-script\u003e git blame Determina o autor e a alteração mais recente em cada linha do arquivo:\ngit blame arquivo1.txt git reflog Faz um registro das alterações de um branch do Git. Ele permite que você acompanhe a linha do tempo do seu repositório, mesmo quando os commits são excluídos ou perdidos:\ngit reflog git clean Remove arquivos não rastreados de seu diretório de trabalho, o que resulta em um repositório mais limpo e organizado:\ngit clean [options] As [options] podem ser personalizadas com base em suas necessidades específicas, como -n para uma execução seca (dry run), -f para forçar ou -d para diretórios.\nMostar repositório remoto git remote -v: Mostra o repositório remoto. git remote get-url origin: Mostra apenas o URL do repositório remoto. git remote get-url --push \u003cnome-do-remoto\u003e: Se tiver mais de um remoto (ex.: upstrem, fork, etc.) git remote show origin: Mostra detalhes completos da configuração. git config --get remote.origin.url: Mostra só o push do origin do repositório remoto atual. Referências: Comandos Git: uma lista dos mais usados para simplificar seu trabalho. Disponível em: \u003chttps://www.hostinger.com/br/tutoriais/comandos-git?utm_campaign=Generic-Tutorials-DSA-t3%7CNT:Se%7CLO:BR\u0026utm_medium=ppc\u0026gad_source=1\u0026gad_campaignid=19588998604\u0026gbraid=0AAAAADMy-hbelzrSz2wqeXvzkYn-l-XdG\u0026gclid=Cj0KCQiA5abIBhCaARIsAM3-zFUZ2nhGcfS3FwDh4lO8-EVh3HABQ3_3lhxkMlaAeAIDPr3fa4bUg6YaAiniEALw_wcB\u003e. Acesso em: 04 nov. 2025.",
    "description": "",
    "tags": [
      "Terminal",
      "Git"
    ],
    "title": "GIT",
    "uri": "/terminal/git/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e MacOS",
    "content": "As configurações abaixo são para o MacOs Monterey (12.7.6), no MacBook Pro (Retina, 13-inch, Early 2015).\n1. Gerenciadores via Terminal Homebrew /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\" Atualizar Homebrew\nbrew install update \u0026\u0026 brew install upgrade MacPorts (Monterey) https://github.com/macports/macports-base/releases/download/v2.11.6/MacPorts-2.11.6-12-Monterey.pkg NIX curl -L https://nixos.org/nix/install | sh sh \u003c(curl -L https://nixos.org/nix/install) 2. Aplicativos via Terminal bat sudo port install bat brew install bat btop brew install btop nix-env -iA nixpkgs.btop sudo port install bat fastfetch brew install fastfetch nix-shell -p fastfetch sudo port install fastfetch fzf brew install fzf nix-env -iA nixpkgs.fzf git brew install git nix-env -iA nixpkgs.git hugo brew install hugo nix-shell -p hugo sudo port install hugo NeoVim brew install neovim sudo port install neovim Instalar LazyVim Make a backup of your current Neovim files:\nmv ~/.config/nvim{,.bak} optional but recommended\nmv ~/.local/share/nvim{,.bak} mv ~/.local/state/nvim{,.bak} mv ~/.cache/nvim{,.bak} Clone the starter\ngit clone https://github.com/LazyVim/starter ~/.config/nvim Remove the .git folder, so you can add it to your own repo later\nrm -rf ~/.config/nvim/.git Start Neovim!\nnvim Rode :LazyHealth depois da instalação.\nskhd (atalhos presonalizados) brew install koekeishiya/formulae/skhd skhd --start-service yazi brew install yazi sudo port install yazi Yazi não mostra miniaturas de PDF:\n1º Instalar o poppler.\nsudo port install poppler brew install poppler zsh brew install zsh Definir ZSH como Shell Padrão\nEm Mac M1:\nchsh -s $(which zsh) Em Mac Intel:\nchsh -s /usr/local/bin/zsh Instalar Plugin Autossuggestions\ngit clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions No .zshrc:\nplugins=(git zsh-autosuggestions) Instalar o Plugin ZSH Completions\ngit clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-completions No .zshrc:\nplugins=(git zsh-completions) Instalar o Plugin Syntaz Highlight\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git \\ ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting No .zshrc: *\nplugins=(zsh-syntax-highlighting) * zsh-syntax-highlighting deve ser o ÚLTIMO plugin da lista, porque ele precisa ser carregado depois de todos os outros.\nInstalar Oh My ZSH sh -c \"$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\" Instalar Tema Powerlevel 10 K git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \"${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k\" cd powerlevel10k ./prompt_powerlevel9k_setup No .zshrc:\nZSH_THEME=powerlevel10k/powerlevel10k p10k configure 3. Aplicativos Gráficos Calibre brew install --cask calibre CotEditor brew install --cask coteditor Temas para CotEditor GitHub\nIntelliJ CE brew install --cask intellij-idea-ce KeePassXC sudo port install KeePassXC Kitty brew install --cask kitty LocalSend brew install --cask localsend Obsidian brew install --cask obsidian Ungoogled Chromium brew install --cask ungoogled-chromium Acesse as informações do aplicativo:\nchrome://ungoogled-first-run/ UTM (Máquina Virtual) Visual Studio Code brew install --cask visual-studio-code 4. AppStore e DMG AffinityStudio AppCleaner Site\nCharge Limiter GitHub\nGoogle Drive App Store\nIINA (Player de vídeo) Site\nMarginNote 4 App Store\nWhatsApp App Store",
    "description": "",
    "tags": [
      "Mac",
      "App"
    ],
    "title": "Instalação de App",
    "uri": "/macos/app_mac/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e .config",
    "content": "Arquivo de configuração do terminal Kitty.\n# Fonte → font_family family=\"JetBrains Mono\" font_family family=\"JetBrainsMonoMedium Nerd Font Mono\" bold_font auto italic_font auto bold_italic_font auto font_size 14 cursor_shape beam # Tema → `kitten themes` # Solarized Dark Higher Contrast # include current-theme.conf # END_KITTY_THEME # --- Perfil SSH automático --- shell /bin/zsh ##### ATALHOS ----------------- # Nova Aba # map ctrl+t new_tab map cmd+t new_tab # Mac map cmd+t new_tab # Fechar Aba Atual # map ctrl+shift+q close_tab map cmd+w close_tab # Mover entre as abas map cmd+1 goto_tab 1 map cmd+2 goto_tab 2 map cmd+3 goto_tab 3 map cmd+4 goto_tab 4 map cmd+5 goto_tab 5 map cmd+6 goto_tab 6 map cmd+7 goto_tab 7 map cmd+8 goto_tab 8 map cmd+9 goto_tab 9 map cmd+0 goto_tab 0 # Dividir tela enabled_layouts splits map cmd+\\ launch --location=vsplit map cmd+= launch --location=hsplit ## Mover entre telas map cmd+up neighboring_window up map cmd+left neighboring_window left map cmd+right neighboring_window right map cmd+down neighboring_window down ## Mover telas map cmd+shift+up move_window up map cmd+shift+left move_window left map cmd+shift+right move_window right map cmd+shift+down move_window down ## Redimensionar telas map cmd+alt+left resize_window narrower map cmd+alt+right resize_window wider map cmd+alt+up resize_window taller map cmd+alt+down resize_window shorter map cmd+alt+0 resize_window reset ## Fechar tela map cmd+shift+w close_window macos_traditional_fullscreen no # macos_show_window_title_in all # BEGIN_KITTY_THEME # Dracula include current-theme.conf # END_KITTY_THEME",
    "description": "Arquivo de configuração do terminal Kitty.",
    "tags": [
      "Config"
    ],
    "title": "Kitty",
    "uri": "/config/kitty/kitty/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "Linux",
    "description": "Linux",
    "tags": [
      "Linux"
    ],
    "title": "Linux",
    "uri": "/linux/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Linux",
    "uri": "/tags/linux/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Mac",
    "uri": "/tags/mac/index.html"
  },
  {
    "breadcrumb": "Hello, World!",
    "content": "MacOS",
    "description": "MacOS",
    "tags": [
      "Mac"
    ],
    "title": "MacOS",
    "uri": "/macos/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Manjaro",
    "uri": "/tags/manjaro/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e .config",
    "content": "Arquivo de configuração do Neovim, com LazyVim e algumas customizações.\nA starter template for LazyVim. Refer to the documentation to get started.\n-- bootstrap lazy.nvim, LazyVim and your plugins require(\"config.lazy\") require(\"config.options\")",
    "description": "Arquivo de configuração do Neovim, com LazyVim e algumas customizações.",
    "tags": [
      "Config"
    ],
    "title": "NeoVim",
    "uri": "/config/nvim/nvim/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Vim",
    "uri": "/tags/vim/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e Terminal",
    "content": "y Copiar Objetos de texto (copia a palavra ou região onde o cursor está)\nCopia linha inteira: yy ou Y\nCopia apenas o conteúdo da palavra onde o cursor está: yiw\ny = yank (copiar) i = inside w = word Copia a palavra inteira + os espaços ao redor: yaw\ny = yank a = around w = word *- Copia o conteúdo dentro das aspas: y'i ou yi\"\ny = yank i = inside ' = objeto de texto das aspas Copia tudo dentro dos parênteses: y(i\ny = yank i = inside ( = parênteses Copia tudo dentro dos colchetes: y[i\ny = yank i = inside [ = colchetes Copia tudo dentro das chaves: y{i\ny = yank i = inside { = chaves Copia o conteúdo dentro da tag HTML: y\u003cit\ny = yank \u003c = indica objeto de texto HTML i = inside t = tag Copiar → do cursor até o fim Copia do cursor até o início da próxima palavra: yw\ny = yank w = até a próxima palavra Copia até a próxima PALAVRA: yW\ny = yank W = próxima PALAVRA (blocos delimitados por espaço) Copia do cursor até o final da linha: y$\ny = yank $ = fim da linha Copia a linha inteira: yy\ny = yank y = linha inteira Copia do cursor até o final do arquivo: yG\ny = yank G = fim do documento Copia até o fim da sentença atual: y)\ny = yank ) = fim da sentença Copia até o fim do parágrafo atual: y}\ny = yank } = fim do parágrafo Copia até antes do caractere x: ytx y = yank t = até antes do caractere x = caractere Copia até e incluindo o caractere x: yfx y = yank f = até o caractere (inclusive) x = alvo Copia até a próxima ocorrência da palavra (sem copiá-la): y/word y = yank \\/ = busca para frente word = alvo === Copiar ← do cursor até o início #line(length: 100%)\nCopia até o início da linha: y0 y = yank 0 = início da linha Copia até o início do documento: ygg y = yank gg = início do arquivo Copia até o início da PALAVRA: yB y = yank B = início da PALAVRA anterior Copia até o início da sentença: y( y = yank ( = início da sentença Copia até o início do parágrafo: y{ y = yank { = início do parágrafo Copia até a ocorrência anterior da palavra: y?word y = yank ? = busca para trás word = alvo ]\n#pagebreak()\n== d: Deletar\n#v(50pt)\n#columns()[\n=== Objetos de texto #line(length: 100%)\n===diw\nd = delete i = inside w = word → apaga apenas o conteúdo da palavra onde o cursor está (sem espaço ao redor) ===daw\nd = delete a = around w = word → apaga a palavra inteira + espaços ao redor ===d'i (ou di\" etc.)\nd = delete i = inside ' = objeto de texto \"aspas simples\" (ou \"aspas duplas\", etc.) → apaga o conteúdo dentro das aspas onde o cursor está ===d(i\nd = delete i = inside ( = objeto de texto \"parênteses\" → apaga tudo dentro dos parênteses ===d[i\nd = delete i = inside [ = objeto de texto \"colchetes\" → apaga tudo dentro dos colchetes ===d{i\nd = delete i = inside { = objeto de texto \"chaves\" → apaga tudo dentro das chaves ===d\u003cit\nd = delete i = inside t = tag (objeto HTML/XML) \u003c = indica que o alvo é uma tag → apaga tudo dentro da tag HTML onde o cursor está === Apaga → do cursor até o fim #line(length: 100%)\n===dw\nd = delete w = até o início da próxima palavra → apaga do cursor até o início da próxima palavra ===dW\nd = delete W = até a próxima PALAVRA (separada por espaço) → apaga até a próxima PALAVRA (ignorando pontuação) ===d$\nd = delete $ = movimento para o fim da linha → apaga do cursor até o final da linha ===dd\nd = delete d = linha inteira (repetição do operador) → apaga a linha inteira ===dG\nd = delete G = ir ao fim do documento → apaga do cursor até o final do arquivo ===d)\nd = delete ) = até a próxima sentença → apaga do cursor até o fim da sentença atual ===d}\nd = delete } = até o próximo parágrafo → apaga do cursor até o final do parágrafo atual ===dtx\nd = delete t = até antes do caractere x = caractere alvo → apaga do cursor até antes do caractere x ===dfx\n(Você escreveu dx, mas o correto é dfx para “delete to x (inclusive)”)\nd = delete f = até o caractere x = caractere alvo → apaga do cursor até e incluindo o caractere x ===d/word\nd = delete / = buscar para frente word = termo buscado → apaga do cursor até a próxima ocorrência da palavra (não apaga a palavra) === Apaga ← do cursor até o início #line(length: 100%)\n===d0\nd = delete 0 = início da linha → apaga do cursor até o início da linha ===dgg\nd = delete gg = ir ao início do arquivo → apaga do cursor até o início do documento ===dB\nd = delete B = início da PALAVRA anterior (bloco separado por espaços) → apaga do cursor até o início da PALAVRA ===d(\nd = delete ( = até a sentença anterior → apaga do cursor até o início da sentença ===d{\nd = delete { = até o parágrafo anterior → apaga do cursor até o início do parágrafo ===d?word\nd = delete ? = buscar para trás word = termo buscado → apaga do cursor até a ocorrência ANTERIOR da palavra == 🔥 Se quiser, posso fazer:\n✅ a versão completa para copy (yank) ✅ a versão completa para change (c) ✅ um cheat sheet PDF ✅ uma tabela unificada de operadores + movimentos + text-objects\nÉ só pedir.\nAqui está uma versão organizada, no mesmo formato que você pediu para os comandos de cópia (yank) no Vim, divididos em:\n✔ Copia a palavra abaixo do cursor ✔ Copia até o fim ✔ Copia até o início\n]\n#pagebreak()\n= Vim\n== Copiar\n=== Copia a palavra abaixo do cursor\n(text-objects: copia a palavra ou região onde o cursor está)\nCopia a palavra abaixo do cursor (apenas o conteúdo): yiw Copia a palavra abaixo do cursor, incluindo espaços: yaw Copia tudo entre aspas: y'i (troque `’` por `\"`, ` etc.) Copia tudo entre parênteses: y(i Copia tudo entre colchetes: y[i Copia tudo entre chaves: y{i Copia tudo entre tags HTML: y\u003cit (ex.: y\u003citdiv) === Copia até o fim\n(do cursor em diante)\nCopia do cursor até o fim da palavra: yw Copia do cursor até o fim da WORD (palavra “grande”): yW Copia do cursor até o fim da linha: y$ Copia a linha inteira: yy Copia do cursor até o fim do documento: yG Copia da posição atual até o final da sentença: y) Copia da posição atual até o final do parágrafo: y} Copia do cursor até o caractere x: ytx Copia do cursor até e incluindo o caractere x: yx Copia até a próxima ocorrência da palavra: y/word === Copia até o início\n(do cursor para trás)\nCopia do cursor até o início da linha: y0 Copia do cursor até o início do documento: ygg Copia da posição atual até o início da palavra grande (WORD): yB Copia da posição atual até o início da sentença: y( Copia da posição atual até o início do parágrafo: y{ Copia até a ocorrência anterior da palavra: y?word Se quiser, posso fazer também uma versão para colagem (pasting), ou transformar tudo em uma cheatsheet completa de edição no Vim (PDF ou markdown).\nAqui está a versão para colagem (paste), organizada no mesmo modelo das anteriores.\n⚠️ Diferente de deletar (d) e copiar (y), os comandos de colagem no Vim são menos numerosos. Mesmo assim, eles podem ser organizados nas mesmas três categorias conceituais.\n== Colar texto no Vim\n=== Cola abaixo do cursor\n(ou seja, insere o texto depois ou abaixo da posição atual)\nCola depois do cursor (modo normal): p Cola abaixo da linha atual (se o último yank/delete foi de uma linha): p Cola após a palavra selecionada em visual mode: p Cola de um registro específico após o cursor (ex.: registro \"a): \"ap === Cola até o fim\n(conceito adaptado: colar em posição que continua o fluxo natural do texto)\nCola no final da linha atual (movendo o cursor para $ antes):\n$p *Cola no *final do documento:\nGp Cola após um movimento que vai “até o fim”: Exemplo — colar após o fim da sentença:\n)p Cola após o fim do parágrafo:\n}p } ``` *(Aqui o ato de “colar até o fim” significa colar **depois** de um movimento que leva ao final de algo.)* --- === Cola até o início *(colar *antes* da posição atual)* * Cola **antes do cursor**: `P` * Cola **acima da linha atual** (quando o yank/delete foi de linha): `P` * Cola no **início da linha*: 0P\n* Cola no **início do documento*: ggP\nCola antes da palavra ou bloco após um movimento “para o início”: Exemplo — colar antes do início da sentença: (P\nCola antes do início do parágrafo: {P\nCola de um registro específico **antes** do cursor: “aP\n--- === 🎉 Resumo rápido (mais usados) | Ação | Comando | | ---------------------- | ---------------------------------- | | Colar depois do cursor | `p` | | Colar antes do cursor | `P` | | Colar abaixo da linha | `p` (se foi copiada linha inteira) | | Colar acima da linha | `P` (se foi copiada linha inteira) | | Colar de um registro | `\"ap` ou `\"aP` | --- Se quiser, posso também montar: 📌 **Uma cheatsheet completa com delete + copy + paste** 📌 Em formato **Markdown**, **PDF** ou **Typst**. Perfeito — aqui estão **TODOS os comandos**, exatamente no mesmo formato detalhado que você pediu, agora para **copy (yank → `y`)** e **change (alterar → `c`)**. Estrutura de cada explicação: COMANDO y/c = operador (copy ou change) i/a/(movimento) = significado → resultado final\n--- #pagebreak() --- == 🔥 **Agora a versão completa para CHANGE (alterar → `c`)** O operador `c` **apaga + entra em modo INSERT imediatamente**. --- == 🟧 **CHANGE (c)** --- == ✅ **TEXT-OBJECTS** --- ===**`ciw`** c = change (apaga + entra em insert) i = inside w = word → substitui apenas o conteúdo da palavra\n===**`caw`** c = change a = around w = word → substitui a palavra inteira + espaços ao redor\n===**`c'i`** c = change i = inside ’ = aspas → substitui o conteúdo dentro das aspas\n===**`c(i`** c = change i = inside ( = parênteses → substitui tudo dentro dos parênteses\n===**`c[i`** c = change i = inside [ = colchetes → substitui tudo dentro dos colchetes\n===**`c{i`** c = change i = inside { = chaves → substitui tudo dentro das chaves\n===**`c\u003cit`** c = change i = inside t = tag \u003c = HTML → substitui tudo dentro da tag HTML\n--- == ✅ **CHANGE ATÉ O FIM (para frente)** --- ===**`cw`** c = change w = até a próxima palavra → apaga e substitui do cursor até a próxima palavra\n===**`cW`** c = change W = próxima PALAVRA → substitui até a próxima PALAVRA\n===**`c$`** c = change $ = fim da linha → substitui até o final da linha\n===**`cc`** c = change c = linha inteira → apaga e substitui a linha inteira\n===**`cG`** c = change G = fim do arquivo → apaga e substitui até o final do arquivo\n===**`c)`** c = change ) = fim da sentença → substitui até o fim da sentença\n===**`c}`** c = change } = fim do parágrafo → substitui até o fim do parágrafo\n===**`ctx`** c = change t = até antes do caractere x = alvo → substitui até antes do caractere x\n===**`cfx`** c = change f = até o caractere (inclusive) x = alvo → substitui até e incluindo o caractere x\n===**`c/word`** c = change / = busca para frente word = alvo → substitui até a próxima ocorrência da palavra\n--- == ✅ **CHANGE ATÉ O INÍCIO (para trás)** --- ===**`c0`** c = change 0 = início da linha → substitui até o início da linha\n===**`cgg`** c = change gg = início do documento → substitui até o início do arquivo\n===**`cB`** c = change B = início da PALAVRA anterior → substitui até o início da PALAVRA\n===**`c(`** c = change ( = início da sentença → substitui até o início da sentença\n===**`c{`** c = change { = início do parágrafo → substitui até o início do parágrafo\n===**`c?word`** c = change ? = busca para trás word = alvo → substitui até a ocorrência anterior da palavra\n--- == 🎁 Quer que eu gere: ✅ Um **cheat sheet em PDF** ✅ Uma **tabela com d / y / c lado a lado** ✅ Uma **“gramática dos operadores do Vim”** ✅ Uma versão **extremamente resumida** para consulta rápida É só pedir. --- Perfeito! Aqui está **A GRAMÁTICA DOS OPERADORES DO VIM** — a explicação formal que mostra exatamente *como* comandos como `dw`, `ciw`, `y)`, `dap` etc. funcionam. --- ===🎯 **3. Gramática dos Operadores do Vim** A linguagem de comandos do Vim segue uma estrutura extremamente regular. Qualquer comando do tipo **delete / copy / change** segue esta gramática: --- ===🧠 **GRAMÁTICA GERAL** OPERADOR + MOVIMENTO OPERADOR + OBJETO-DE-TEXTO OPERADOR + REPETIÇÃO + MOVIMENTO/OBJETO OPERADOR + OPERADOR (caso especial: linha)\n--- ===🧱 1. **OPERADORES** | Operador | Significado | | -------- | ---------------------------------- | | `d` | delete | | `y` | yank (copiar) | | `c` | change (apagar + entrar no insert) | | `g~` | alternar maiúsc/minúsc | | `gu` | deixar minúsculo | | `gU` | deixar MAIÚSCULO | | `\u003e` | indent (shift right) | | `\u003c` | unindent (shift left) | --- ===🧭 2. **MOVIMENTOS (Motions)** Movimentos são “direções”. Operadores usam esses movimentos para saber **o que** alterar. ===**Movimentos básicos** | Movimento | Vai até… | | --------- | -------------------------------------- | | `w` | início da próxima palavra | | `W` | próxima PALAVRA (separada por espaços) | | `b` | início da palavra anterior | | `B` | início da PALAVRA anterior | | `e` | fim da palavra | | `ge` | fim da palavra anterior | | `0` | início da linha | | `$` | fim da linha | | `gg` | início do arquivo | | `G` | final do arquivo | ===**Movimentos condicionados a caracteres** | Movimento | Significado | | --------- | -------------------------- | | `f x` | vai **até** x (inclusive) | | `t x` | vai até **antes** de x | | `F x` | busca x para trás | | `T x` | busca antes de x para trás | ===**Movimentos estruturais** | Movimento | Vai até… | | --------- | ------------------ | | `)` | fim da sentença | | `(` | início da sentença | | `}` | próximo parágrafo | | `{` | parágrafo anterior | ===**Movimentos baseados em busca** | Movimento | Vai até… | | --------- | ------------------- | | `/word` | próxima ocorrência | | `?word` | ocorrência anterior | --- ===🧩 3. **OBJETOS DE TEXTO (Text Objects)** Text objects são unidades semânticas — diferem dos movimentos porque definem **regiões** completas. Sempre seguem este padrão: aX = around X (inclui delimitadores) iX = inside X (exclui delimitadores)\n| Objeto | Inside | Around | Descrição | | ---------- | ---------- | ---------- | --------------------- | | palavra | `iw` | `aw` | palavra | | sentença | `is` | `as` | sentença | | parágrafo | `ip` | `ap` | parágrafo | | aspas | `i'`, `i\"` | `a'`, `a\"` | texto entre aspas | | parênteses | `i(` | `a(` | parênteses | | colchetes | `i[` | `a[` | colchetes | | chaves | `i{` | `a{` | chaves | | tags HTML | `it` | `at` | conteúdo de tags HTML | --- ===⚙️ 4. **COMANDO = OPERADOR + MOVIMENTO** Exemplos: ===`dw` d = delete w = movimento até a próxima palavra → apaga até o início da próxima palavra\n===`d)` d = delete ) = movimento até o fim da sentença → apaga até o fim da sentença\n===`dtx` d = delete t = até antes do caractere x = caractere alvo → apaga até antes do x\n===`d/word` d = delete /word = movimento de busca → apaga até a próxima ocorrência\n--- ===🚀 5. **COMANDO = OPERADOR + TEXT OBJECT** ===`diw` d = delete i = inside w = word → apaga apenas a palavra\n===`daw` d = delete a = around w = word → apaga palavra + espaço ao redor\n===`ci(` c = change i = inside ( = parênteses → apaga conteúdo dentro dos parênteses e entra no insert mode\n===`ya{` y = yank a = around { = chaves → copia o bloco inteiro com chaves\n--- ===🔁 6. **REPETIÇÃO** Números inseridos antes do operador ou movimento repetem a ação. ===Exemplos: ===`3dw` 3 = repetir três vezes d = delete w = movimento palavra → apaga três palavras\n===`d3w` d = delete 3w = movimento de três palavras → apaga três palavras (mesmo resultado)\n===`y5j` // ``` // y = yank // 5j = mover cinco linhas para baixo // → copia cinco linhas // ``` // --- // ===✨ 7. **CASO ESPECIAL: OPERADOR DUPLICADO** // Alguns operadores definem seu objeto ao se repetirem: // | Comando | Significa | // | ------- | ----------------------------------------- | // | `dd` | apagar a linha inteira | // | `yy` | copiar a linha inteira | // | `cc` | apagar a linha inteira e entrar em insert | // Isto funciona porque o operador repetido equivale a “na linha”. // --- // ===🎉 Conclusão // Essa é a **gramática completa e formal** de como operadores do Vim funcionam. // Se quiser, posso também produzir: // 📌 **PDF estilizado** // 📌 **tabela colorida de operadores x movimentos x objects** // 📌 **exercícios para treinar** // Só pedir! = Vim == Apagar texto no Vim === Até o fim - Apaga do cursor até o fim da `palavra`: `dw` - Apaga toda a palavra abaio do cursor: `diw` - Apaga toda a palabra abaixo do cursor, incluindo os espaços ao redor: `daw` - Apaga do cursor até o fim da `linha`: `d$` - Apaga a `linha` inteira: `dd` - Apaga do cursor até o início da `linha`: `d0` - Apaga do cursor até o fim do `documento`: `dG` - Apaga do cursor até o início do `documento`: `dgg` - Apaga do cursor até o caractere `x`: `dtx` (onde `x` é o caractere desejado) - Apaga do cursor até e incluindo o caractere `x`: `dx` (onde `x` é o caractere desejado) - Apaga da atual até o final da `palavra`: `dW` === Até o início - Apaga da posição atual até o início da `palavra`: `dB` - Apaga da posição atual até o final da `sentença`: `d)` - Apaga da posição atual até o início da `sentença`: `d(` - Apaga da posição atual até o final do `parágrafo`: `d}` - Apaga da posição atual até o início do `parágrafo`: `d{` - Apaga tudo entre aspas: `d'i` (onde `'` pode ser substituído por qualquer tipo de aspas, como `\"`, \\`\\` \\` \\`\\`, etc.) - Apaga tudo entre parênteses: `d(i` - Apaga tudo entre colchetes: `d[i` - Apaga tudo entre chaves: `d{i` - Apaga tudo entre tags HTML: `d\\\u003ct`tag\u003e (onde `\u003ctag\u003e` é a tag HTML desejada, como `div`, `p`, etc.) - Apaga até a próxima ocorrência da `palavra`: `d/word` (onde `word` é a palavra desejada) - Apaga até a ocorrência anterior da `palavra`: `d?word` (onde `word` é a palavra desejada) /// ------------------------------------------------------- #pagebreak() = Vim `operador + alcance/text-object/movimento` == Apagar texto no Vim === Apaga a palavra abaixo do cursor (text-objects: afeta a palavra inteira onde o cursor está) + Apaga toda a palavra abaixo do cursor: `diw` + Apaga toda a palavra abaixo do cursor, incluindo os espaços ao redor: `daw` + Apaga tudo entre aspas: `d'i` *(substitua `'` por `\"`, ` ` etc.)* + Apaga tudo entre parênteses: `d(i` + Apaga tudo entre colchetes: `d[i` + Apaga tudo entre chaves: `d{i` + Apaga tudo entre tags HTML: `d\u003cit` (ex.: `d\u003citdiv`) === Apaga até o fim (do cursor em diante) + Apaga do cursor até o fim da *palavra*: `dw` + Apaga da posição atual até o final da *PALAVRA*: `dW` + Apaga do cursor até o fim da *linha*: `d$` + Apaga a *linha inteira*: `dd` + Apaga do cursor até o fim do *documento*: `dG` + Apaga da posição atual até o final da *sentença*: `d)` + Apaga da posição atual até o final do *parágrafo*: `d}` + Apaga do cursor até o caractere `x`: `dtx` + Apaga do cursor até e incluindo o caractere `x`: `dx` + Apaga até a próxima ocorrência de uma palavra: `d/word` === Apaga até o início (do cursor para trás) + Apaga do cursor até o início da *linha*: `d0` + Apaga do cursor até o início do *documento*: `dgg` + Apaga da posição atual até o início da *PALAVRA*: `dB` + Apaga da posição atual até o início da *sentença*: `d(` + Apaga da posição atual até o início do *parágrafo*: `d{` + Apaga até a ocorrência anterior da palavra: `d?word`",
    "description": "",
    "tags": [
      "Terminal",
      "Vim"
    ],
    "title": "Vim Keys",
    "uri": "/terminal/vim-keys/index.html"
  },
  {
    "breadcrumb": "Hello, World! \u003e .config",
    "content": "Arquivo de configuração do ZSH.\n# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc. # Initialization code that may require console input (password prompts, [y/n] # confirmations, etc.) must go above this block; everything else may go below. if [[ -r \"${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh\" ]]; then source \"${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh\" fi # If you come from bash you might have to change your $PATH. # export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH # Path to your Oh My Zsh installation. export ZSH=\"$HOME/.oh-my-zsh\" export PATH=\"/usr/local/bin:/opt/homebrew/bin:$PATH\" # MARKDOWN: Mostra ```: # autocmd FileType markdown setlocal conceallevel=0 # vim.keymap.set(\"n\", \"tc\", \":setlocal =\u0026conceallevel ? 'conceallevel=2' : 'conceallevel=2'\", { desc = \"[T]oggle [C]onceallevel\"} ) # detecta markdown corretamente # vim.cmd[[ # augroup filetypedetect # autocmd! # Define arquivos .md para usar a sintaxe markdown autocmd BufNewFile,BufRead *.md set synitax=markdown augroup END # ]] # Set name of the theme to load --- if set to \"random\", it will # load a random theme each time Oh My Zsh is loaded, in which case, # to know which specific one was loaded, run: echo $RANDOM_THEME # See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes # ZSH_THEME=\"robbyrussell\" # ZSH_THEME=\"agnoster\" # ZSH_THEME=\"dracula\" ZSH_THEME=\"powerlevel10k/powerlevel10k\" # Set list of themes to pick from when loading at random # Setting this variable when ZSH_THEME=random will cause zsh to load # a theme from this variable instead of looking in $ZSH/themes/ # If set to an empty array, this variable will have no effect. # ZSH_THEME_RANDOM_CANDIDATES=( \"robbyrussell\" \"agnoster\" ) # Uncomment the following line to use case-sensitive completion. # CASE_SENSITIVE=\"true\" # Uncomment the following line to use hyphen-insensitive completion. # Case-sensitive completion must be off. _ and - will be interchangeable. # HYPHEN_INSENSITIVE=\"true\" # Uncomment one of the following lines to change the auto-update behavior # zstyle ':omz:update' mode disabled # disable automatic updates # zstyle ':omz:update' mode auto # update automatically without asking # zstyle ':omz:update' mode reminder # just remind me to update when it's time # Uncomment the following line to change how often to auto-update (in days). # zstyle ':omz:update' frequency 13 # Uncomment the following line if pasting URLs and other text is messed up. # DISABLE_MAGIC_FUNCTIONS=\"true\" # Uncomment the following line to disable colors in ls. # DISABLE_LS_COLORS=\"true\" # Uncomment the following line to disable auto-setting terminal title. # DISABLE_AUTO_TITLE=\"true\" # Uncomment the following line to enable command auto-correction. # ENABLE_CORRECTION=\"true\" # Uncomment the following line to display red dots whilst waiting for completion. # You can also set it to another string to have that shown instead of the default red dots. # e.g. COMPLETION_WAITING_DOTS=\"%F{yellow}waiting...%f\" # Caution: this setting can cause issues with multiline prompts in zsh \u003c 5.7.1 (see #5765) # COMPLETION_WAITING_DOTS=\"true\" # Uncomment the following line if you want to disable marking untracked files # under VCS as dirty. This makes repository status check for large repositories # much, much faster. # DISABLE_UNTRACKED_FILES_DIRTY=\"true\" # Uncomment the following line if you want to change the command execution time # stamp shown in the history command output. # You can set one of the optional three formats: # \"mm/dd/yyyy\"|\"dd.mm.yyyy\"|\"yyyy-mm-dd\" # or set a custom format using the strftime function format specifications, # see 'man strftime' for details. # HIST_STAMPS=\"mm/dd/yyyy\" # Would you like to use another custom folder than $ZSH/custom? # ZSH_CUSTOM=/path/to/new-custom-folder # Which plugins would you like to load? # Standard plugins can be found in $ZSH/plugins/ # Custom plugins may be added to $ZSH_CUSTOM/plugins/ # Example format: plugins=(rails git textmate ruby lighthouse) # Add wisely, as too many plugins slow down shell startup. plugins=( git zsh-autosuggestions zsh-completions docker archlinux battery branch ) source $ZSH/oh-my-zsh.sh # User configuration # export MANPATH=\"/usr/local/man:$MANPATH\" # You may need to manually set your language environment # export LANG=en_US.UTF-8 # Preferred editor for local and remote sessions # if [[ -n $SSH_CONNECTION ]]; then # export EDITOR='vim' # else # export EDITOR='nvim' # fi # Compilation flags # export ARCHFLAGS=\"-arch $(uname -m)\" # Set personal aliases, overriding those provided by Oh My Zsh libs, # plugins, and themes. Aliases can be placed here, though Oh My Zsh # users are encouraged to define aliases within a top-level file in # the $ZSH_CUSTOM folder, with .zsh extension. Examples: # - $ZSH_CUSTOM/aliases.zsh # - $ZSH_CUSTOM/macos.zsh # For a full list of active aliases, run `alias`. # # Example aliases # alias zshconfig=\"mate ~/.zshrc\" # alias ohmyzsh=\"mate ~/.oh-my-zsh\" alias alexa=\"brew\" alias alexa-instale-=\"brew install \" alias update=\"brew update \u0026\u0026 brew upgrade\" # COMANDOS alias cl=\"clear\" alias lixo=\"rm -rf ~/.Trash/*\" ## ALIAS: VIM alias zshrc=\"vim ~/.zshrc\" ## ALIAS: CD alias project=\"cd ~/Projetos/\" alias project-linux=\"cd ~/Projetos/linux\" alias project-ads=\"cd ~/Projetos/ads-privado\" alias project-java=\"cd ~/Projetos/ads-privado/java\" alias project-typst=\"cd ~/Projetos/typst\" ## ALIAS: OUTROS alias zsh-restart=\"source ~/.zshrc\" # ILoveCandy # plugins=(git zsh-autosuggestions) # source ~/powerlevel10k/powerlevel10k.zsh-theme source ~/.oh-my-zsh/custom/themes/powerlevel10k/powerlevel10k.zsh-theme # To customize prompt, run `p10k configure` or edit ~/.p10k.zsh. [[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh export HOMEBREW_NO_BUILD_FROM_SOURCE=1 export PATH=\"/opt/homebrew/opt/llvm@17/bin:$PATH\" ss",
    "description": "Arquivo de configuração do ZSH.",
    "tags": [
      "Config"
    ],
    "title": "ZSH",
    "uri": "/config/zsh/zshrc/index.html"
  }
]
