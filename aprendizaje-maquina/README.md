# 🤖 Aprendizaje de Máquina

Laboratorios de la materia **Aprendizaje de Máquina** — Ingeniería en Software, Hybridge Education.
Desarrollados en **Python** con **Google Colab**, usando `pandas` y `scikit-learn`.

---

## 🍷 Lab 6: Clasificación de vinos con Árbol de Decisión y Bosque Aleatorio

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/dmtzsegura/actividades-tareas/blob/master/aprendizaje-maquina/Lab6_Arboles_Vinos.ipynb)

**Objetivo:** clasificar el tipo de vino (3 clases) a partir de 13 características químicas.

**Dataset:** [Wine](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_wine.html) de scikit-learn (178 muestras).

**Proceso:**
1. Carga y exploración de datos
2. División 80% entrenamiento / 20% prueba (estratificada)
3. Entrenamiento de `DecisionTreeClassifier` y `RandomForestClassifier`
4. Evaluación con exactitud (accuracy) y matriz de confusión

**Resultados:**

| Modelo | Exactitud |
|---|---|
| Árbol de decisión | 94.4% |
| Bosque aleatorio | 100% |

El bosque aleatorio superó al al árbol al combinar el voto de 100 árboles.
Al ser un conjunto de prueba pequeño (36 vinos), se recomienda validar con más datos.

---

👩‍💻: Daniela Martínez Segura
