# PGATS - CI

## OBJETIVO DO TESTE

Para esse teste serão efetuados 5 testes no total referente a 2 métodos de uma classe

## FUNCIONAMENTO DA PIPELINE
obs: O item 4 é referente a abertura do relatorio gerado no final da pipeline.

1. Foi criado um arquivo yaml no projeto para configurar a pipe
2. Neste arquivo yaml nós temos:
 - O nome da pipeline no 'name'
 - Na opção 'on' é onde é informado as opções para rodar a pipeline: 
    - A opção 'workflow_dispatch' é para conseguir rodar a pipeline manualmente
    - A opção 'schedule' é para rodar a pipeline em um dia e horario especifico configurado, no caso esta configurado para as 22:00 no sabado(Pois o cron é no tempo UTC e não o horario do Brasil)
    - A opção 'push' é para rodar a pipeline toda vez que tiver um push na branch main
 - Em seguida temos o job que ira rodar quando a pipeline for ativada
    - Temos então o nome do Job como 'E2E'
    - Depois temos em qual maquina será efetuada as configurações e os testes 'ubuntu-x', onde o X é a versão que no caso foi configurado para ser a ultima versão
 - Depois temos os passos do job, 'steps':
    - Aqui nós temos que pensar que precisamos fazer os passos como se fosse na nossa maquina para conseguirmos abrir e rodar os testes do projeto
    - O 1° passo é clonar o projeto
    - O 2° passo é instalar o node
    - O 3° passo é instalar as dependencias
    - O 4° passo é executar os testes que existem no projeto
    - O 5° passo é salvar o relatorio allura configurado no projeto no github
3. Observações:
 - Não foi inserido nos steps a instalação do mocha e nem do allura pois o arquivo package.json contem as dependencias do mocha e do allura, e com isso ao rodar o step de instalar as dependencias vai ser lido esse arquivo, vai ser verificado essas dependencias e instalado as dependencias que contem nesse arquivo.
 - Outro ponto é que como o arquivo package.json não estava no gitignore e era lido durante o processo, a configuração 'type: "module"' na qual é a que estamos aprendendo para poder exportar/importar arquivos dentro do projeto não foi necessaria configurar no yaml. Pois essa configuração já estava salva no packge.json

4. Relatorio do Allura:
 - Não consegui utilizar a action do allura que vi no github para salvar o relatorio no github pages, então para conseguir abrir o relatorio é necessario efetuar os passos abaixo:
   - 1°: Efetuar o download do arquivo zip que é gerado no 'Artifacts' do github após finalização da pipeline
   - 2°: Extrair o arquivo completo
   - 3° Abrir o cmd/git bash na pasta extraida
   - 3°: No gitbash instalar o servidor local utilizando o comando: npx http-server
   - 4°: Abrir um dos links informados 

