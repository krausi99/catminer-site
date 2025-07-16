# CatMiner – Proxy para Hashrate Index

Este repositório contém apenas a função serverless **/api/hashrate** necessária
para consumir a Hashrate Index no seu site Framer sem esbarrar em CORS.

## Estrutura
```
api/hashrate.js   ← proxy que repassa os dados
package.json      ← metadados simples
```

## Variável de ambiente
No painel da **Vercel** adicione:

- **Name:** `HI_API_KEY`
- **Value:** `hi.33c8312facd4d38d9e739f40cd7aa6`

Depois clique em **Redeploy**.

## Teste
```
GET https://<your-project>.vercel.app/api/hashrate?model=s21
```
Deve retornar o JSON do ASIC Antminer S21.
