let userName = '';

function goToApology() {
  userName = document.getElementById("nameInput").value.trim();

  if (userName === "") {
    alert("Please enter your nickname.");
    return;
  }

  document.getElementById("welcomeScreen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("apologyScreen").classList.remove("hidden");

    document.getElementById("apologyText").innerHTML = `Dear ${userName}, I’m really sorry... 💔`;

    document.getElementById("apologyPara").innerHTML = `
      I know I have made mistakes, and for those I am truly sorry. 
      You are the most important part of my life, ${userName}, and being without you feels empty.
      Your smile lights up my darkest days, and your laughter is my favorite song.
      Every moment spent with you has been a memory I cherish deeply.
      I miss your presence, your warmth, your kindness—everything that makes you special.
      Please give me another chance to make things right.
      I promise to listen more, care more, and love you with all my heart.
      Life without you is not what I want—because you are my everything.
      Let’s fix this together, because our love is worth it.
      I'm asking you, with all my heart, to forgive me and let’s move forward—stronger than ever.
    `;
  }, 1000);
}

function showForgiveMessage() {
  document.getElementById("apologyScreen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("apologyScreen").classList.add("hidden");
    document.getElementById("finalMessageScreen").classList.remove("hidden");

    document.getElementById("finalMessage").innerHTML = `
      Thank you, ${userName}, for accepting my apology. 💖<br><br>
      Your forgiveness means the world to me, and I will never take your love for granted again.
      I promise to protect your heart, respect your feelings, and always stand by your side.
      You're not just my love—you are my inspiration, my peace, my everything. ❤️
    `;
  }, 1000);
}
