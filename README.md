<h1>📔 MyDiary - App de Diário Pessoal</h1>

<h2>📋 Descrição do Projeto</h2>
<p>
O <b>MyDiary</b> é um aplicativo de diário pessoal desenvolvido em <b>React Native</b> com <b>TypeScript</b>.  
Ele utiliza um banco de dados local, garantindo que suas informações fiquem armazenadas somente no dispositivo, sem necessidade de conexão com a internet, ideal para quem busca <b>privacidade</b>.  
O foco do projeto é a funcionalidade; o design ainda é simples e pode ser aprimorado.
</p>

<h2>🎯 Objetivo</h2>
<p>
Oferecer um aplicativo prático e seguro para registrar notas do dia a dia, permitindo criar, editar, visualizar e apagar anotações, além de visualizá-las em formato de lista ou calendário.
</p>

<h2>🛠️ Tecnologias Utilizadas</h2>

<h3>Frontend / App</h3>
<ul>
  <li><b>React Native</b> - Framework para desenvolvimento mobile</li>
  <li><b>TypeScript</b> - Tipagem estática e maior segurança</li>
  <li><b>Expo Router</b> - Navegação baseada em arquivos</li>
  <li><b>React Native Calendars</b> - Visualização em calendário</li>
</ul>

<h3>Banco de Dados</h3>
<ul>
  <li><b>SQLite</b> (via wrapper no projeto) - Armazenamento local</li>
</ul>

<h2>📚 Funcionalidades</h2>

<h3>1️⃣ CRUD de Notas</h3>
<ul>
  <li>Criar novas anotações</li>
  <li>Editar anotações existentes</li>
  <li>Excluir anotações</li>
  <li>Visualizar detalhes de cada nota</li>
</ul>

<h3>2️⃣ Visualizações</h3>
<ul>
  <li>Listagem completa de notas</li>
  <li>Visualização no calendário com emojis representando o humor do dia</li>
</ul>

<h2>🚀 Como Executar</h2>

<p><b>Pré-requisitos</b></p>
<ul>
  <li>Node.js >= 18</li>
  <li>Expo CLI instalado globalmente (<code>npm install -g expo-cli</code>)</li>
  <li>Emulador Android/iOS ou dispositivo físico com o app <b>Expo Go</b></li>
</ul>

<p><b>Instalação</b></p>
<pre>
git clone https://github.com/RomarioSilva98/MyDiary.git
cd mydiary
npm install
</pre>

<p><b>Execução</b></p>
<pre>
npx expo start
</pre>

<h2>🏗️ Estrutura do Projeto</h2>

<h3>📁 Organização de Arquivos</h3>
<ul>
  <li><b>app/</b> - Telas e rotas do aplicativo (Expo Router)</li>
  <li><b>components/</b> - Componentes reutilizáveis (Header, BottomBar, etc.)</li>
  <li><b>hooks/</b> - Hooks customizados (useNotes, useCalendar)</li>
  <li><b>styles/</b> - Contexto e temas (dark/light)</li>
  <li><b>db/</b> - Configuração e funções do banco local</li>
  <li><b>utils/</b> - Funções auxiliares (ex.: formatDate)</li>
</ul>

<h2>🎯 Conceitos Aprendidos</h2>

<ul>
  <li>Gerenciamento de estado com hooks customizados</li>
  <li>Integração com banco de dados local (SQLite)</li>
  <li>Uso de navegação baseada em arquivos com Expo Router</li>
  <li>Implementação de tema claro/escuro com Context API</li>
  <li>Renderização condicional em lista e calendário</li>
</ul>

<h2>👥 Desenvolvido por</h2>
<p>Romário Silva</p>

<h2>📄 Licença</h2>
<p>
Este projeto foi desenvolvido para fins de aprendizado e uso pessoal.  
Sinta-se à vontade para modificar e melhorar o visual conforme desejar.
</p>
