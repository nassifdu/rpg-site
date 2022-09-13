
var file = open('data.json')
data = json.load(file)

print('Bem vindo ao gerenciadorRPG! O que deseja fazer?')

print("""
	

	[0] Sair
	[1] Listar itens
	[2] Adicionar item(s)
	[3] Remover item(s)
	[4] Modificar item

	""")

while True:

	opcao = input()

	try:
		opcao = int(opcao)
	except:
		print("Erro. Opção Inválida.")
		break

	if opcao == 0:
		break

	if opcao == 1:
		n = 0
		nCategorias = []
		print("Qual categoria?")

		for categoria in data:
			print('['+str(n)+']', categoria)
			nCategorias.append(categoria)
			n += 1

		categoriaOpcao = int(input())

		for secao in data[nCategorias[categoriaOpcao]]:
			print(secao)

file.close()