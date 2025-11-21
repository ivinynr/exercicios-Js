#Obtenha dados da altura e o gênero (H ou M) de 15 pessoas e apresente os seguintes resultados:
# A maior e a menor altura do grupo;
# A média de altura dos homens;
# O número de mulheres.

media_altura_homem=()
numero_H=()
numero_M=()

pessoas = []
for i in range(3):
    altura = float(input(f"Digite a altura {i + 1} em centímetros: "))
    genero = input(f"Digite o gênero {i + 1} (H/M): ").upper()
    pessoas.append((altura, genero))

altura_H = [altura for altura, genero in pessoas if genero == 'H']
altura_M = [altura for altura, genero in pessoas if genero == 'M']
maior_altura = max(altura_H + altura_M)
print(f'Maior altura do grupo: {maior_altura} centímetros')
menor_altura = min(altura_H + altura_M)
print(f'Menor altura do grupo: {menor_altura} centímetros')


media_altura_homens = (altura_H) / numero_H
print("media da altura dos homens:{media_altura_homens}")
numero_M= altura_M+altura_M
print("numero de mulheres:{numero_M}")
    

