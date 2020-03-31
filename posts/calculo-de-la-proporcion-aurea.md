<!--
.. title: Cálculo de la proporción áurea
.. slug: calculo-de-la-proporcion-aurea
.. date: 2017-02-26 12:43:37 UTC-05:00
.. tags: matemáticas, números, proporción áurea, número áureo, número phi
.. category: grupo scalibur/temas especiales
.. link:
.. description: Descripción del cálculo de la proporción áurea
.. type: text
.. has_math: true
.. author: Edward Villegas-Pulgarin
-->

Una de las actividades desarrolladas en las sesiones de nuestro grupo de divulgación, involucro hablar de este número en particular por parte de dos de nuestros beneficiarios Santiago Mesa e Isabella Pérez.  

Aquí, Edward Villegas-Pulgarin nos detalla como se obtienen los valores que conocemos de \\(\phi\\).  

# Cálculando \\(\phi\\)

Para iniciar debemos tener en cuenta una de sus definiciones geométricas, en las cuales se entiende que el todo es a la parte mayor como la parte mayor es a la parte menor. Si llamamos a la parte mayor \\(b\\) y a la parte menor \\(a\\), y el todo es la suma de ambas partes, tenemos que:  

\\(
\begin{eqnarray}
\frac{a+b}{b} &=& \frac{b}{a} = \phi\\\\
a(a+b) &=& b^2\\\\
0 &=&  b^2 - ab - a^2
\end{eqnarray}
\\)

Ahora, la ecuación que obtenemos es de segundo grado en ambas variables por lo cual podemos usar la expresión dada por la formula general en alguna de las dos, lo que nos permite obtener:  

\\(
\begin{eqnarray}
b &=& \frac{-(-a) \pm \sqrt{(-a)^2 - 4(1)^2(-a^2)}}{2(1)^2} \\\\
b&=& \frac{a \pm \sqrt{a^2 + 4a^2}}{2} \\\\
b&=& \frac{a \pm \sqrt{5a^2}}{2} \\\\
b&=& \frac{a \pm a\sqrt{5}}{2} \\\\
b&=& a\left(\frac{1 \pm \sqrt{5}}{2}\right)
\end{eqnarray}
\\)

Ahora, sustituimos este resultado en uno de los lados de la proporción planteada inicialmente:  

\\(
\begin{eqnarray}
\phi &=& \frac{b}{a} \\\\
\phi &=& \frac{a\left(\frac{1 \pm \sqrt{5}}{2}\right)}{a} \\\\
\phi &=& \frac{1 \pm \sqrt{5}}{2} \approx \left\lbrace \begin{matrix}1.618034\\\\-0.618034\end{matrix} \right.
\end{eqnarray}
\\)

Resulta una curiosidad que la segunda opción en la proporción áurea sea justo la parte decimal de la primera opción. Por cuestión de uso, y como igual hablamos de proporciones, el signo no importará y finalmente nuestros dos valores para la proporción áurea son 1.618034 y 0.618034, correspondientes respectivamente a la parte mayor si la menor es 1 y a la parte menor si la mayor es 1 (queda para el lector verificar verificar que el segundo cumple exactamente la misma proporción que el primero).  
