Para rodar o projeto pela primeira vez localmente:

docker-compose up -d # Subir o banco de dados localmente

npm ci # Instalar as dependências
npx prisma generate # Gere o client Prisma

npm run migrate:dev      # cria tabelas locais
npx prisma db seed       # insere dados iniciais

npm run dev # Iniciar projeto

Para rodar o projeto depois da configuração inicial:

docker-compose up -d # Subir o banco de dados localmente
npm run dev # Iniciar projeto

