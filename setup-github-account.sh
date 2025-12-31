#!/bin/bash

# Script para configurar otra cuenta de GitHub en este proyecto
# Uso: ./setup-github-account.sh "NuevoUsuario" "nuevo@email.com"

NEW_USERNAME="${1:-NUEVO_USUARIO}"
NEW_EMAIL="${2:-nuevo@email.com}"

echo "Configurando Git para este repositorio..."
echo "Usuario: $NEW_USERNAME"
echo "Email: $NEW_EMAIL"
echo ""

# Configurar usuario y email solo para este repositorio
git config user.name "$NEW_USERNAME"
git config user.email "$NEW_EMAIL"

echo "✅ Configuración completada!"
echo ""
echo "Configuración actual:"
git config user.name
git config user.email
echo ""
echo "Para cambiar el remote URL (si el repositorio pertenece a otra cuenta):"
echo "git remote set-url origin https://github.com/NUEVO_USUARIO/joaFit.git"
