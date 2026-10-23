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

## Lab 8 – Pipeline de Machine Learning: Netflix Customer Churn

Predicción de cancelación de clientes (churn) con un pipeline completo de scikit-learn.

**Archivos**
- `netflix_customer_churn.csv` – Dataset (Kaggle, sintético, CC0): 5000 clientes, 14 columnas, clases balanceadas.
- `Lab8_Netflix_Churn_Pipeline.ipynb` – Cuaderno con EDA, pipeline, evaluación y búsqueda de hiperparámetros.
- `modelo_churn_netflix.pkl` – Pipeline entrenado (Random Forest), exportado con joblib.

**Proceso**
- EDA numérico y categórico.
- Feature engineering con `FunctionTransformer`: `pago_recurrente`, `horas_por_perfil`, `inactivo_30`.
- Preprocesamiento con `ColumnTransformer`: `StandardScaler` + `OneHotEncoder`.
- Modelo base: Regresión Logística (F1 = 0.91).
- Validación cruzada estratificada de 5 folds (F1 = 0.913 ± 0.004).
- `GridSearchCV` comparando Regresión Logística y Random Forest.

**Resultados**
| Modelo | F1 (CV) | Accuracy (prueba) |
|---|---|---|
| Regresión Logística | 0.913 | 0.909 |
| Random Forest (mejor) | 0.983 | 0.989 |

> Nota: el alto desempeño se explica en parte porque el dataset es sintético.
> Para cargar el `.pkl` hay que definir antes la función `crear_variables`.

👩‍💻: Daniela Martínez Segura
