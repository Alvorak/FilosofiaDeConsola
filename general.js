document.addEventListener("DOMContentLoaded", function() {
    recargarPaginaCadaMinuto();
    // Lista de textos con saltos de línea
  var textos = [
     // "Solitude's embrace,\nwithin the quiet gym's walls,\nstrength found, nameless eve.",
      //"Bitter love's refrain,\nlost in shadows,\nsorrow's tale,\nlemon tears cascade.",
     // "Iron whispers call,\nweights and sweat weave a strong tale,\ntraining echoes on.",
      "No citizen has a right to be an amateur in the matter of physical training,\nwhat a disgrace it is for a man to grow old without ever seeing the beauty and strength of which his body is capable.\n- Socrates",
      "It is exercise alone that supports the spirits and keeps the mind in vigor.\n- Aristotle",
      "It's not that we have a short time to live,\nbut that we waste much of it.\n- Seneca",
      "What you get by achieving your goals is not as important as what you become by achieving your goals.\n- Zig Ziglar",
      "It is a rough road that leads to the heights of greatness.\n- Seneca",
      "The greatest wealth is health.\n- Heraclitus",
      "The first and greatest victory is to conquer yourself.\n- Plato",
      "He who is brave is free.\n- Seneca",
      "The only easy day was yesterday.\n- Unknown",
      "It is not that we have a short time to live,\nbut that we waste much of it.\n- Seneca",
      "The supreme art of war is to subdue the enemy without fighting.\n- Sun Tzu, The Art of War",
      "Opportunities multiply as they are seized.\n- Sun Tzu, The Art of War",
      "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.\n- Sun Tzu, The Art of War",
      "In the midst of chaos, there is also opportunity.\n- Sun Tzu, The Art of War",
      "Discipline is the bridge between goals and accomplishment.\n- Jim Rohn",
      "Strength does not come from the body.\nIt comes from the will.\n- Arnold Schwarzenegger",
      "Your body can stand almost anything.\nIt's your mind that you have to convince.\n- Unknown",
      "Do something today that your future self will thank you for.\n- Unknown",
      "Struggle, challenge and rise to struggle again.\nThat's the only sword a struggler can use against death.\nDon't ever forget that.\n- Skull Knight, Berserk",
      "If you desire one thing for so long,\nit's a given that you'll miss other things along the way.\nThat's how it is...that's life.\n- Guts, Berserk",
      "I merely live by the flow of time,\nfrom moment to moment,\nwithout forming any particular bonds.\nI simply live.\n- Skull Knight, Berserk",
      "The world is not beautiful; and that, in a way,\nlends it a sort of beauty.\n- Guts, Berserk",
      "Death is never an apology.\nIt is an acknowledgment of defeat.\n- Skull Knight, Berserk",
      "It’s not the face that makes someone a monster.\nIt’s the choices they make with their lives.\n- Guts, Berserk",
      "No matter how deep the night,\nit always turns to day, eventually.\n- Guts, Berserk",
      "Fate may hang in the balance,\nbut the one who walks this path will not waver, and they will decide their own destiny.\n- Guts, Berserk",
      "To know sorrow is not terrifying.\nWhat is terrifying is to know you can't go back to happiness you could have.\n- Guts, Berserk",
      "Those who do not fear death live with true courage.\n- Skull Knight, Berserk",
      "Hate is a place where a man who can't stand sadness goes.\n- Puck, Berserk",
      "It is not the wound that teaches,\nbut the healing.\n- Guts, Berserk",
      "The important choices you make might not always be the right ones,\nbut that's okay.\nYou can always learn and grow from your mistakes.\n- Farnese, Berserk",
      "We are not bound by the chains of the past,\nbut we can build a future based on the present.\n- Isidro, Berserk",
      "Strength is not just about the body.\nIt's about the will and the heart.\n- Guts, Berserk"  
    ];

  // Obtener el elemento del terminal
  var terminal = document.getElementById("terminal");

  // Función para mostrar letras una a una
  function mostrarLetras(texto, index = 0) {
      if (index < texto.length) {
          if (texto[index] === '\n') {
              // Agregar un salto de línea
              terminal.innerHTML += '<br>';
          } else {
              terminal.innerHTML += texto.charAt(index);
          }

          index++;
          setTimeout(function() {
              mostrarLetras(texto, index);
          }, 100); // Ajusta la velocidad de escritura según tu preferencia
      }
  }

  // Mostrar texto aleatorio con efecto de escritura al cargar la página
  var textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
  mostrarLetras(textoAleatorio);
});
function recargarPaginaCadaMinuto() {
    setInterval(function() {
      location.reload();
    }, 60000); // 60000 milisegundos = 1 minuto
  }